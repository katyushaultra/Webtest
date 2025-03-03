function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

document.body.addEventListener("click", function(event) {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.style.left = "-250px";
    }
});
