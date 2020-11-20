import { db } from "@/main.js";
import store from "@/store/index";
import Vue from "vue";

//Create user profile
const createUserProfileDocument = async (userData, additionalData) => {
    const userRef = db.doc(`users/${userData.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const createdAt = new Date();
        try {
            await userRef.set({
                userData,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            store.commit("addError", error);
        }
    }
};

//Create question
const createQuestionFromUser = async (questionData, additionalData) => {
    //Bu kısımda da hata alınabilir
    const questionRef = await db.collection("question").doc();
    const createdAt = new Date();
    try {
        await questionRef.set({
            questionData,
            createdAt,
            ...additionalData,
        });
        Vue.$toast.open({
            message: "Soru başarıyla eklendi.",
            type: "success",
            duration: 4000,
            // all of other options may go here
        });
    } catch (error) {
        store.commit("addError", error);
    }

    return questionRef;
};

const getQuestions = async () => {
    //Bu kısımda da hata alınabilir
    const questionRef = await db.collection("question").get();
    const dataList = [];
    questionRef.forEach((doc) => {
        dataList.push({ id: doc.id, data: doc.data() });
    });
    return dataList;
};

const likeOrDislikeQuesiton = async (questionID, state, likerID) => {
    store.commit("clearError");
    
    const questionRef = await db.doc(`question/${questionID}`);
    const doc = await questionRef.get();
    if (!doc.exists) {
        Vue.$toast.open({
            message: "Böyle bir soru bulunamadı",
            type: "error",
            // all of other options may go here
        });
    } else {
        if (
            doc.data().questionData.likes.includes(likerID) &&
            state == "likes"
        ) {
            Vue.$toast.open({
                message: "Zaten bu soruyu beğenmişsin.",
                type: "error",
                // all of other options may go here
            });
        } else if (
            doc.data().questionData.dislikes.includes(likerID) &&
            state == "dislikes"
        ) {
            Vue.$toast.open({
                message: "Zaten bu soruyu beğenmemişsin.",
                type: "error",
                // all of other options may go here
            });
        } else if (
            doc.data().questionData.likes.includes(likerID) &&
            state == "dislikes"
        ) {
            let likesArray = doc.data().questionData.likes;
            let dislikeArray = doc.data().questionData.dislikes;
            likesArray.splice(likesArray.indexOf(likerID), 1);
            dislikeArray.push(likerID);
            let newData = doc.data().questionData;
            newData.likes = likesArray;
            newData.dislikes = dislikeArray;
            try {
                await questionRef.update({
                    questionData: newData,
                });
                await questionRef.update({
                    questionData: newData,
                });
            } catch (error) {
                store.commit("addError", error);
            }
        } else if (
            doc.data().questionData.dislikes.includes(likerID) &&
            state == "likes"
        ) {
            let likesArray = doc.data().questionData.likes;
            let dislikeArray = doc.data().questionData.dislikes;
             dislikeArray.splice(
                dislikeArray.indexOf(likerID),
                1
            );
            likesArray.push(likerID);
            let newData = doc.data().questionData;
            newData.likes = likesArray;
            newData.dislikes = dislikeArray;
            try {
                await questionRef.update({
                    questionData: newData,
                });
                await questionRef.update({
                    questionData: newData,
                });
            } catch (error) {
                store.commit("addError", error);
            }
        } else {
            if (state == "likes") {
                let likesArray = doc.data().questionData.likes;
                likesArray.push(likerID);
                let newData = doc.data().questionData;
                newData.likes = likesArray;

                try {
                    await questionRef.update({
                        questionData: newData,
                    });
                } catch (error) {
                    store.commit("addError", error);
                }
            } else if (state == "dislikes") {
                let dislikesArray = doc.data().questionData.dislikes;
                dislikesArray.push(likerID);
                let newData = doc.data().questionData;
                newData.dislikes = dislikesArray;
                try {
                    await questionRef.update({
                        questionData: newData,
                    });
                } catch (error) {
                    store.commit("addError", error);
                }
            }
        }
    }
    store.dispatch("getUpdateQuestions");
};

export {
    createUserProfileDocument,
    createQuestionFromUser,
    getQuestions,
    likeOrDislikeQuesiton,
};
