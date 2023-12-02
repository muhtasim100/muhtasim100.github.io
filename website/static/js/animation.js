
// This code is inspired by Codehal via https://youtu.be/r1wDGIKmX6s?si=DeTa8iX3o_mMJpHZ.

window.onscroll = () => {
    let animated = document.querySelector('#animate-section');
    let video = document.querySelector('.mp4 video'); 
    let scrollposition = window.scrollY;
    // Position of the scroll on the Y axis of the window.
    let offset = animated.offsetTop;
    // Position of the top of 'animated' container from top of webpage.

    if (scrollposition >= offset - window.innerHeight) {
        // Checking if the user has scrolled down (scrollposition) to the top of the container (offset) of the animated item 
        // relative to the height of the browser window (innerHeight).
        animated.classList.add('show-animate');
        video.classList.add('dimmed'); 
    } 
        // If scroll position is past the top of the container (offset), the item itself will show soon, 
        // so add it to show-animate class list.
        // The video is at the top of the screen so dim it by adding to dimmed class list after the new item is in view.
        // The classes are styled in css for the animation.
    else {
        animated.classList.remove('show-animate');
        if (scrollposition < offset) { 
            video.classList.remove('dimmed');
        }
    }

    // If scroll position isn't at the top of the items container, do not animate.
    // Video should not be dimmed.
};
