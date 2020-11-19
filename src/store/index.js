import Vue from "vue";
import Vuex from "vuex";
import user from "./user/index";
import question from "./question/index";
import error from "./error/index";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        question,
        error
    },
});
