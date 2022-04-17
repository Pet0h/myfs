let heart = document.querySelector('.heart');
let likesNumbers = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    counter++;
    likesNumbers.textContent = counter;
    heart.classList.toggle=('added');
}