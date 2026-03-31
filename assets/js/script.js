// JavaScript でクリック時の動作を制御
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
