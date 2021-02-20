import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// web app's Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA59N6G1QldK2tKnDZug9sML6-e5_7MBBA",
  authDomain: "full-stack-b060c.firebaseapp.com",
  projectId: "full-stack-b060c",
  storageBucket: "full-stack-b060c.appspot.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
})
