var currentPage = window.location.pathname; // Get the current page's URL path

if (currentPage === "/") {
    document.getElementById("home").classList.add("active");
} else if (currentPage === "/code") {
    document.getElementById("code").classList.add("active");
} else if (currentPage === "/math") {
    document.getElementById("maths").classList.add("active");
} else if (currentPage === "/enquiry") {
    document.getElementById("enquire").classList.add("active");
} 
