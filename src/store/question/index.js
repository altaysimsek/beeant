import store from "@/store/index";
import { createQuestionFromUser } from "../../firebase/utils";

const state = {
    postQuestion: null,
};

const getters = {
    getPostQuestion(state) {
        return state.postQuestion;
    },
};

const mutations = {
    setPostQuestion(state, payload) {
        state.postQuestion = payload;
    },
};

const actions = {
    async postData({ commit }, editordata) {
        store.commit("setLoading",true)
        store.commit("clearError")
        const user = store.getters.getCurrentUser;
        const newQuestion = {
            author: user.uid,
            authorName:user.name,
            content: editordata,
            category:"all",
            level:"all",
            likes:[],
            dislikes:[],
            comments:[]
        }
        try{
            await createQuestionFromUser(newQuestion, null);
        }catch(error){
            store.commit("addError",error)
        }
       
        commit("setPostQuestion", newQuestion);
        store.commit("setLoading",false)
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
