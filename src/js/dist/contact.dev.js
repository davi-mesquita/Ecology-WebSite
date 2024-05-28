"use strict";

var contactForm = document.getElementById('contactForm');
var YOUR_SERVICE_ID = 'service_rwsbweb';
var YOUR_TEMPLATE_ID = 'template_7eoy51d';
var YOUR_PUBLIC_KEY = 'fxXp84IHnRCxebqZ9';
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Coleta os dados do formulário

  var formData = new FormData(contactForm);
  var templateParams = {
    to_name: 'Davi Mesquita',
    to_email: 'davimesquita9@gmail.com',
    from_name: formData.get('nome'),
    from_email: formData.get('email'),
    message: formData.get('mensagem')
  }; // Envia o email usando o EmailJS

  emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY).then(function (response) {
    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
  }, function (error) {
    alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    console.error('Erro no EmailJS:', error);
  });
});