// Application State
const appState = {
  currentPage: 'landing',
  currentUser: null,
  selectedExpert: null,
  bookingData: {
    type: '',
    price: 0,
    date: '',
    time: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  },
  currentStep: 1
};

// Sample Data
const experts = [
  {
    id: 1,
    name: 'Marcus Weber',
    country: 'Germany',
    countryFlag: '🇩🇪',
    expertise: ['Legal & Compliance', 'Tax Strategy'],
    rating: 4.9,
    reviews: 47,
    hourlyRate: '€95',
    languages: ['German', 'English'],
    availability: 'Online',
    bio: 'With over 15 years of experience in German corporate law and tax compliance, I help international businesses navigate the complex regulatory landscape. I specialize in company formation, GDPR compliance, and tax optimization strategies.',
    responseTime: '< 2 hours',
    expertiseDetails: [
      { title: 'Legal & Compliance', description: 'Company formation, contracts, GDPR compliance, regulatory requirements' },
      { title: 'Tax Strategy', description: 'Tax optimization, VAT registration, international tax planning' }
    ]
  },
  {
    id: 2,
    name: 'Sofia Rossi',
    country: 'Italy',
    countryFlag: '🇮🇹',
    expertise: ['Marketing', 'Digital Strategy', 'Growth'],
    rating: 4.8,
    reviews: 32,
    hourlyRate: '€75',
    languages: ['Italian', 'English', 'Spanish'],
    availability: 'Online',
    bio: 'Digital marketing strategist with a proven track record of helping businesses expand into European markets. I focus on growth hacking, content strategy, and building sustainable customer acquisition channels.',
    responseTime: '< 3 hours',
    expertiseDetails: [
      { title: 'Marketing', description: 'Market entry strategy, brand positioning, campaign planning' },
      { title: 'Digital Strategy', description: 'SEO, content marketing, social media, paid advertising' },
      { title: 'Growth', description: 'Growth hacking, conversion optimization, analytics' }
    ]
  },
  {
    id: 3,
    name: 'Jean-Pierre Dubois',
    country: 'France',
    countryFlag: '🇫🇷',
    expertise: ['Finance', 'Corporate Finance', 'Funding'],
    rating: 4.7,
    reviews: 51,
    hourlyRate: '€110',
    languages: ['French', 'English'],
    availability: 'Online',
    bio: 'Senior finance executive with 20+ years experience in corporate finance and fundraising. I assist companies with financial planning, investor relations, and securing funding from European investors.',
    responseTime: '< 4 hours',
    expertiseDetails: [
      { title: 'Finance', description: 'Financial planning, budgeting, reporting, analysis' },
      { title: 'Corporate Finance', description: 'M&A, valuation, financial modeling, restructuring' },
      { title: 'Funding', description: 'Fundraising strategy, investor pitch, venture capital, private equity' }
    ]
  },
  {
    id: 4,
    name: 'Anna Mueller',
    country: 'Germany',
    countryFlag: '🇩🇪',
    expertise: ['HR & Operations', 'Team Building', 'Compliance'],
    rating: 4.6,
    reviews: 28,
    hourlyRate: '€80',
    languages: ['German', 'English'],
    availability: 'Online',
    bio: 'HR specialist for international businesses with focus on German employment law and operations management. I help companies build strong teams and maintain compliance.',
    responseTime: '< 3 hours',
    expertiseDetails: [
      { title: 'HR & Operations', description: 'Recruitment, employee relations, organizational development' },
      { title: 'Team Building', description: 'Leadership development, performance management, culture' },
      { title: 'Compliance', description: 'Employment law, contracts, workplace regulations' }
    ]
  },
  {
    id: 5,
    name: 'Pablo García',
    country: 'Spain',
    countryFlag: '🇪🇸',
    expertise: ['Tech & Innovation', 'Digital Transformation'],
    rating: 4.8,
    reviews: 39,
    hourlyRate: '€85',
    languages: ['Spanish', 'English', 'Portuguese'],
    availability: 'Online',
    bio: 'Technology strategy and digital innovation consultant helping businesses modernize and scale. Expert in cloud migration, automation, and technology roadmap planning.',
    responseTime: '< 2 hours',
    expertiseDetails: [
      { title: 'Tech & Innovation', description: 'Technology strategy, innovation management, R&D' },
      { title: 'Digital Transformation', description: 'Cloud migration, automation, process optimization, AI integration' }
    ]
  },
  {
    id: 6,
    name: 'Elena Rossi',
    country: 'Italy',
    countryFlag: '🇮🇹',
    expertise: ['E-Commerce', 'Business Strategy', 'Operations'],
    rating: 4.7,
    reviews: 43,
    hourlyRate: '€90',
    languages: ['Italian', 'English'],
    availability: 'Online',
    bio: 'E-commerce and business expansion strategist with proven track record in launching and scaling online businesses across Europe. Specialized in marketplace optimization and logistics.',
    responseTime: '< 3 hours',
    expertiseDetails: [
      { title: 'E-Commerce', description: 'Online store setup, marketplace strategy, conversion optimization' },
      { title: 'Business Strategy', description: 'Market analysis, competitive positioning, growth strategy' },
      { title: 'Operations', description: 'Supply chain, logistics, fulfillment, inventory management' }
    ]
  }
];

const reviews = [
  {
    author: 'Jane Thompson',
    rating: 5,
    text: 'Marcus was incredibly helpful with our legal setup in Germany. His expertise saved us months of time and potential compliance issues. Highly recommended!',
    date: '2 weeks ago'
  },
  {
    author: 'Carlos Rodriguez',
    rating: 5,
    text: 'Sofia gave us strategic advice on our digital marketing approach. Very professional and provided actionable insights that we implemented immediately.',
    date: '1 month ago'
  },
  {
    author: 'Emma Wilson',
    rating: 5,
    text: 'Jean-Pierre\'s financial expertise was invaluable during our fundraising round. He helped us refine our pitch and connected us with the right investors.',
    date: '3 weeks ago'
  }
];

// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  appState.currentPage = pageId;
  window.scrollTo(0, 0);
}

function showSignIn() {
  alert('Sign In functionality - Demo Mode');
}

function showSignUp() {
  alert('Sign Up functionality - Demo Mode');
}

function loginAsClient() {
  appState.currentUser = { type: 'client', name: 'John Doe' };
  showSearchPage();
}

function loginAsExpert() {
  appState.currentUser = { type: 'expert', name: 'Marcus Weber' };
  showDashboard();
}

function logout(e) {
  if (e) e.preventDefault();
  appState.currentUser = null;
  showPage('landing-page');
}

function showSearchPage() {
  showPage('search-page');
  loadExperts();
}

function showDashboard(e) {
  if (e) e.preventDefault();
  showPage('dashboard-page');
}

function showMessages(e) {
  if (e) e.preventDefault();
  showPage('messages-page');
}

function showSettings(e) {
  if (e) e.preventDefault();
  alert('Settings page - Demo Mode');
}

function showProfile(e) {
  if (e) e.preventDefault();
  alert('Profile editing - Demo Mode');
}

function addAvailability() {
  alert('Add availability - Demo Mode');
}

// User Menu Toggle
function toggleUserMenu() {
  const dropdowns = document.querySelectorAll('.user-dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.classList.toggle('show');
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.user-menu')) {
    document.querySelectorAll('.user-dropdown').forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
});

// Expert Loading
function loadExperts(filteredExperts = experts) {
  const grid = document.getElementById('experts-grid');
  grid.innerHTML = '';

  filteredExperts.forEach(expert => {
    const card = document.createElement('div');
    card.className = 'expert-card';
    card.onclick = () => showExpertProfile(expert.id);

    const initials = expert.name.split(' ').map(n => n[0]).join('');

    card.innerHTML = `
      <div class="expert-header">
        <div class="expert-photo">${initials}</div>
        <div class="expert-info">
          <h4>${expert.name}</h4>
          <div class="expert-country">${expert.countryFlag} ${expert.country}</div>
          <div class="expert-rating">
            <span class="stars">⭐ ${expert.rating}</span>
            <span>(${expert.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div class="expert-tags">
        ${expert.expertise.map(exp => `<span class="tag">${exp}</span>`).join('')}
      </div>
      <div class="expert-footer">
        <div class="expert-rate">${expert.hourlyRate}/hr</div>
        <button class="btn btn--primary btn--sm">View Profile</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Filter Experts
function applyFilters() {
  const location = document.getElementById('filter-location').value;
  const expertise = document.getElementById('filter-expertise').value;
  const language = document.getElementById('filter-language').value;
  const availableNow = document.getElementById('filter-available').checked;

  let filtered = experts;

  if (location) {
    filtered = filtered.filter(e => e.country === location);
  }

  if (expertise) {
    filtered = filtered.filter(e => e.expertise.some(exp => exp.includes(expertise.split(' & ')[0])));
  }

  if (language) {
    filtered = filtered.filter(e => e.languages.includes(language));
  }

  if (availableNow) {
    filtered = filtered.filter(e => e.availability === 'Online');
  }

  loadExperts(filtered);
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      if (query.length === 0) {
        loadExperts();
        return;
      }

      const filtered = experts.filter(expert => 
        expert.name.toLowerCase().includes(query) ||
        expert.country.toLowerCase().includes(query) ||
        expert.expertise.some(exp => exp.toLowerCase().includes(query))
      );

      loadExperts(filtered);
    });
  }
});

// Expert Profile
function showExpertProfile(expertId) {
  const expert = experts.find(e => e.id === expertId);
  if (!expert) return;

  appState.selectedExpert = expert;
  showPage('profile-page');

  const initials = expert.name.split(' ').map(n => n[0]).join('');

  // Load profile header
  document.getElementById('profile-header').innerHTML = `
    <div class="profile-photo">${initials}</div>
    <div class="profile-header-info">
      <h1>${expert.name}</h1>
      <div class="profile-location">${expert.countryFlag} ${expert.country}</div>
      <div class="profile-rating">
        <span class="stars">⭐ ${expert.rating}</span>
        <span>(${expert.reviews} reviews)</span>
      </div>
      <div class="profile-stats">
        <div class="profile-stat">
          <div class="profile-stat-label">Response Time</div>
          <div class="profile-stat-value">${expert.responseTime}</div>
        </div>
        <div class="profile-stat">
          <div class="profile-stat-label">Languages</div>
          <div class="profile-stat-value">${expert.languages.join(', ')}</div>
        </div>
        <div class="profile-stat">
          <div class="profile-stat-label">Availability</div>
          <div class="profile-stat-value">${expert.availability}</div>
        </div>
      </div>
    </div>
  `;

  // Load bio
  document.getElementById('profile-bio').innerHTML = `
    <p class="profile-bio">${expert.bio}</p>
  `;

  // Load expertise
  document.getElementById('profile-expertise').innerHTML = `
    <div class="expertise-list">
      ${expert.expertiseDetails.map(exp => `
        <div class="expertise-item">
          <h4>${exp.title}</h4>
          <p>${exp.description}</p>
        </div>
      `).join('')}
    </div>
  `;

  // Load reviews
  document.getElementById('profile-reviews').innerHTML = reviews.map(review => `
    <div class="review-item">
      <div class="review-header">
        <div class="review-author">${review.author}</div>
        <div class="review-date">${review.date}</div>
      </div>
      <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
      <p class="review-text">${review.text}</p>
    </div>
  `).join('');

  // Load booking rate
  document.getElementById('booking-rate').textContent = `${expert.hourlyRate}/hr`;
}

function backToProfile() {
  if (appState.selectedExpert) {
    showExpertProfile(appState.selectedExpert.id);
  } else {
    showSearchPage();
  }
}

// Booking Flow
function showBooking() {
  if (!appState.selectedExpert) return;
  
  showPage('booking-page');
  appState.currentStep = 1;
  updateBookingSteps();
  
  // Set summary expert name
  document.getElementById('summary-expert').textContent = appState.selectedExpert.name;
  
  // Reset booking data
  appState.bookingData = {
    type: '',
    price: 0,
    date: '',
    time: '',
    description: ''
  };
  
  updateBookingSummary();
}

function selectConsultationType(type, price) {
  appState.bookingData.type = type.charAt(0).toUpperCase() + type.slice(1);
  appState.bookingData.price = price;
  
  // Update UI
  document.querySelectorAll('.consultation-type').forEach(el => {
    el.classList.remove('selected');
  });
  event.currentTarget.classList.add('selected');
  
  updateBookingSummary();
  
  // Auto advance after a short delay
  setTimeout(() => nextBookingStep(), 300);
}

function nextBookingStep() {
  if (appState.currentStep === 1 && !appState.bookingData.type) {
    alert('Please select a consultation type');
    return;
  }
  
  if (appState.currentStep === 2) {
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    if (!date) {
      alert('Please select a date');
      return;
    }
    appState.bookingData.date = date;
    appState.bookingData.time = time;
  }
  
  if (appState.currentStep === 3) {
    const description = document.getElementById('booking-description').value;
    if (!description || description.length < 20) {
      alert('Please provide a detailed description (at least 20 characters)');
      return;
    }
    appState.bookingData.description = description;
    
    // Load booking summary for step 4
    loadBookingSummary();
  }
  
  if (appState.currentStep === 5) {
    const name = document.getElementById('booking-name').value;
    const email = document.getElementById('booking-email').value;
    const phone = document.getElementById('booking-phone').value;
    
    if (!name || !email || !phone) {
      alert('Please fill in all contact information');
      return;
    }
    
    appState.bookingData.name = name;
    appState.bookingData.email = email;
    appState.bookingData.phone = phone;
    
    // Update payment total for step 6
    setTimeout(() => {
      const paymentTotal = document.getElementById('payment-total');
      if (paymentTotal) {
        paymentTotal.textContent = `€${appState.bookingData.price}`;
      }
    }, 100);
  }
  
  if (appState.currentStep < 6) {
    appState.currentStep++;
    updateBookingSteps();
  }
  
  updateBookingSummary();
}

function previousBookingStep() {
  if (appState.currentStep > 1) {
    appState.currentStep--;
    updateBookingSteps();
  }
}

function updateBookingSteps() {
  // Update step indicators
  document.querySelectorAll('.step').forEach((step, index) => {
    if (index + 1 === appState.currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  // Show/hide step content
  for (let i = 1; i <= 6; i++) {
    const stepContent = document.getElementById(`booking-step-${i}`);
    if (stepContent) {
      if (i === appState.currentStep) {
        stepContent.classList.remove('hidden');
      } else {
        stepContent.classList.add('hidden');
      }
    }
  }
}

function updateBookingSummary() {
  document.getElementById('summary-type').textContent = appState.bookingData.type || '-';
  document.getElementById('summary-date').textContent = appState.bookingData.date || '-';
  document.getElementById('summary-time').textContent = appState.bookingData.time || '-';
  document.getElementById('summary-total').textContent = appState.bookingData.price ? `€${appState.bookingData.price}` : '€0';
}

function loadBookingSummary() {
  const expert = appState.selectedExpert;
  const booking = appState.bookingData;
  
  document.getElementById('booking-summary').innerHTML = `
    <div style="margin-bottom: 16px;">
      <h4 style="margin-bottom: 8px;">Expert</h4>
      <p style="margin: 0;">${expert.name} - ${expert.country}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h4 style="margin-bottom: 8px;">Consultation Details</h4>
      <p style="margin: 0;"><strong>Type:</strong> ${booking.type}</p>
      <p style="margin: 0;"><strong>Date:</strong> ${booking.date}</p>
      <p style="margin: 0;"><strong>Time:</strong> ${booking.time}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h4 style="margin-bottom: 8px;">Your Question</h4>
      <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">${booking.description}</p>
    </div>
    <div style="padding-top: 16px; border-top: 1px solid var(--color-card-border);">
      <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 600;">
        <span>Total Amount:</span>
        <span style="color: var(--app-primary);">€${booking.price}</span>
      </div>
    </div>
  `;
}

function confirmBooking() {
  // Show confirmation page with booking details
  showPage('confirmation-page');
  
  const booking = appState.bookingData;
  const expert = appState.selectedExpert;
  
  // Generate confirmation number
  const confNumber = `LBC-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
  
  document.getElementById('conf-number').textContent = confNumber;
  document.getElementById('conf-expert').textContent = `${expert.name} - ${expert.country}`;
  document.getElementById('conf-type').textContent = booking.type;
  document.getElementById('conf-date').textContent = booking.date;
  document.getElementById('conf-time').textContent = booking.time;
  document.getElementById('conf-total').textContent = `€${booking.price}`;
}

function startConversation() {
  showPage('messages-page');
  loadConversationSimulation();
}

function loadConversationSimulation() {
  const expert = appState.selectedExpert || experts[0];
  const expertInitials = expert.name.split(' ').map(n => n[0]).join('');
  
  // Sample conversation based on the provided data
  const conversation = [
    {
      type: 'received',
      text: `Hello! Thanks for booking our consultation. I'm ${expert.name.split(' ')[0]}, happy to help with your ${expert.expertise[0].toLowerCase()} needs.`,
      time: '2:00 PM'
    },
    {
      type: 'sent',
      text: `Hi ${expert.name.split(' ')[0]}! Great. We're a tech startup looking to expand to ${expert.country}. We're mainly concerned about regulations and competition.`,
      time: '2:01 PM'
    },
    {
      type: 'received',
      text: `Excellent question. ${expert.country} has very specific regulations for businesses, especially around compliance and market entry. Let me walk you through the key points.`,
      time: '2:02 PM'
    },
    {
      type: 'received',
      text: `First, you'll need to register your company with the local authorities. This typically takes 2-3 weeks. I'd recommend using a local advisor - I can connect you if needed.`,
      time: '2:03 PM'
    },
    {
      type: 'sent',
      text: 'That would be helpful! What about the competitive landscape? Are there local alternatives we need to worry about?',
      time: '2:04 PM'
    },
    {
      type: 'received',
      text: `The ${expert.country} market is competitive but also very open to innovation. Your best bet is to focus on specific niches and build strong partnerships with local distributors.`,
      time: '2:05 PM'
    },
    {
      type: 'received',
      text: `I'd suggest scheduling a follow-up consultation specifically for competitive analysis and market positioning. Would you like me to send you some resources in the meantime?`,
      time: '2:06 PM'
    },
    {
      type: 'sent',
      text: 'Yes please! This is extremely helpful. I\'ll follow up with you next week.',
      time: '2:07 PM'
    }
  ];
  
  // Update header info
  const conversationInfo = document.querySelector('.conversation-info');
  if (conversationInfo) {
    conversationInfo.innerHTML = `
      <div class="conversation-avatar">${expertInitials}</div>
      <div>
        <div class="conversation-name">${expert.name}</div>
        <div class="conversation-status">${expert.expertise[0]} Expert</div>
      </div>
    `;
  }
  
  // Update messages thread
  const thread = document.getElementById('messages-thread');
  thread.innerHTML = '';
  
  conversation.forEach((msg, index) => {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${msg.type}`;
    messageEl.innerHTML = `
      <div class="message-bubble">
        <p>${msg.text}</p>
        <div class="message-time">${msg.time}</div>
      </div>
    `;
    thread.appendChild(messageEl);
  });
  
  thread.scrollTop = thread.scrollHeight;
}

// Messages
function selectConversation(index) {
  document.querySelectorAll('.message-preview').forEach(el => {
    el.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  const thread = document.getElementById('messages-thread');
  const messageEl = document.createElement('div');
  messageEl.className = 'message sent';
  messageEl.innerHTML = `
    <div class="message-bubble">
      <p>${message}</p>
      <div class="message-time">Just now</div>
    </div>
  `;
  
  thread.appendChild(messageEl);
  thread.scrollTop = thread.scrollHeight;
  
  input.value = '';
  
  // Simulate expert response after a delay
  setTimeout(() => {
    const responses = [
      "That's a great question! Let me help you with that.",
      "I understand your concern. Here's what I recommend...",
      "Based on my experience, the best approach would be...",
      "Let me share some insights on that topic."
    ];
    
    const expertMsg = document.createElement('div');
    expertMsg.className = 'message received';
    expertMsg.innerHTML = `
      <div class="message-bubble">
        <p>${responses[Math.floor(Math.random() * responses.length)]}</p>
        <div class="message-time">Just now</div>
      </div>
    `;
    
    thread.appendChild(expertMsg);
    thread.scrollTop = thread.scrollHeight;
  }, 2000);
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  // Show landing page by default
  showPage('landing-page');
}