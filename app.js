document.addEventListener('DOMContentLoaded', () => {
  
  /* --- 1. HEADER SCROLL EFFECT --- */
  const headerBar = document.getElementById('headerBar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerBar.classList.add('scrolled');
    } else {
      headerBar.classList.remove('scrolled');
    }
  });

  /* --- 2. FIXED MAP SCROLL PARALLAX --- */
  const bgMap = document.getElementById('bgMap');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Slowly scale up and slide the background map as the user scrolls
    if (bgMap) {
      const scale = 1.05 + (scrollY * 0.00008);
      const translateVal = scrollY * 0.08;
      bgMap.style.transform = `scale(${scale}) translateY(${translateVal}px)`;
    }
  });

  /* --- 3. 3D BOX ROTATION STATE --- */
  // Auto-rotation handled natively via CSS keyframe animations in style.css.

  /* --- 4. SCROLL REVEAL (FADE IN) --- */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once revealed to maintain state
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* --- 5. INTERACTIVE MAP TOOLTIPS & TOAST --- */
  const mapShowcase = document.getElementById('mapShowcase');
  const pins = document.querySelectorAll('.map-glow-pin');
  
  // Create a dynamic information board at the bottom of the map container
  const infoBoard = document.createElement('div');
  infoBoard.style.background = 'rgba(7, 8, 11, 0.9)';
  infoBoard.style.borderTop = '1px solid rgba(212, 175, 55, 0.3)';
  infoBoard.style.padding = '1rem 1.5rem';
  infoBoard.style.position = 'absolute';
  infoBoard.style.bottom = '0';
  infoBoard.style.left = '0';
  infoBoard.style.width = '100%';
  infoBoard.style.color = 'var(--color-text-light)';
  infoBoard.style.fontSize = '0.95rem';
  infoBoard.style.fontFamily = 'var(--font-sans)';
  infoBoard.style.textAlign = 'center';
  infoBoard.style.transition = 'var(--transition-smooth)';
  infoBoard.innerHTML = '<span style="color: var(--color-gold-primary); font-family: var(--font-serif); font-weight: 700;">CHOOSE YOUR REGION:</span> Hover over the glowing locations to explore the legendary steps of Dharma.';
  mapShowcase.appendChild(infoBoard);
  
  pins.forEach(pin => {
    pin.addEventListener('mouseenter', () => {
      const infoText = pin.getAttribute('data-info');
      const label = pin.querySelector('.pin-label').textContent;
      
      infoBoard.style.opacity = '0';
      setTimeout(() => {
        infoBoard.innerHTML = `<strong style="color: var(--color-gold-light); font-family: var(--font-serif); text-transform: uppercase; letter-spacing: 0.15em;">${label}:</strong> ${infoText}`;
        infoBoard.style.opacity = '1';
      }, 150);
    });
    
    pin.addEventListener('mouseleave', () => {
      infoBoard.style.opacity = '0';
      setTimeout(() => {
        infoBoard.innerHTML = '<span style="color: var(--color-gold-primary); font-family: var(--font-serif); font-weight: 700;">CHOOSE YOUR REGION:</span> Hover over the glowing locations to explore the legendary steps of Dharma.';
        infoBoard.style.opacity = '1';
      }, 150);
    });
  });

  /* --- 6. PRE-ORDER FORM SUBMIT LOGIC --- */
  const preOrderForm = document.getElementById('preOrderForm');
  const successContainer = document.getElementById('successContainer');
  const regEmail = document.getElementById('regEmail');
  const btnBackToForm = document.getElementById('btnBackToForm');
  
  if (preOrderForm && successContainer) {
    preOrderForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop standard redirect
      
      const emailVal = document.getElementById('emailAddr').value;
      
      // Update success message email placeholder
      if (regEmail) regEmail.textContent = emailVal;
      
      // Fade out form, fade in success message
      preOrderForm.style.transition = 'opacity 0.4s ease-out';
      preOrderForm.style.opacity = '0';
      
      setTimeout(() => {
        preOrderForm.style.display = 'none';
        successContainer.style.display = 'flex';
        successContainer.style.opacity = '0';
        
        setTimeout(() => {
          successContainer.style.opacity = '1';
          // Smooth scroll to form section to ensure success message is in view
          document.getElementById('preorder').scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }, 400);
    });
  }
  
  if (btnBackToForm && preOrderForm && successContainer) {
    btnBackToForm.addEventListener('click', () => {
      // Clear form values
      preOrderForm.reset();
      
      // Fade out success container, fade in form
      successContainer.style.opacity = '0';
      
      setTimeout(() => {
        successContainer.style.display = 'none';
        preOrderForm.style.display = 'block';
        preOrderForm.style.opacity = '0';
        
        setTimeout(() => {
          preOrderForm.style.opacity = '1';
        }, 50);
      }, 400);
    });
  }

  /* --- 7. GAMEPLAY GALLERY SLIDESHOW --- */
  const slides = document.querySelectorAll('.my-slide');
  const dots = document.querySelectorAll('.slide-dot');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  
  if (slides.length > 0) {
    let slideIndex = 0;
    
    function showSlide(index) {
      if (index >= slides.length) slideIndex = 0;
      else if (index < 0) slideIndex = slides.length - 1;
      else slideIndex = index;
      
      slides.forEach(slide => slide.style.display = 'none');
      dots.forEach(dot => dot.classList.remove('active-dot'));
      
      slides[slideIndex].style.display = 'block';
      dots[slideIndex].classList.add('active-dot');
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));
    }
    
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        showSlide(index);
      });
    });
  }
});
