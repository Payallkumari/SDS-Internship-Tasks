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