// Code inspired by https://www.w3schools.com/howto/howto_js_toggle_text.asp


const originalText = document.getElementById('text-placeholder').innerText;

// Function changeText changes text in h1 (html) in text-placeholder,
// depending on the event listeners of each image.
// Updated: now checks is clicked text is the same and if so changes it to the original greeting text.
function changeText(h1) {
    let current = document.getElementById('text-placeholder').innerText;
    
    if (current == h1) {
        document.getElementById('text-placeholder').innerText = originalText;
    } else 
{
        document.getElementById('text-placeholder').innerText = h1;
    }
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


