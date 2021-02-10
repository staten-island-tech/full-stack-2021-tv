<template>
    <div class="login-box">
        <form>
            <h1 class= "login-title">Login</h1>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <div class = "login-signup-btn">
            <label id = "signUp-btn">Make An Account</label>
            <button type="submit" class="btn btn-dark btn-lg btn-block" id ="login-btn">Login</button>
            </div>
        </form>
    </div>
</template>

<style>
  .login-box {
    width: 90vh;
    margin: auto;
    border-style: solid;
    border-color: black;
    border-width: 2px;
    padding: 2rem;
    margin-top: 8%;
  }
  
  .login-title {
    text-align: center;
  }
  .login-signup-btn{
    display: flex;
    flex-direction: row;
  }
  #login-btn {
    width: 40%;
  }
  #signUp-btn {
    width: 60%;
  }
</style>



<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-firestore.js"></script>

<script>
  var firebaseConfig = {
    apiKey: "AIzaSyA59N6G1QldK2tKnDZug9sML6-e5_7MBBA",
    authDomain: "full-stack-b060c.firebaseapp.com",
    projectId: "full-stack-b060c",
    storageBucket: "full-stack-b060c.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //make auth and firestore references 
  const auth = firebase.auth();
  const db = firebase.firestore();
  db.settings({timestampsInSnapshots: true});
</script>
