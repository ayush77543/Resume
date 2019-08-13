(
    function() {
        const showNav = document.querySelector(".fa-bars");
        const closeNav = document.querySelector(".fa-arrow-left");
        const navMenu = document.querySelector(".nav");
        const burgerMenu =  document.querySelector(".vertical-nav");
        const burgerMenuHeight = burgerMenu.offsetHeight;
        const coverPicHeight = document.querySelector(".cover-pic").offsetHeight;
        let isNavOpen= false;
        showNav.addEventListener("click", (e) => {
            if(!isNavOpen) {
                isNavOpen = true;
                navMenu.classList.remove("hide");
                navMenu.classList.add("show");
            }
        });
        closeNav.addEventListener("click", (e) => {
            if(isNavOpen) {
                isNavOpen = false;
                navMenu.classList.remove("show");
                navMenu.classList.add("hide");
            }
        });

        window.addEventListener("scroll", (e) => {
            if(window.scrollY >= (coverPicHeight - burgerMenuHeight)) {
                burgerMenu.classList.remove("vertical-nav-transparent");
                burgerMenu.classList.add("vertical-nav-white");
            } else if(window.scrollY < (coverPicHeight - burgerMenuHeight)) {
                burgerMenu.classList.remove("vertical-nav-white");
                burgerMenu.classList.add("vertical-nav-transparent");
            }
        });
    }
)();