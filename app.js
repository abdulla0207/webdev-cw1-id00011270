const burgerNav = document.querySelector('.burger-navigation');
const navigation = document.querySelector('.navigation-lists');

burgerNav.addEventListener('click', function(){
    navigation.classList.toggle('burger-activate')
});
