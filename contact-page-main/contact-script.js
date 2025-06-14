 
 const para = document.getElementById("animated-text");
    const fullText = "Get in touch with us. We’re ready to help you find the best solutions.";
    const typingSound = document.getElementById("type-sound");
    const enableSound = true;

    let index = 0;
    let isDeleting = false;

    function animateText() {
      para.style.opacity = 0.6;

      if (!isDeleting) {
        para.textContent = fullText.substring(0, index);
        if (index < fullText.length) {
          if (enableSound) {
            typingSound.currentTime = 0;
            typingSound.play();
          }
          index++;
          setTimeout(animateText, 100); // typing speed
        } else {
          para.style.opacity = 1;
          setTimeout(() => {
            isDeleting = true;
            animateText();
          }, 2000); // pause before deleting
        }
      } else {
        para.textContent = fullText.substring(0, index);
        if (index > 0) {
          if (enableSound) {
            typingSound.currentTime = 0;
            typingSound.play();
          }
          index--;
          setTimeout(animateText, 100); // deleting speed
        } else {
          isDeleting = false;
          para.style.opacity = 0.3;
          setTimeout(animateText, 1000); // pause before retyping
        }
      }
    }

 
   setTimeout(animateText, 1000); // initial delay
 
 // Initialize Leaflet Map
    const map = L.map('map').setView([7.3392, -2.3268], 13); // Sunyani coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    // Marker for Sunyani
    L.marker([7.3392, -2.3268]).addTo(map)
      .bindPopup('<b>We are here!</b><br>Sunyani, Ghana')
      .openPopup();

    