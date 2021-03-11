<template>
    <div>
        <h1>profile </h1>
        <h1>Name : {{dName}}</h1>
        <p> this is the default pfp</p>
        <img v-bind:src = "pfp" >

         
    </div>
</template>

<script>
import firebase from "firebase/app";
export default {
    mounted(){
        this.getUserData()
        
    },
    methods:{
        getUserData(){
            let user = firebase.auth().currentUser;
            this.dName = user.displayName;
            this.pfp = user.photoURL;
            console.log(this.pfp);
        },
        
    },

    data() {
    
        return {
            dName: "",
            pfp: null
        };
  }     
}
</script>

<style lang="scss" scoped>

</style>