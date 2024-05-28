const contactForm = document.getElementById('contactForm');
const YOUR_SERVICE_ID = 'service_rwsbweb'; 
const YOUR_TEMPLATE_ID = 'template_im79ami'; 

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  (function() {
    emailjs.init({
      publicKey: "fxXp84IHnRCxebqZ9",
    });
  })();

  const formData = new FormData(contactForm);

  const templateParams = {
    to_name: 'Davi Mesquita',
    to_email: 'davimesquita9@gmail.com',
    from_name: formData.get('nome'),
    from_email: formData.get('email'),
    message: formData.get('mensagem')
  };



  emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
    .then((response) => {
      alert('Mensagem enviada com sucesso!');
      contactForm.reset();
    }, (error) => {
      alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      console.error('Erro no EmailJS:', error);
    });
});