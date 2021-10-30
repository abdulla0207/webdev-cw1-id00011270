const burgerNav = document.querySelector('.burger-navigation');
const navigation = document.querySelector('.navigation-lists');
const searchBox = document.querySelector('.search');
const searchedItemsBox = document.querySelector('.popular-searched-box');
const popularCoursesTextBlock = document.querySelector('.popular-courses-textbox');
const popularSectionBlock = document.getElementsByClassName('section-block');
const article_block = document.getElementsByClassName('article-block');
const description_pointer = document.getElementsByClassName('description');

burgerNav.addEventListener('click', function(){
    navigation.classList.toggle('burger-activate');
});

searchBox.addEventListener('focus', function(){
    searchedItemsBox.style.display = "block";
});

searchBox.addEventListener('blur', function(){
    searchedItemsBox.style.display = "none";
});

function showHidePopularCourses(){
    for (let i = 0; i < popularSectionBlock.length; i++) {
        if(popularSectionBlock[i].style.display === "none"){
            popularSectionBlock[i].style.display = "block";
        }else{
            popularSectionBlock[i].style.display = "none";
        }
    }
}
popularCoursesTextBlock.addEventListener('click', showHidePopularCourses);

function descriptionOfCourses(){
    
}