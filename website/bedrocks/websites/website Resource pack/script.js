    let Mbtn = document.getElementById("scrollToTopBtn");

    
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            Mbtn.style.display = "block";
        }
        else {
            Mbtn.style.display = "none";
        }
    };


    Mbtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };