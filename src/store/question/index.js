import store from "@/store/index";
import { createQuestionFromUser,getQuestions } from "../../firebase/utils";

const state = {
    postQuestion: null,
    questions: null,
};

const getters = {
    getPostQuestion(state) {
        return state.postQuestion;
    },
    getQuestions(state) {
        return state.questions;
    },
};

const mutations = {
    setPostQuestion(state, payload) {
        state.postQuestion = payload;
    },
    setQuestion(state, payload) {
        state.questions = payload;
    },
};

const actions = {
    async postData({ commit }, { editorData, category, level }) {
        store.commit("setLoading", true);
        store.commit("clearError");

        const user = store.getters.getCurrentUser;
        const newQuestion = {
            author: user.uid,
            authorName: user.name,
            content: editorData,
            category: category,
            level: level,
            likes: [],
            dislikes: [],
            comments: [],
        };
        try {
            await createQuestionFromUser(newQuestion, null);
        } catch (error) {
            store.commit("addError", error);
        }

        commit("setPostQuestion", newQuestion);
        store.commit("setLoading", false);
    },
    async getUpdateQuestions({commit}){
        const questions = await getQuestions();
        commit("setQuestion", questions);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
