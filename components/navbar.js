class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          padding: 1rem 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .top-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          position: relative;
        }
        .logo-section {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .logo {
          width: 120px;
          height: 120px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #f59e0b;
        }
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }
        .org-name {
          color: white;
          font-size: 2.2rem;
          font-weight: bold;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          position: absolute;
          right: 0;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nav-menu a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .nav-menu a:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          .nav-menu {
            flex-direction: column;
            gap: 0.5rem;
            display: none;
          }
          .nav-menu.active {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
          .top-bar {
            flex-wrap: wrap;
          }
          .logo {
            width: 100px;
            height: 100px;
          }
          .org-name {
            font-size: 1.7rem;
          }
        }
      </style>
      <nav>
        <div class="nav-container">
          <div class="top-bar">
            <div class="logo-section">
              <div class="logo">
                <img src="/assets/logo 1.jpg" alt="Logo 1">
              </div>
              <div class="org-name">United Assistance Foundation</div>
              <div class="logo">
                <img src="/assets/logo 2.jpg" alt="Logo 2">
              </div>
            </div>
            <button class="mobile-menu-btn">
              <i data-feather="menu"></i>
            </button>
          </div>
          <ul class="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/projects.html">Our Projects</a></li>
            <li><a href="/gallery.html">Gallery</a></li>
            <li><a href="/involve.html">Get Involved</a></li>
            <li><a href="/news.html">News</a></li>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/#donate">Donate</a></li>
          </ul>
        </div>
      </nav>
    `;

    // Mobile menu functionality
    const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navMenu = this.shadowRoot.querySelector('.nav-menu');
    
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      if (navMenu.classList.contains('active')) {
        mobileBtn.innerHTML = '<i data-feather="x"></i>';
      } else {
        mobileBtn.innerHTML = '<i data-feather="menu"></i>';
      }
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);