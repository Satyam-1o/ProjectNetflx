let lastScrollTop = 0; // Track the last scroll position
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down - hide navbar
        navbar.style.top = "-65px"; // Adjust this value to match your navbar height
    } else {
        // Scrolling up - show navbar
        navbar.style.top = "0";
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});