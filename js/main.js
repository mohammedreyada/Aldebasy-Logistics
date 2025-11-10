<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>


document.addEventListener('DOMContentLoaded', () => {

  // 🟢 فتح روابط الشركات لما تضغط على الكارت
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.company-card[data-url]');
    if (card) window.open(card.dataset.url, '_blank');
  });

  // 🟢 سكرول ناعم لما تضغط على اللينكات في النافبار
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });

  // 🟢 إعداد EmailJS
  emailjs.init("9EiLff0s0_hhfPn2g"); // ← المفتاح العام (Public Key)

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // إرسال البيانات عبر EmailJS
      emailjs.sendForm('service_4loiipj', 'template_7n7cfe9', this)
        .then(() => {
          alert('✅ تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
          this.reset();
        }, (err) => {
          console.error('❌ خطأ:', err);
          alert('❌ حدث خطأ أثناء الإرسال، برجاء المحاولة لاحقاً.');
        });
    });
  }

});
