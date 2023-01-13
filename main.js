let headPage = document.getElementById('header--parallax');
let titlePage = document.getElementById('title--pageone')
let batPic1 = document.getElementById('bat--pic1');
let batPic2 = document.getElementById('bat--pic2');
let moonPic = document.getElementById('moon--pic');
let tree1 = document.getElementById('tree--1');
let tree2 = document.getElementById('tree--2');
let tree3 = document.getElementById('tree--3');
let tree4 = document.getElementById('tree--4');
let tree5 = document.getElementById('tree--5');
let tree6 = document.getElementById('tree--6');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    titlePage.style.top = 38 + scrollY * 0.1 + '%';
    
    batPic1.style.top = scrollY * -0.25 + 'px';
    batPic1.style.left = scrollY * 0.25 + 'px';
    batPic2.style.top = scrollY * -0.25 + 'px';
    batPic2.style.left = scrollY * -0.25 + 'px';
    
    moonPic.style.top = scrollY * 0.1 + '%';
    
    tree1.style.top = scrollY * 0.15 + 'px';
    tree2.style.top = scrollY * 0.15 + 'px';
    tree1.style.left = scrollY * -0.1 + 'px';
    tree2.style.left = scrollY * 0.1 + 'px';
    
    tree3.style.top = scrollY * 0.2 + 'px';
    tree4.style.top = scrollY * 0.2 + 'px';
    tree3.style.left = scrollY * 0.1 + 'px';
    tree4.style.left = scrollY * -0.1 + 'px';
    
    tree5.style.top = scrollY * 0.5 + 'px';
    tree6.style.top = scrollY * 0.5 + 'px';

    headPage.style.top = scrollY * -0.2;
})
