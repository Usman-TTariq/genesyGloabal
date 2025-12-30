import Link from 'next/link';

export default function Footer() {
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
                  <Link href="/contact">
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
                      <p>(309) 8855-314</p>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/images/icon-mail.svg" alt="" />
                    </div>
                    <div className="footer-contact-content">
                      <p>info@domainname.com</p>
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
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter your email" required />
                    <button type="submit" className="btn-highlighted">subscribe</button>
                  </div>
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
                  <p>Copyright © 2024 All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
