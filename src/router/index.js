import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "@/views/Test.vue";
import Soruekle from "@/views/Soruekle.vue";
import Sorular from "@/views/Sorular.vue";

import AuthGuard from "./auth-guard";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/soruekle",
        name: "Soru Ekle",
        component: Soruekle,
        beforeEnter: AuthGuard,
    },
    {
        path: "/sorular",
        name: "Sorular",
        component: Sorular,
    },
    {
        path: "/profil",
        name: "Profil",
        component: Test,
        beforeEnter: AuthGuard,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
