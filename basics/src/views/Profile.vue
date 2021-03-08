<template>
    <div>
        <h1>profile </h1>
        <h1>Name : {{dName}}</h1>
         
    </div>
</template>

<script>
import firebase from "firebase/app";
export default {
    updated(){
        this.getUserData()
    },
    methods:{
        getUserData(){
            let user = firebase.auth().currentUser;
            this.dName = user.displayName;
        }
    },

    data() {
    
        return {
            dName: ""
        };
  }     
}
</script>

<style lang="scss" scoped>

</style>