// Code inspired by https://www.w3schools.com/howto/howto_js_toggle_text.asp

// Funcrion changeText changes text in h1 (html) in text-placeholder by changing h1 argument,
// depending on the event listeners of each image.
function changeText(h1) {
    document.getElementById('text-placeholder').innerText = h1;
}
// Event listener for image with ID "py". When clicked h1 argument in changeText function changes.
// Same for all other ID's.
    document.getElementById('py').addEventListener('click', function() {
        changeText('Python Programming Description');
    });

    document.getElementById('java').addEventListener('click', function() {
        changeText('Java Programming Description');
    });

    document.getElementById('c').addEventListener('click', function() {
        changeText('c Programming Description');
    });

    document.getElementById('htmlcss').addEventListener('click', function() {
        changeText('HTML+CSS Programming Description');
    });