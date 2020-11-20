import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Toast Notify
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

//CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

//Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const newUser = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
        };
        store.dispatch("autoSignIn", newUser);
    }
    
    //If there is a guard at any page,you can't reach while logged in when you refresh this page ,it's a solution for this.
    //You don't need to render every time only renders when user auth changed
    if (!app) {
        
        app = new Vue({
            created() {
                
            },
            store,
            router,
            render: (h) => h(App),
        }).$mount("#app");
        
    }
    
});
