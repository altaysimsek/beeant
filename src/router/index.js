import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Test from "@/views/Test.vue";
import SpecificSoru from "@/views/SpecificSoru.vue"
import Soruekle from "@/views/Soruekle.vue";
import Sorular from "@/views/Sorular.vue";
import Profile from "@/views/Profile.vue"
import Hakkında from "@/views/Hakkında.vue"

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
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: AuthGuard,
    },
    {
        path: "/profile/:id",
        name: "Profile SelectUser",
        component: Profile,
        beforeEnter: AuthGuard,
    },
    {
        path: "/sorular/:id",
        name: "Custom Sorular",
        component: SpecificSoru,
    },
    {
        path: "/hakkinda",
        name: "Hakkında",
        component: Hakkında,
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
