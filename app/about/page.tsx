import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">About <span>us</span></h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">about us</li>
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

      {/* About Agency Section */}
      <div className="about-agency">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-agency-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">about agency</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Crafting <span>unique digital</span> experiences that elevate your brand</h2>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                  <Link href="/contact" className="btn-default">Contact Us</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-agency-list">
                <div className="about-agency-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-1.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>your success, our mission</h3>
                    <p>We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.</p>
                  </div>
                </div>

                <div className="about-agency-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-2.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>creators of digital excellence</h3>
                    <p>At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.</p>
                  </div>
                </div>

                <div className="about-agency-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-3.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>innovating the digital landscape</h3>
                    <p>Founded on a passion for creativity and technology, we are a team of dedicated digital experts committed to transforming the way brands connect with audiences.</p>
                  </div>
                </div>

                <div className="about-agency-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-about-agency-4.svg" alt="" />
                  </div>
                  <div className="agency-item-content">
                    <h3>helping brands thrive online</h3>
                    <p>Our purpose is simple: to help brands succeed in the digital age. We&apos;re passionate about building strong relationships with our clients and crafting custom strategies that drive results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="our-approach">
        <div className="container">
          <div className="row align-items-center section-row">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">our approach</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Crafting <span>impactful</span> digital experiences</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>We blend creativity, strategy, and technology to design digital experiences that connect, engage, and inspire. From concept to completion, we deliver tailored solutions that elevate brands and drive results.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mission-vision-item wow fadeInUp">
                <div className="mission-vision-image">
                  <div className="mission-vision-img">
                    <figure className="image-anime">
                      <img src="/images/our-mission-img.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="icon-box">
                    <img src="/images/icon-our-mission.svg" alt="" />
                  </div>
                </div>
                <div className="mission-vision-content">
                  <h3>our mission</h3>
                  <p>Delivering transformative digital solutions that elevate brands connections.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="mission-vision-image">
                  <div className="mission-vision-img">
                    <figure className="image-anime">
                      <img src="/images/our-vision-img.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="icon-box">
                    <img src="/images/icon-our-vision.svg" alt="" />
                  </div>
                </div>
                <div className="mission-vision-content">
                  <h3>our vision</h3>
                  <p>Shaping the future through innovative and impactful digital experiences.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="mission-vision-image">
                  <div className="mission-vision-img">
                    <figure className="image-anime">
                      <img src="/images/our-value-img.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="icon-box">
                    <img src="/images/icon-our-value.svg" alt="" />
                  </div>
                </div>
                <div className="mission-vision-content">
                  <h3>our value</h3>
                  <p>Integrity, creativity, innovation, collaboration, excellence, results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">who we are</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Experts in <span>digital</span> brand innovation</h2>
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
                    <div className="comapny-client-rating wow fadeInUp">
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

                    <div className="contact-now-btn wow fadeInUp" data-wow-delay="0.2s">
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
                      <p>Happy Customers Around the World</p>
                    </div>
                  </div>

                  <div className="experts-counter-item">
                    <div className="icon-box">
                      <img src="/images/icon-who-we-are-counter-3.svg" alt="" />
                    </div>
                    <div className="experts-counter-content">
                      <h2><span className="counter">250</span>+</h2>
                      <p>trusted best partners and sponsors</p>
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

      {/* Executive Partners Section */}
      <div className="executive-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="executive-partners-box">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="section-title">
                      <h3 className="wow fadeInUp">executive partners</h3>
                      <h2 className="text-anime-style-2" data-cursor="-opaque">100+ <span>partners</span> & supporters</h2>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="our-partners-list">
                      <div className="company-logo wow fadeInUp">
                        <img src="/images/company-logo-1.svg" alt="" />
                      </div>
                      <div className="company-logo wow fadeInUp" data-wow-delay="0.2s">
                        <img src="/images/company-logo-2.svg" alt="" />
                      </div>
                      <div className="company-logo wow fadeInUp" data-wow-delay="0.4s">
                        <img src="/images/company-logo-3.svg" alt="" />
                      </div>
                      <div className="company-logo wow fadeInUp" data-wow-delay="0.6s">
                        <img src="/images/company-logo-4.svg" alt="" />
                      </div>
                      <div className="company-logo wow fadeInUp" data-wow-delay="0.8s">
                        <img src="/images/company-logo-5.svg" alt="" />
                      </div>
                      <div className="company-logo wow fadeInUp" data-wow-delay="1s">
                        <img src="/images/company-logo-6.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="our-features">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">features</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Innovative <span>features</span> for your digital success</h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/contact" className="btn-default">learn more</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="digital-features-box">
              <div className="digital-features-item features-item-1 wow fadeInUp">
                <div className="digital-features-image">
                  <figure className="image-anime">
                    <img src="/images/digital-features-img-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="digital-features-content">
                  <h3>custom branding solutions</h3>
                  <p>Unique brand identity development, including logos, color palettes.</p>
                </div>
              </div>

              <div className="digital-features-item features-item-2 wow fadeInUp" data-wow-delay="0.25s">
                <div className="digital-features-image">
                  <figure className="image-anime">
                    <img src="/images/digital-features-img-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="digital-features-content">
                  <h3>data-driven digital marketing</h3>
                  <p>Strategies combining SEO, PPC, content marketing</p>
                </div>
              </div>
              
              <div className="digital-features-item agency-supports">
                <div className="agency-supports-header">
                  <div className="agency-supports-content wow fadeInUp">
                    <h3>Content Creation and Strategy</h3>
                    <p>High-quality, engaging content across blogs, videos, and graphics designed to captivate and retain audiences.</p>
                  </div>
                  <div className="agency-free-consultation">
                    <img src="/images/free-consultation-circle.png" alt="" />
                  </div>
                </div>

                <div className="agency-supports-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-1.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-2.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-3.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-4.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-5.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-6.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-3.svg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="agency-supports-logo">
                          <img src="/images/agency-supports-logo-5.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">our team</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Dynamic <span>team</span> of digital experts</h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/team" className="btn-default">view all member</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp">
                <div className="team-image">
                  <Link href="/team-single" className="image-anime">
                    <figure>
                      <img src="/images/team-1.jpg" alt="" />
                    </figure>
                  </Link>
                </div>
                <div className="team-body">
                  <div className="team-content">
                    <h3><Link href="/team-single">sarah mitchell</Link></h3>
                    <p>senior project manager</p>
                  </div>
                  <div className="team-social-list">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-image">
                  <Link href="/team-single" className="image-anime">
                    <figure>
                      <img src="/images/team-2.jpg" alt="" />
                    </figure>
                  </Link>
                </div>
                <div className="team-body">
                  <div className="team-content">
                    <h3><Link href="/team-single">brooklyn simmons</Link></h3>
                    <p>marketing director</p>
                  </div>
                  <div className="team-social-list">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="team-image">
                  <Link href="/team-single" className="image-anime">
                    <figure>
                      <img src="/images/team-3.jpg" alt="" />
                    </figure>
                  </Link>
                </div>
                <div className="team-body">
                  <div className="team-content">
                    <h3><Link href="/team-single">emily davis</Link></h3>
                    <p>product manager</p>
                  </div>
                  <div className="team-social-list">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="team-image">
                  <Link href="/team-single" className="image-anime">
                    <figure>
                      <img src="/images/team-4.jpg" alt="" />
                    </figure>
                  </Link>
                </div>
                <div className="team-body">
                  <div className="team-content">
                    <h3><Link href="/team-single">jessica taylor</Link></h3>
                    <p>communications specialist</p>
                  </div>
                  <div className="team-social-list">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
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

      {/* Our Testimonial Section */}
      <div className="our-testimonial">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonials</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Read what they have to say about <span>working with us</span></h2>
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

      {/* Our FAQs Section */}
      <div className="our-faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-images">
                <div className="faq-img-1">
                  <figure className="image-anime reveal">
                    <img src="/images/faq-img-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="faq-img-2">
                  <figure className="image-anime reveal">
                    <img src="/images/faq-img-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="faq-cta-box">
                  <a href="tel:+15126494906">
                    <img src="/images/faq-cta-phone.svg" alt="" />+1 512-649-4906
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-faq-section">
                <div className="section-title">
                  <h3 className="wow fadeInUp">have any questions?</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Let us address your <span>questions</span> today!</h2>
                </div>

                <div className="faq-accordion" id="faqaccordion">
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What services does your agency offer?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How long does a typical project take?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Do you work with small businesses?
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Can you help with existing websites?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Project timelines vary based on complexity and scope. We provide a detailed timeline during the initial consultation.</p>
                      </div>
                    </div>
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

