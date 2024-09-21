
//this function will close the article section by clicking the x button
function delPost(id) {
    let theElementID = 'theArticle-' + id;
    let theElement = document.getElementById(theElementID);
    theElement.remove(theElementID);
}

// this is the function for clicking the like button
function LikePost(id) {

    let heart = document.getElementById("heart-image-"+ id);


    if (heart.src.indexOf("pink") === -1) {
        heart.src = "./pink-heart.png"
    }



    else {
        heart.src = "./black-heart.png"
    }
}


//here, we'll limit the amount of characters you can type in the field of text

function checkCharacterCount(textArea) {
    let counter = document.getElementById('input-chters')
    let container = document.getElementById('form-container')

    if (textArea.value.length > 160) {
        textArea.value = textArea.value.substr(0, 160)
        container.classList.add('error')
    }
    else {

        container.classList.remove('error')
    }

    counter.innerText = textArea.value.length
}


// the added error class, will be decorated in css



//here we are going to create a function to submit the post

function submitPost() {


    console.log('its working');

    let textArea = document.getElementById('input-textarea')
    let counter = document.getElementById('input-chters')
  
    let contentTOPOST = textArea.value;

    if (contentTOPOST.length === 0) {
        return false;
    }

    else{
    textArea.value = ' ';
    counter.innerText = 0;
    console.log('its working');
    createPostHTML(contentTOPOST);
    
    }
}


let currentPostID = 1;
function createPostHTML(postContent) {
    let now = new Date()
    let time = now.toLocaleTimeString()
    let date = now.toLocaleDateString()
    let name = 'You'
    let username = 'username'

    currentPostID = currentPostID + 1;

    postContent = postContent.replace(/</g, "&lt;")
    postContent = postContent.replace(/\n/g, "<br />")


    let template = `
    <article id="theArticle-${currentPostID}">
    <header>
        <button class="thecloseButton" onclick="delPost(${currentPostID})">
            <img src="https://th.bing.com/th/id/R.db93b913b861b49a335e7663372bf946?rik=s%2fE0LN0jX7M7RA&pid=ImgRaw&r=0" length="30px" width="30px"/>
        </button>
        
       <div class="userDp">
           <img src='https://cdn1.iconfinder.com/data/icons/kawai-animal-costum-avatar/64/avatar_animal_costume_-skeptical_panda-1024.png' length="50px" width="50px"/>
       </div>
        <h1>${name}</h1>
        <h2>@${username}</h2>
    </header>
<div id="statement"><p>${postContent}</p></div>
<hr />


<footer>
    <p class="datePosted">Posted on ${date} <time>${time}</time></p>
  <button class="heart" onclick="LikePost(${currentPostID})"><img id="heart-image-${currentPostID}"src="./black-heart.png" length="30px" width="30px"/></button>  
</footer> 

</article>`
    document.getElementById("form-container").insertAdjacentHTML("afterend", template)
}
