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
    async postData({ commit }, {editorData,category,level}) {
        store.commit("setLoading",true)
        store.commit("clearError")
        console.log("postData:",editorData,category,level)
        const user = store.getters.getCurrentUser;
        const newQuestion = {
            author: user.uid,
            authorName:user.name,
            content: editorData,
            category:category,
            level:level,
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
