class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 3rem 1rem;
          margin-top: auto;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3 {
          color: #f59e0b;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .footer-section p, .footer-section a {
          color: #cbd5e0;
          margin-bottom: 0.5rem;
          text-decoration: none;
        }
        .footer-section a:hover {
          color: #f59e0b;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #2d3748;
          border-radius: 50%;
          transition: background 0.3s ease;
        }
        .social-links a:hover {
          background: #f59e0b;
        }
        .newsletter-form input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #4a5568;
          border-radius: 6px;
          background: #2d3748;
          color: white;
          margin-bottom: 0.5rem;
        }
        .newsletter-form button {
          width: 100%;
          background: #f59e0b;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .newsletter-form button:hover {
          background: #d97706;
        }
        .footer-bottom {
          border-top: 1px solid #4a5568;
          padding-top: 2rem;
          text-align: center;
          color: #a0aec0;
        }
        .quick-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .quick-links a {
          color: #a0aec0;
          text-decoration: none;
        }
        .quick-links a:hover {
          color: #f59e0b;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Contact Information</h3>
              <p><i data-feather="map-pin"></i> 123 Charity Road, Colombo, Sri Lanka</p>
              <p><i data-feather="phone"></i> +94 11 234 5678</p>
              <p><i data-feather="mail"></i> info@uaflanka.org</p>
              <div class="social-links">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
              </div>
            </div>
            
            <div class="footer-section">
              <h3>Quick Links</h3>
              <div class="quick-links">
                <a href="/">Home</a>
                <a href="/about.html">About Us</a>
                <a href="/projects.html">Our Projects</a>
              </div>
            
            <div class="footer-section">
              <h3>Stay Updated</h3>
              <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
                <input type="email" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="quick-links">
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/terms.html">Terms of Service</a>
            </div>
            <p>&copy; 2024 United Assistance Foundation Lanka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);