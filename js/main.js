var navTitle = document.getElementsByClassName('nav-link');
for (let i = 0; i < navTitle.length; i++) {
    navTitle.addEventListener('click', function(e) {
        e.classList.add('active');
    })
}