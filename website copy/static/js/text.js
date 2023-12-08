// // Code inspired by https://www.w3schools.com/howto/howto_js_toggle_text.asp


// URLs for  YouTube videos.
const videoURL = {
    'py': 'https://www.youtube.com/embed/Y8Tko2YC5hA?si=krQ8DmUoUQm7Bgg9', 
    'java': 'https://www.youtube.com/embed/l9AzO1FMgM8?si=1lsHYltWNqeqUhyq', 
    'c': 'https://www.youtube.com/embed/U3aXWizDbQ4?si=Rs8839S3U308YIzA', 
    'htmlcss': 'https://www.youtube.com/embed/DHGhFJZLKMs?si=0UlAM0_1e-adj8KO' 
};


// Function to change the video based on the clicked image.
function changeVid(lang) {
    let ytframe = document.querySelector('.youtube-video');
    ytframe.src = videoURL[lang];
}

// Event listener for image with ID "py". When clicked h1 argument in changeVid function changes.
// Same for all other ID's.
document.getElementById('py').addEventListener('click', function() {
    changeVid('py');
}
);

document.getElementById('java').addEventListener('click', function() {
    changeVid('java');
}
);

document.getElementById('c').addEventListener('click', function() {
    changeVid('c');
}
);

document.getElementById('htmlcss').addEventListener('click', function() {
    changeVid('htmlcss');
}
);

