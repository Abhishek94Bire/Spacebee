// speakerData.js (Sample Data for Speakers)
const speakers = {
    speaker1: {
      name: 'Speaker Name 1',
      bio: 'This is a longer bio for Speaker 1. They are an expert in technology.',
      photo: 'speaker1.jpg',
      title: 'Keynote Speaker',
    },
    speaker2: {
      name: 'Speaker Name 2',
      bio: 'This is a longer bio for Speaker 2. They are a renowned expert in AI and machine learning.',
      photo: 'speaker2.jpg',
      title: 'Panelist',
    },
    // More speakers...
  };
  
  // Show modal with detailed speaker info
  function showSpeakerInfo(speakerId) {
    const speaker = speakers[speakerId];
    if (speaker) {
      const modal = document.getElementById('speaker-modal');
      const modalBody = modal.querySelector('.speaker-section__modal-body');
      const modalCloseBtn = modal.querySelector('.speaker-section__modal-close');
  
      // Set modal content
      modalBody.innerHTML = `
        <img src="${speaker.photo}" alt="${speaker.name}" class="speaker-section__card-image" style="width: 120px;">
        <h2 class="speaker-section__card-name">${speaker.name}</h2>
        <h3>${speaker.title}</h3>
        <p>${speaker.bio}</p>
      `;
  
      // Show modal with animation
      modal.classList.add('is-visible');
      modal.setAttribute('aria-hidden', 'false');
      
      // Focus on close button for accessibility
      modalCloseBtn.focus();
    }
  }
  
  // Close modal
  function closeModal() {
    const modal = document.getElementById('speaker-modal');
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
  }
  
  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('speaker-modal');
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Make modal accessible and focus on close button initially
  window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('speaker-modal');
    modal.setAttribute('aria-hidden', 'true');
  });
  