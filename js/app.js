/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


const nav_ul = document.getElementById("navbar__list");

const sections = document.querySelectorAll("section");
const sections_len = sections.length;




//Nav function
function makeNav(el){
    for (let i = 0; i < sections_len; i++) {
        const container = document.createElement('li');
        container.className = "menu__link";
        container.textContent = `Section${i+1}`;
        el.appendChild(container);
    }
}

makeNav(nav_ul);

//Event handler function
/* 
    -Identify which list element was clicked and get it.
    -get the offsetTop of the element and scroll to that position
    -add the active class to the section
*/
function respondToTheClick(evt) {
    const text = evt.target.textContent;
    if (text.length < 10) {
        num = text.slice(-1);
        scroll({
            top: document.getElementById(`section${num}`).offsetTop,
            behavior: 'smooth'
        });
        toggleClass(num);
    }
}

nav_ul.addEventListener('click', respondToTheClick)


/* 
    add the active class to the clicked section and remove it from 
    all other sections 
*/
function toggleClass(n){
    let sec_index = n-1;
    for(i = 0; i < sections_len ; i++){
        if (i === sec_index) {
            document.getElementById(`section${n}`).classList.add('your-active-class');
        } else {
            document.getElementById(`section${i+1}`).classList.remove('your-active-class');
        }
    }
}

/* 
    add and remove the active class to the section while scrolling 
*/
function scrollftn(e) {

    let halfwindowHeight = window.innerHeight/2;
    let y = window.scrollY + halfwindowHeight;
    
    sections.forEach(function(section){
        if(y > section.offsetTop && y < section.offsetTop + section.offsetHeight) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    })
}

document.addEventListener('scroll', scrollftn);