let commentForm = document.querySelector(".comment-form");
let commentList = document.querySelector(".comment-list");
let commentField = document.querySelector(".comment-field");
//let commentButton = document.querySelector(".button")

commentForm.onsubmit = function(evt){
    evt.preventDefault();
    let newComment = document.createElement('li');
    commentList.append(newComment);
    newComment.classList.add("user-comment");
    newComment.textContent = commentField.value;
    commentField.value = "";
}

