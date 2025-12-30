'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setNewsletterStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus({ type: 'success', message: 'Successfully subscribed!' });
        setNewsletterEmail('');
      } else {
        setNewsletterStatus({ type: 'error', message: data.message || 'Error subscribing. Please try again.' });
      }
    } catch (error) {
      setNewsletterStatus({ type: 'error', message: 'Error subscribing. Please try again.' });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-work-together">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="work-together-box">
                <div className="work-together-content">
                  <h3>Let&apos;s Collaborate</h3>
                  <h2>Let&apos;s Work Together</h2>
                </div>
                
                <div className="work-together-btn">
                  <Link href="/contact#contact-form">
                    <img src="/images/arrow-dark.svg" alt="" />
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="about-footer">
                <div className="footer-logo">
                  <img className="footer-logo-img" src="/images/GenesysGlobal.svg" alt="" />
                </div>

                <div className="footer-contact-box">
                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-phone.svg" alt="" />
                    </div>
                    <div className="footer-contact-content">
                      <p>+1 512-649-4906</p>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-mail.svg" alt="" />
                    </div>
                    <div className="footer-contact-content">
                      <p>info@genesysgloballlc.com</p>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-location.svg" alt="" />
                    </div>
                    <div className="footer-contact-content">
                      <p>734 S CHARLOTTE ST LOMBARD, IL 60148</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links">
                <h3>quick link</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links">
                <h3>support</h3>
                <ul>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-newsletter-form">
                <h3>Subscribe our newsletter</h3>
                <form id="newslettersForm" onSubmit={handleNewsletterSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      id="mail"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn-highlighted" disabled={isSubscribing}>
                      {isSubscribing ? 'Subscribing...' : 'subscribe'}
                    </button>
                  </div>
                  {newsletterStatus.type && (
                    <div className={`mt-2 ${newsletterStatus.type === 'success' ? 'text-success' : 'text-danger'}`} style={{ fontSize: '14px', marginTop: '8px' }}>
                      {newsletterStatus.message}
                    </div>
                  )}
                </form>
              </div>

              <div className="footer-social-links">
                <ul>
                  <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="footer-copyright-text">
                  <p>Copyright © 2026 All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
