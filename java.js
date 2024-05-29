/*Adrian: Anuncio*/
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    let clickCount = 0;

    // Mostrar el pop-up después de 15 segundos
    setTimeout(function() {
        popup.style.display = 'flex';
    }, 15000); // 15000 milisegundos = 15 segundos

    // Añadir el evento de clic al botón de cierre
    closeBtn.addEventListener('click', function() {
        clickCount++;
        // Abrir una nueva ventana cada vez que se haga clic
        window.open('http://www.petardas.com', '_blank');
        
        // Cerrar el pop-up después del tercer clic
        if (clickCount === 1) {
            popup.style.display = 'none';
        }
    });
});