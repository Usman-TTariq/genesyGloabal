import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>services</span></h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">services</li>
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

      {/* Page Services Section */}
      <div className="page-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="service-item-header">
                  <div className="icon-box">
                    <img src="/images/icon-service-1.svg" alt="" />
                  </div>
                  <div className="service-arrow">
                    <Link href="/service-single"><img src="/images/arrow-accent.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>branding and identity</h3>
                  <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-item-header">
                  <div className="icon-box">
                    <img src="/images/icon-service-2.svg" alt="" />
                  </div>
                  <div className="service-arrow">
                    <Link href="/service-single"><img src="/images/arrow-accent.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>digital marketing</h3>
                  <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-item-header">
                  <div className="icon-box">
                    <img src="/images/icon-service-3.svg" alt="" />
                  </div>
                  <div className="service-arrow">
                    <Link href="/service-single"><img src="/images/arrow-accent.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>creative content production</h3>
                  <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item-header">
                  <div className="icon-box">
                    <img src="/images/icon-service-4.svg" alt="" />
                  </div>
                  <div className="service-arrow">
                    <Link href="/service-single"><img src="/images/arrow-accent.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Content Creation</h3>
                  <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-item-header">
                  <div className="icon-box">
                    <img src="/images/icon-service-5.svg" alt="" />
                  </div>
                  <div className="service-arrow">
                    <Link href="/service-single"><img src="/images/arrow-accent.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>E-commerce Solutions</h3>
                  <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="1s">
                <div className="service-item-header">
                  <div className="icon-box">
                    <img src="/images/icon-service-6.svg" alt="" />
                  </div>
                  <div className="service-arrow">
                    <Link href="/service-single"><img src="/images/arrow-accent.svg" alt="" /></Link>
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>UX/UI Design</h3>
                  <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Expertise for <span>your digital</span> growth journey</h2>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-content">
                <div className="why-choose-item active wow fadeInUp">
                  <h3>Data-driven Approach</h3>
                  <p>We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
                </div>

                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <h3>Competitive Pricing</h3>
                  <p>We offer our top-quality services at competitive prices, providing you with great value for your investment.</p>
                </div>

                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                  <h3>Ethical Business Practices</h3>
                  <p>We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                  <img src="/images/why-choose-image.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are service-we-are">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">who we are</h3>
                  <h2 className="text-anime-style-2">Experts in <span>digital</span> brand innovation</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">We specialize in transforming brands through cutting-edge digital strategies, blending creativity with technology to drive growth, enhance engagement, and deliver memorable experiences.</p>
                </div>

                <div className="experts-rating-video">
                  <div className="experts-rating-video-image">
                    <div className="video-image">
                      <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                        <figure className="image-anime">
                          <img src="/images/experts-rating-video-bg.jpg" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="video-play-button">
                      <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>

                  <div className="who-we-are-client">
                    <div className="comapny-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <p>( <span className="counter">40</span>+ Reviews)</p>
                    </div>
                    
                    <div className="company-client-images">
                      <div className="client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-3.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-4.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="client-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-client-img-5.jpg" alt="" />
                        </figure>
                      </div>
                    </div>

                    <div className="contact-now-btn wow fadeInUp">
                      <Link href="/contact" className="contact-btn">contact now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="experts-counters-list">
                <div className="experts-counter-box expert-box-1">
                  <div className="experts-counter-item">
                    <div className="icon-box">
                      <img src="/images/icon-who-we-are-counter-1.svg" alt="" />
                    </div>
                    <div className="experts-counter-content">
                      <h2><span className="counter">35</span>k+</h2>
                      <p>Happy Customer Around the Word</p>
                    </div>
                  </div>

                  <div className="experts-counter-item">
                    <div className="icon-box">
                      <img src="/images/icon-who-we-are-counter-3.svg" alt="" />
                    </div>
                    <div className="experts-counter-content">
                      <h2><span className="counter">250</span>+</h2>
                      <p>trusted best partners and sponsers</p>
                    </div>
                  </div>
                </div>
                
                <div className="experts-counter-box expert-box-2">
                  <div className="experts-counter-item">
                    <div className="icon-box">
                      <img src="/images/icon-who-we-are-counter-2.svg" alt="" />
                    </div>
                    <div className="experts-counter-content">
                      <h2><span className="counter">120</span>+</h2>
                      <p>best client support award achieved</p>
                    </div>
                  </div>
                  
                  <div className="experts-counter-item">
                    <div className="icon-box">
                      <img src="/images/icon-who-we-are-counter-4.svg" alt="" />
                    </div>
                    <div className="experts-counter-content">
                      <h2><span className="counter">5</span>k+</h2>
                      <p>active users using our best services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Testimonial Section */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonials</h3>
                <h2 className="text-anime-style-2">Read what they have to say about <span>working with us</span></h2>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Discover how our clients have achieved success through our innovative solutions and dedicated support.</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/testimonial" className="btn-default">all testimonials</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="testimonial-review-box">
                <div className="testimonial-review-header">
                  <h2><span className="counter">4.9</span></h2>
                  <div className="testimonial-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>(40+ Reviews)</p>
                </div>

                <div className="testimonial-review-content wow fadeInUp">
                  <h3>Customer experiences that speak for themselves</h3>
                </div>

                <div className="testimonial-review-image">
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/satisfy-client-img-1.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/satisfy-client-img-2.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/satisfy-client-img-3.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/satisfy-client-img-4.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime reveal">
                      <img src="/images/satisfy-client-img-5.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-company-logo">
                          <img src="/images/icon-testimonial-logo.svg" alt="" />
                        </div>
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonial-content">
                          <p>The team transformed our brand&apos;s online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-1.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-company-logo">
                          <img src="/images/icon-testimonial-logo.svg" alt="" />
                        </div>
                        <div className="testimonial-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonial-content">
                          <p>The team transformed our brand&apos;s online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-2.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Marketing Director</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev"></div>
                    <div className="testimonial-button-next"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testimonial-benefits-box">
                <div className="testimonial-benefits-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-testimonial-benefits-1.svg" alt="" />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>Low Cost</h3>
                    <ul>
                      <li>Competitive fee</li>
                      <li>Flexible rates</li>
                    </ul>
                  </div>
                </div>

                <div className="testimonial-benefits-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/images/icon-testimonial-benefits-2.svg" alt="" />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>Permission Less</h3>
                    <ul>
                      <li>Open for integration</li>
                      <li>Run your own nodes</li>
                    </ul>
                  </div>
                </div>

                <div className="testimonial-benefits-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-testimonial-benefits-3.svg" alt="" />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>Secure Data</h3>
                    <ul>
                      <li>Open source sheet</li>
                      <li>360 Security</li>
                    </ul>
                  </div>
                </div>

                <div className="testimonial-benefits-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-testimonial-benefits-4.svg" alt="" />
                  </div>
                  <div className="testimonial-benefits-content">
                    <h3>24 X 7 Support</h3>
                    <ul>
                      <li>Toll free number</li>
                      <li>Ticket systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

