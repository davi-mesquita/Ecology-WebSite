const contactForm = document.getElementById('contactForm');
const YOUR_SERVICE_ID = 'service_rwsbweb'; 
const YOUR_TEMPLATE_ID = 'template_7eoy51d'; 
const YOUR_PUBLIC_KEY = 'fxXp84IHnRCxebqZ9'; 

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Coleta os dados do formulário
  const formData = new FormData(contactForm);
  const templateParams = {
    to_name: 'Davi Mesquita',
    to_email: 'davimesquita9@gmail.com',
    from_name: formData.get('nome'),
    from_email: formData.get('email'),
    message: formData.get('mensagem')
  };

  // Envia o email usando o EmailJS
  emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
    .then((response) => {
      alert('Mensagem enviada com sucesso!');
      contactForm.reset();
    }, (error) => {
      alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      console.error('Erro no EmailJS:', error);
    });
});