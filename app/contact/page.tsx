'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">Contact <span>us</span></h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker Section */}
      <div className="our-scrolling-ticker subpages-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Custom Branding</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Website Design</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Digital Marketing</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Strategy Consulting</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics & Reporting</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Custom Branding</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Website Design</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Digital Marketing</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Strategy Consulting</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics & Reporting</span>
          </div>

          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Custom Branding</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Website Design</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Digital Marketing</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Strategy Consulting</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics & Reporting</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Custom Branding</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Website Design</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Digital Marketing</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Strategy Consulting</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Analytics & Reporting</span>
          </div>
        </div>
      </div>

      {/* Page Contact Us Section */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Contact Information */}
              <div className="contact-information">
                <div className="section-title">
                  <h2 className="text-anime-style-2">Get in <span>touch</span> with us</h2>
                  <p className="wow fadeInUp">We&apos;d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.</p>
                </div>

                <div className="contact-info-box">
                  <div className="info-box-1 wow fadeInUp">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="/images/icon-phone.svg" alt="" />
                      </div>
                      <div className="contact-item-content">
                        <h3>phone number</h3>
                        <p><a href="tel:+15126494906">+1 512-649-4906</a></p>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="/images/icon-mail.svg" alt="" />
                      </div>
                      <div className="contact-item-content">
                        <h3>email address</h3>
                        <p><a href="mailto:info@genesysgloballlc.com">info@genesysgloballlc.com</a></p>
                      </div>
                    </div>
                  </div>

                  <div className="info-box-2 wow fadeInUp" data-wow-delay="0.25s">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="/images/icon-location.svg" alt="" />
                      </div>
                      <div className="contact-item-content">
                        <h3>Address</h3>
                        <p>734 S CHARLOTTE ST LOMBARD, IL 60148</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Contact Us Form */}
              <div className="contact-us-form">
                <form id="contactForm" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.25s">
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone No"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-highlighted">submit message</button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="google-map">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="google-map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890123!2d-88.01234567890123!3d41.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4c8c8c8c8c8c%3A0x1234567890abcdef!2s734%20S%20Charlotte%20St%2C%20Lombard%2C%20IL%2060148%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Genesys Global Location - 734 S Charlotte St, Lombard, IL 60148"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

