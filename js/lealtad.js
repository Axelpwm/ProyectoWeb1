emailjs.init('6x-QiNg3ZzpqcxNy_'); 

document.addEventListener('DOMContentLoaded', function () {
  const lealtadForm = document.getElementById('lealtadForm');
  const lealtadMsg = document.getElementById('lealtadMsg');

  if (lealtadForm) {
    lealtadForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const button = lealtadForm.querySelector('button');
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Enviando...';

      emailjs.sendForm('service_c6kuurd', 'template_kgvn30p', '#lealtadForm')
        .then(() => {
          lealtadMsg.textContent = '¡Gracias por unirte a nuestro Club de Lealtad!';
          lealtadForm.reset();
        })
        .catch((error) => {
          console.error('Error al enviar:', error);
          lealtadMsg.textContent = 'Hubo un error. Intenta nuevamente.';
        })
        .finally(() => {
          button.disabled = false;
          button.textContent = originalText;
        });
    });
  }
});
