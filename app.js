const burgerNav = document.querySelector('.burger-navigation');
const navigation = document.querySelector('.navigation-lists');
const searchBox = document.querySelector('.search');
const searchedItemsBox = document.querySelector('.popular-searched-box');
const magnifier = document.querySelector('.magnifier-img');
const mathLi = document.querySelector('.math-li');
const subCategory = document.getElementsByClassName('sub-category');

burgerNav.addEventListener('click', function(){
    navigation.classList.toggle('burger-activate');
});

searchBox.addEventListener('focus', function(){
    searchedItemsBox.style.display = "block";
});

searchBox.addEventListener('blur', function(){
    searchedItemsBox.style.display = "none";
});
