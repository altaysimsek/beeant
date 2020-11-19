import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router/index.js";
import store from "@/store/index";

import { createUserProfileDocument } from "../../firebase/utils";

const state = {
    currentUser: null,
};

const getters = {
    getCurrentUser(state) {
        return state.currentUser;
    },
};

const mutations = {
    setCurrentUser(state, payload) {
        state.currentUser = payload;
    },
};

const actions = {
    async signInWithGoogle({ commit }) {
        store.commit("clearError")
        store.commit("setLoading", true);
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            const { user } = await firebase.auth().signInWithPopup(provider);
            const newUser = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                role: "member",
            };
            await createUserProfileDocument(newUser, null);
            //İşlem başarı ile tamamlandıysa hataları sil.
            store.commit("clearError");
            commit("setCurrentUser", newUser);

            router.push("/");
        } catch (error) {
            store.commit("addError", { message: error.code });
        }
        store.commit("setLoading", false);
    },
    logOut({ commit }) {
        store.commit("clearError");
        firebase
            .auth()
            .signOut()
            .then(() => {
                commit("setCurrentUser", null);
                router.push("/");
            }).catch(error => {
                store.commit("addError", error);
            });
    },
    autoSignIn({ commit }, payload) {
        commit("setCurrentUser", payload);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
