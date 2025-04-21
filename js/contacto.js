emailjs.init('6x-QiNg3ZzpqcxNy_');
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); 


      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Enviando...';

      emailjs.sendForm('service_c6kuurd', 'template_s1i2114', this)
        .then(function () {
          alert('¡Mensaje enviado correctamente!');
          form.reset();
        }, function (error) {
          console.error('FAILED...', error);
          alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        })
        .finally(function () {
          button.disabled = false;
          button.textContent = originalText;
        });
    });
  });

