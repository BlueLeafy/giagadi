document.addEventListener("DOMContentLoaded", function () {
    // Transition when scrolling
    function scrollTransition() {
        const scrollY = window.scrollY;
        const compositionSection = document.getElementById("composition");
        const compositionItems = document.querySelectorAll(".composition-item");

        // Get the top of the composition section
        const compositionTop = compositionSection.offsetTop;

        console.log(scrollY, compositionTop);

        if (scrollY >= compositionTop) {
            compositionItems.forEach((item) => {
                item.classList.add("transition");
            })
        } else {
            compositionItems.forEach((item) => {
                item.classList.remove("transition");
            })
        }
    }

    // window Scroll event listener
    window.addEventListener("scroll", scrollTransition);

    // Carousel
    const carouselIndicators = document.querySelectorAll(".carousel-indicators li");
    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselIndicators.forEach((indicator) => {
        indicator.addEventListener("click", (event) => {
            const index = Array.from(carouselIndicators).indexOf(event.target);
            const activeIndex = Array.from(carouselItems).indexOf(document.querySelector(".carousel-item.active"));

            carouselItems.forEach((item, idx) => {
                item.classList.remove("active", "prev", "next");
                if (idx < index) {
                    item.classList.add("prev");
                } else if (idx > index) {
                    item.classList.add("next");
                }
            });

            carouselItems[index].classList.add("active");

            carouselIndicators.forEach((ind) => {
                ind.classList.remove("active");
            });

            event.target.classList.add("active");
        });
    }); // Carousel END

    // Composition section transitions
    function compositionHoverHandler() {
        const compositionItems = document.querySelectorAll(".composition-item");

        compositionItems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.classList.add("hovered");
            });

            item.addEventListener("mouseout", () => {
                item.classList.remove("hovered");
            });
        });
    }

    // Initialize functions
    scrollTransition();
    compositionHoverHandler();
});
