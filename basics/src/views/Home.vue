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
