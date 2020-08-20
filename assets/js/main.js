document.addEventListener('DOMContentLoaded', ()=>{
    let title = document.title;
    let links = document.querySelectorAll('.header-nav-ul-li');
    
    links = [...links];

    let filteredLink = links.filter(link => link.children[0].innerHTML === title)
    if (filteredLink[0]) filteredLink[0].classList.add('active');
    
});

