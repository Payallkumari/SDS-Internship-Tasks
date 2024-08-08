// navbar

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



    document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const modalCloseButtons = document.querySelectorAll('.modal-close-btn');

    // Function to open the modal
    const openModal = (index) => {
        const serviceModals = document.querySelectorAll('.service-modal');
        serviceModals[index].classList.add('active');
    };

    // Function to close the modal
    const closeModal = (event) => {
        const modal = event.target.closest('.service-modal');
        modal.classList.remove('active');
    };

    // Add click event listeners to all learn more buttons
    learnMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => openModal(index));
    });

    // Add click event listeners to all modal close buttons
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Add event listener to close modal when clicking outside the modal body
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('service-modal')) {
            event.target.classList.remove('active');
        }
    });
});

 
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var openPortfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

var closePortfolioModal = function () {
    portfolioModals.forEach((portfolioModalView) => {
        portfolioModalView.classList.remove("active");
    });
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        openPortfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        closePortfolioModal();
    });
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" :"light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}

  const scrollTopBtn = document.querySelector(".scrollToTop-btn"); 

  window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active" , window.scrollY > 500);
  });

  scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
  });


  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*='" + id + "']").classList.add("active");
        } else {
            document.querySelector(".nav-items a[href*='" + id + "']").classList.remove("active");
        }
    });
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navItems = document.querySelectorAll(".nav-items a");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});



navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
