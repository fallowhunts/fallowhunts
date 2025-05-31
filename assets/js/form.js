const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // Clear inputs
        message.style.display = 'block';
        message.textContent = 'Thank you! Your message has been sent.';

        setTimeout(() => {
          message.style.display = 'none';
        }, 5000); // Hide after 5 seconds
      } else {
        const data = await response.json();
        message.style.display = 'block';
        message.textContent = data.error || '❌ Oops! There was a problem submitting your form.';
      }
    } catch (error) {
      message.style.display = 'block';
      message.textContent = '❌ Network error. Please try again later.';
    }
  });