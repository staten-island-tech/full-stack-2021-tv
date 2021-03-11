import Vue from "vue";
import "firebase/auth";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";


// web app's Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA59N6G1QldK2tKnDZug9sML6-e5_7MBBA",
  authDomain: "full-stack-b060c.firebaseapp.com",
  projectId: "full-stack-b060c",
  storageBucket: "full-stack-b060c.appspot.com",
  messagingSenderId: "779739438237",
  appId: "1:779739438237:web:a0a4e368f95ddc9db74874",
  measurementId: "G-M7REYEVV0V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
