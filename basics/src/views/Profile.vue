<template>
    <div>
        <section class="user-banner-profile">
            <div class="user-profile"></div>
            <p id="logo-for-feed">Logo</p>
            <p id="banner-profile-empty-space"></p>
            <p id="settings">Settings</p>
            </section> 
        
        <section class="info-about-user">
            <div class="user-profile-pic/generic-info"></div>
            <div class="user-profile-pic"></div>
            <div class="generic-info">
                <div id="user-following-followers">
                    <p id="user-following">Following</p>
                    <p id="user-followers">Followers</p>
                </div>
                <p id="user-username-n-bio">Username/bio</p>
            </div>
        </section>

        <section class="user-banner-posts">
            <div class="user-posts/likes"></div>
            <p id="user-public-post">Public Posts</p>
            <p id="user-private-post">Private Posts</p>
            <p id="user-liked-post">Liked Posts</p>
        </section>

        <section class="user-posts">
            <div class="user-post-column">
                <div id="user-actual-posts">
                    <p id="post-settings-button"></p>
                    <p id="post-likes"></p>
                </div>
            </div>

            <div class="user-post-column">
                <div id="user-actual-posts">
                    <p id="post-settings-button"></p>
                    <p id="post-likes"></p>
                </div>
            </div>

            <div class="user-post-column-2">
                <div id="user-actual-posts">
                    <p id="post-settings-button"></p>
                    <p id="post-likes"></p>
                </div>    
            </div>
            
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.user-banner-profile{
    height: 6rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

#logo-for-feed{
    width: 5%;
    border: 2px solid;
}

#banner-profile-empty-space{
    width: 90%;
    border: 2px solid;
    border-left: none;
}

#settings{
    width: 5%;
    border: 2px solid;
}


.info-about-user{
    height: 15rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.user-profile-pic{
    height: 8rem;
    width: 8rem;
    margin: auto;
    display: flex;
    border-radius: 3rem;
    border: 2px solid;
}

.generic-info{
    height: 15rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

#user-following-followers{
    height: 7rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

#user-following{
    height: 5rem;
    width: 3rem;
    margin: auto;
    display: flex;
    border-radius: 2rem;
    border: 2px solid;
}

#user-followers{
    height: 5rem;
    width: 3rem;
    margin: auto;
    display: flex;
    border-radius: 2rem;
    border: 2px solid;
}

#user-username-n-bio{
    height: 7rem;
    width: 10rem;
    margin: auto;
    display: flex;
    border-radius: 2rem;
    border: 2px solid;
}

.user-banner-posts{
    height: 10rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

#user-public-post{
    width: 33.3%;
    border: 2px solid;
}

#user-private-post{
    width: 33.3%;
    border: 2px solid;
    border-left: none;
}

#user-liked-post{
    width: 33.4%;
    border: 2px solid;
    border-left: none;
}

.user-posts{
    height: 25rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.user-post-column{
    height: 25rem;
    width: 33.3%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.user-post-column-2{
   height: 25rem;
    width: 33.4%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 
}

#user-actual-post{
    height: 5rem;
    width: 33.3%;    
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    border: 2px solid;
}

</style>