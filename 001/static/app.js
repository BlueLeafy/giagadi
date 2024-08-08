document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navBar");
    const oilCarousel = document.getElementById("oilCarousel");
    const carouselItems = document.querySelectorAll(".carousel-item");

    // Nav changing color when scrolling
    function themeChange() {
        // Chekc if user scrolled past 100vh
        if (window.scrollY <= this.window.innerHeight - 50) {
            navBar.classList.add("dark");
            navBar.classList.remove("light")
        } else {
            navBar.classList.add("light")
            navBar.classList.remove("dark");
        }
    }

    // Liste scroll events on the window
    window.addEventListener("scroll", function () {
        themeChange();
    });


    function carouselHandler() {
        const carouselInstance = new bootstrap.Carousel(oilCarousel);

        // Get all nav links
        const navItems = document.querySelectorAll(".nav-item");

        navItems.forEach((navItem) => {
            const link = navItem.querySelector('.nav-link');

            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default anchor click behavior

                // Check if nav-link is active
                const isActive = link.classList.contains("active");

                // Remove active class from all nav-items
                navItems.forEach((item) => {
                    item.classList.remove("active");
                });

                // Add active class to this nav-item if link was not active
                if (!isActive) {
                    navItem.classList.add("active");
                }

                // Get the target section ID from the link's href attribute
                const targetId = link.getAttribute('href').substring(1);

                // Find the corresponding carousel item
                const targetItem = oilCarousel.querySelector(`#${targetId}`);

                if (targetItem) {
                    // Get the index of the target item
                    const index = Array.from(targetItem.parentElement.children).indexOf(targetItem);

                    // Change to the target carousel item
                    carouselInstance.to(index);
                }
            });
        });
    }

    // Initial check on page load
    themeChange();
    carouselHandler()

});