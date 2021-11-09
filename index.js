const popularSectionBlock = document.getElementsByClassName('section-block');
const popularCoursesTextBlock = document.querySelector('.popular-courses-textbox');

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