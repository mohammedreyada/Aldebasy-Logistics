document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS
  emailjs.init("9EiLff0s0_hhfPn2g");

  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    emailjs.sendForm('service_4loiipj', 'template_7n7cfe9', this)
      .then(() => {
        alert('✅ تم إرسال رسالتك بنجاح!');
        contactForm.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('❌ حدث خطأ أثناء الإرسال. تحقق من Console.');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});
