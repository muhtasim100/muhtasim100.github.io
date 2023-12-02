var currentPage = window.location.pathname; 

// Get the current page's URL path and store it in a variable.

if (currentPage === "/") {
    document.getElementById("home").classList.add("active");
} else if (currentPage === "/code") {
    document.getElementById("code").classList.add("active");
} else if (currentPage === "/math") {
    document.getElementById("maths").classList.add("active");
} else if (currentPage === "/enquiry") {
    document.getElementById("enquire").classList.add("active");
} 

// Depending on the current page which indicates what html page we are on, add its header in the nav bar to class list active.
// active class is styled on nav.css.
