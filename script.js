// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
        
        // Scroll to section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Simple validation for newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

import { createRoot } from 'react-dom/client';
import NewsletterForm from './NewsletterForm';

const newsletterRoot = document.getElementById('newsletter-root');
if (newsletterRoot) {
  createRoot(newsletterRoot).render(<NewsletterForm />);
}