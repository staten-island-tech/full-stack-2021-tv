import Vue from "vue";

import * as firebase from "firebase/app";
import "firebase/auth";


import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


const firebaseConfig = {
  apiKey: "AIzaSyA59N6G1QldK2tKnDZug9sML6-e5_7MBBA",
  authDomain: "full-stack-b060c.firebaseapp.com",
  projectId: "full-stack-b060c",
  storageBucket: "full-stack-b060c.appspot.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//make auth and firestore references 
// const auth = firebase.auth();
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});



