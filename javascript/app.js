const burgerNav = document.querySelector('.burger-navigation');
const navigation = document.querySelector('.navigation-lists');
const searchBox = document.querySelector('.search');
const searchedItemsBox = document.querySelector('.popular-searched-box');
const article_block = document.getElementsByClassName('article-block');
const description_pointer = document.getElementsByClassName('description');

// Activates burger navigation
burgerNav.addEventListener('click', function(){
    navigation.classList.toggle('burger-activate');
});

// These functions show the popular searched courses when the searchbox in header part of the website is clicked
searchBox.addEventListener('focus', function(){
    searchedItemsBox.style.display = "block";
});

searchBox.addEventListener('blur', function(){
    searchedItemsBox.style.display = "none";
});
