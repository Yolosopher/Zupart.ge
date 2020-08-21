function respoMenu() {
    let width = window.innerWidth;
    console.log(width);
    if (width < 768) {
        let activeText = $('.header-nav-ul-li.active').find('a').text();
        console.log(activeText);
        let menuSpan = $('.respo-fixed-ul-li');
        menuSpan = [...menuSpan];
        let filteredSpan = menuSpan.filter(span => span.children[0].children[1].innerHTML === activeText);
        if (!filteredSpan[0]) {
            return;
        }
        filteredSpan[0].children[0].classList.add('active');
    }

};


document.addEventListener('DOMContentLoaded', ()=>{
    let title = document.title;
    let links = document.querySelectorAll('.header-nav-ul-li');
    
    links = [...links];

    let filteredLink = links.filter(link => link.children[0].innerHTML === title)
    if (filteredLink[0]) filteredLink[0].classList.add('active');
    


    respoMenu();
});

