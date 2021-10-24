const burgerNav = document.querySelector('.burger-navigation');
const navigation = document.querySelector('.navigation-lists');
const searchBox = document.querySelector('.search');
const searchedItemsBox = document.querySelector('.popular-searched-box')

burgerNav.addEventListener('click', function(){
    navigation.classList.toggle('burger-activate')
});

searchBox.addEventListener('focus', function(){
    searchedItemsBox.style.display = "block";
})

searchBox.addEventListener('blur', function(){
    searchedItemsBox.style.display = "none";
})