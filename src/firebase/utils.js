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
            duration:4000,
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

export { createUserProfileDocument, createQuestionFromUser, getQuestions };
