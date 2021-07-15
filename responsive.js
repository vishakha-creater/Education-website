burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightnav = document.querySelector('.rightnav');
navList = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
rightnav.classList.toggle('v-classresp');
navList.classList.toggle('v-classresp');
navbar.classList.toggle('h-navresp')
})