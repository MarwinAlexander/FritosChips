document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".expandable-image");
    
    images.forEach(image => {
        image.addEventListener("click", function() {
            const menu = this.nextElementSibling; // Selecciona el menú que sigue a la imagen
            menu.classList.toggle("visible");
            
            if (menu.classList.contains("visible")) {
                menu.style.maxHeight = menu.scrollHeight + "px";
            } else {
                menu.style.maxHeight = 0;
            }
        });
    });
});