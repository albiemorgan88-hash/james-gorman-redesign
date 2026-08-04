(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#primary-nav');

  if (toggle && navigation) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.nav-toggle-label').textContent = 'Menu';
      navigation.classList.remove('is-open');
    };

    toggle.addEventListener('click', () => {
      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.querySelector('.nav-toggle-label').textContent = opening ? 'Close menu' : 'Menu';
      navigation.classList.toggle('is-open', opening);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 901px)').matches) closeMenu();
    });
  }

  document.querySelectorAll('.js-enquiry-form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const button = form.querySelector('button[type="submit"]');
      const status = form.querySelector('.form-status');
      const originalLabel = button.textContent;
      const body = new URLSearchParams(new FormData(form));

      button.disabled = true;
      button.textContent = 'Sending…';
      status.className = 'form-status';
      status.textContent = '';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body,
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok) throw new Error(result.message || 'We could not send your request. Please try again later.');

        const requestType = form.elements.requestType.value;
        status.className = 'form-status is-success';
        status.textContent = requestType === 'workshop'
          ? 'Thank you. Your workshop enquiry has been received.'
          : 'Thank you. Your resource request has been received.';
        form.reset();

        window.dataLayer?.push({
          event: requestType === 'workshop' ? 'workshop_enquiry_submit' : 'resource_request_submit',
        });
      } catch (error) {
        status.className = 'form-status is-error';
        status.textContent = error.message;
      } finally {
        button.disabled = false;
        button.textContent = originalLabel;
        status.focus?.();
      }
    });
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;

    if (link.href.startsWith('https://hippsychology.com/')) {
      window.dataLayer?.push({ event: 'outbound_hip_contact' });
    } else if (link.pathname.toLowerCase().endsWith('.pdf')) {
      window.dataLayer?.push({ event: 'resource_download' });
    }
  });
})();
