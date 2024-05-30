/*Anuncio*/
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closeBtn');

  // Mostrar el pop-up después de 15 segundos
  setTimeout(function () {
      popup.style.display = 'flex';
  }, 15000); // 15000 milisegundos = 15 segundos

  // Añadir el evento de clic al pop-up para abrir la nueva ventana
  popup.addEventListener('click', function () {
      window.open('http://www.petardas.com', '_blank');
  });

  // Añadir el evento de clic al botón de cierre para cerrar el pop-up
  closeBtn.addEventListener('click', function (event) {
      event.stopPropagation(); // Evitar que el clic en el botón de cierre abra la página
      popup.style.display = 'none';
  });
});




/*
    Esta parte es necesaria para la review y fue inplementada por Nikita
    Lo que hace es calcular el Height de cada reseña y ajusta el cuadrado al tamaño de la reseña mas grande 
    para poder verla entera y ademeas, detecta los scroll y ajusta el indicador
*/
const allReview = Array.from(document.querySelectorAll('.review')); // Los convertimos en un array
const reviewWrapper = document.querySelector('.review-wrapper');
const indicador = document.querySelector('.review-indicador');

// Calculamos la altura máxima de las reseñas
const arrHeight = allReview.map(item => {
  return item.offsetHeight;
});

const largeHeight = Math.max(...arrHeight); // Encontramos la altura máxima de la lista

// Establecemos la altura igual para todas las reseñas
reviewWrapper.style.maxHeight = largeHeight + 'px';

allReview.forEach((item, idx) => {
  item.style.height = largeHeight + 'px'; // Establecemos la altura máxima a cada elemento

  item.id = 'review-' + idx; // Asignamos un ID para su diferenciar cada reseña

  const a = document.createElement('a'); // Creamos los puntos del indicador

  a.href = '#' + item.id; // Asignamos un ID que concuerda a su reseña

  indicador.appendChild(a);

});

const allLinkIndicador = document.querySelectorAll('.review-indicador a');

allLinkIndicador[0].classList.add('active'); // Agregamos la clase para que el primero se active por defecto

reviewWrapper.addEventListener('scroll', function () {
  let linkActive; // Variable para almacenar el ID de la reseña actua

  allReview.forEach(item => {
    // Si la posición del scroll se encuentra dentro del rango se establece en el ID de esa reseña
    if (
      this.scrollTop >= (item.offsetTop - (item.offsetHeight / 2) - 28) &&
      this.scrollTop <= (item.offsetTop + (item.offsetHeight / 2) - 28)) {
      linkActive = item.id;
    }
  });

  allLinkIndicador.forEach(item => {
    // Si el atributo `href` del enlace actual coincide se agrega la clase `active`
    if (item.getAttribute('href') === '#' + linkActive) {
      item.classList.add('active');
    } else {
      // Si no coincide, se elimina la clase `active`
      item.classList.remove('active');
    }
  });
});


//PARTE DEL JEFE Y SEÑOR DE ESTAS TIERRAS TIMURNATOR
// HEADER FIJO:

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".header-landing").addClass("black");
  } else {
    $(".header-landing").removeClass("black");
  }
});



