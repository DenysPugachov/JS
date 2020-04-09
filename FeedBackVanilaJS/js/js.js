window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".main_btna").addEventListener("click", () => {
        showModal();
    });
    document.querySelector(".main_btn").addEventListener("click", () => {
        showModal();
    });
    document.querySelectorAll('a[href="#sheldure"]')[1].addEventListener("click", () => {
        showModal();
    });

    function showModal() {
        document.querySelector(".overlay").style.display = "block";
        document.querySelector(".modal").style.display = "block";
    }

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".modal").style.display = "none";
    });
});
