import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-bg-video">
          <video autoPlay muted loop id="myVideo">
            <source src="https://demo.awaikenthemes.com/assets/videos/artistic-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <div className="typing-title">
                    <p>Digital World</p>
                    <p>Social Marketing</p>
                    <p>Art & Design</p>
                  </div>
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Innovative solutions for <span className="typed-title"></span>
                  </h1>
                </div>

                <div className="hero-content-body">
                  <div className="hero-content-video">
                    <div className="video-play-button">
                      <a className="popup-video">
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <div className="learn-more-circle">
                      <img src="/images/learn-more-circle.svg" alt="" />
                    </div>
                  </div>

                  <div className="hero-video-content wow fadeInUp">
                    <p>At Genesy Global, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.</p>
                  </div>
                </div>

                <div className="hero-btn wow fadeInUp" data-wow-delay="0.25s">
                  <Link href="/contact" className="btn-default">get in touch</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker Section */}
      <div className="our-scrolling-ticker">
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
                  <Link href="/about" className="btn-default">more about</Link>
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

      {/* Our Services Section */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our services</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Our <span>digital services</span> to grow your brand</h2>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/services" className="btn-default">all services</Link>
                </div>
              </div>
            </div>
          </div>

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

            <div className="col-lg-12">
              <div className="service-footer wow fadeInUp" data-wow-delay="0.25s">
                <p>Let&apos;s make something great work together. <Link href="/contact">get free quote</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Success Section */}
      <div className="digital-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="digital-success-box">
                <div className="digital-success-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">Expertise that drives digital <span>success</span></h2>
                  </div>

                  <div className="success-counter-box">
                    <div className="success-counter-item">
                      <h2>+<span className="counter">60</span>%</h2>
                      <p>By optimizing your website for search engines.</p>
                    </div>

                    <div className="success-counter-item">
                      <h2>+<span className="counter">30</span>%</h2>
                      <p>Rise in revenue as more visitors convert into paying customers.</p>
                    </div>
                  </div>
                </div>

                <div className="digital-success-list">
                  <div className="success-list-item wow fadeInUp">
                    <p><span>Social Media Management:</span> Our social media management services focus on building and enhancing your brand&apos;s online presence. We create engaging content, manage your social media accounts, and analyze performance.</p>
                  </div>

                  <div className="success-list-item wow fadeInUp" data-wow-delay="0.25s">
                    <p><span>E-commerce Solutions:</span> Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose us Section */}
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

      {/* Join Agency Section */}
      <div className="join-agency">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">join agency</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Join our <span>agency</span> of creative innovators</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="agency-social-item wow fadeInUp">
                <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                </div>
                
                <div className="agency-social-content">
                  <h3>Follow us on Twitter</h3>
                  <p>@artistic_official</p>
                </div>

                <div className="agency-social-btn">
                  <Link href="/contact" className="readmore-btn"><img src="/images/arrow-white.svg" alt="" /></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="agency-social-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

                <div className="agency-social-content">
                  <h3>Join us on Linked in</h3>
                  <p>user.artistic_official</p>
                </div>

                <div className="agency-social-btn">
                  <Link href="/contact" className="readmore-btn"><img src="/images/arrow-white.svg" alt="" /></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="agency-social-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>

                <div className="agency-social-content">
                  <h3>Follow on Instagram</h3>
                  <p>@artistic_insta_official</p>
                </div>

                <div className="agency-social-btn">
                  <Link href="/contact" className="readmore-btn"><img src="/images/arrow-white.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* How It Work Section */}
      <div className="how-it-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">how it work</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Our proven <span>process</span> for achieving success</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Our proven process combines research, strategy, and creativity to deliver tailored solutions that drive measurable results.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="work-process-item wow fadeInUp">
                <div className="work-process-header">
                  <div className="work-process-title">
                    <h3>discovery phase</h3>
                  </div>

                  <div className="work-process-btn">
                    <Link href="/contact" className="readmore-btn"><img src="/images/arrow-white.svg" alt="" /></Link>
                  </div>
                </div>

                <div className="work-process-content">
                  <p>Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.</p>
                </div>

                <div className="work-process-body">
                  <div className="work-process-no">
                    <h3>step</h3>
                    <h2>01</h2>
                  </div>

                  <div className="work-process-icon-box">
                    <img src="/images/icon-work-process-1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="work-process-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="work-process-header">
                  <div className="work-process-title">
                    <h3>implementation</h3>
                  </div>

                  <div className="work-process-btn">
                    <Link href="/contact" className="readmore-btn"><img src="/images/arrow-white.svg" alt="" /></Link>
                  </div>
                </div>

                <div className="work-process-content">
                  <p>Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.</p>
                </div>

                <div className="work-process-body">
                  <div className="work-process-no">
                    <h3>step</h3>
                    <h2>02</h2>
                  </div>

                  <div className="work-process-icon-box">
                    <img src="/images/icon-work-process-2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="work-process-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="work-process-header">
                  <div className="work-process-title">
                    <h3>collaboration</h3>
                  </div>

                  <div className="work-process-btn">
                    <Link href="/contact" className="readmore-btn"><img src="/images/arrow-white.svg" alt="" /></Link>
                  </div>
                </div>

                <div className="work-process-content">
                  <p>Initial consultation to understand your brand, goals, and target audience Conducting research and analysis of market trends.</p>
                </div>

                <div className="work-process-body">
                  <div className="work-process-no">
                    <h3>step</h3>
                    <h2>03</h2>
                  </div>

                  <div className="work-process-icon-box">
                    <img src="/images/icon-work-process-3.svg" alt="" />
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
                  <Link href="/contact" className="btn-default">leran more</Link>
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
                    <img src="/images/round.png" alt="" />
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

      {/* Our Portfolio Section */}
      <div className="our-portfolio">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">portfolio</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Brands with cutting-edge digital <span>solutions & design</span></h2>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Empowering brands through innovative digital strategies, immersive design, and tailored solutions that drive growth and engagement.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.25s">
                <ul>
                  <li><a href="#" className="active-btn" data-filter="*">all</a></li>
                  <li><a href="#" data-filter=".branding">Branding & Identity</a></li>
                  <li><a href="#" data-filter=".web">Web Design</a></li>
                  <li><a href="#" data-filter=".digital">Digital Marketing</a></li>
                  <li><a href="#" data-filter=".analytics">SEO & Analytics</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row project-item-boxes align-items-center">
                <div className="col-lg-4 col-md-6 project-item-box branding web analytics">
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-1.jpg" alt="" />
                      </figure>

                      <div className="project-tag">
                        <Link href="/project-single">web design</Link>
                      </div>

                      <div className="project-btn">
                        <Link href="/project-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3>Dynamic E-commerce Platform</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 project-item-box web digital urban">
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-2.jpg" alt="" />
                      </figure>

                      <div className="project-tag">
                        <Link href="/project-single">digital marketing</Link>
                      </div>

                      <div className="project-btn">
                        <Link href="/project-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3>innovative identity design</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 project-item-box digital analytics">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-3.jpg" alt="" />
                      </figure>

                      <div className="project-tag">
                        <Link href="/project-single">SEO & analytics</Link>
                      </div>

                      <div className="project-btn">
                        <Link href="/project-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3>dynamic digital campaign</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 project-item-box branding analytics">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-4.jpg" alt="" />
                      </figure>

                      <div className="project-tag">
                        <Link href="/project-single">branding & identity</Link>
                      </div>

                      <div className="project-btn">
                        <Link href="/project-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3>impactful content creation</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 project-item-box web service branding">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-5.jpg" alt="" />
                      </figure>

                      <div className="project-tag">
                        <Link href="/project-single">web design</Link>
                      </div>

                      <div className="project-btn">
                        <Link href="/project-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3>innovative identity design</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 project-item-box digital">
                  <div className="project-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="project-image">
                      <figure className="image-anime">
                        <img src="/images/project-6.jpg" alt="" />
                      </figure>

                      <div className="project-tag">
                        <Link href="/project-single">branding & identity</Link>
                      </div>

                      <div className="project-btn">
                        <Link href="/project-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3>interactive website redesign</h3>
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
                  <p>(5K+ Reviews)</p>
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
                        {/* <div className="testimonial-company-logo">
                          <img src="/images/icon-testimonial-logo.svg" alt="" />
                        </div> */}
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
                        {/* <div className="testimonial-company-logo">
                          <img src="/images/icon-testimonial-logo.svg" alt="" />
                        </div> */}
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

      {/* Agency Benefits Section */}
      <div className="agency-benefits">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">key benefits</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Discover the <span>benefits</span> of choosing us today</h2>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Experience unparalleled creativity, data-driven strategies, and dedicated support that drive real results for your brand.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="benefits-steps-item wow fadeInUp">
                <div className="benefits-steps-no">
                  <h3>01</h3>
                </div>

                <div className="icon-box">
                  <img src="/images/icon-benefits-steps-1.svg" alt="" />
                </div>

                <div className="benefits-steps-content">
                  <h3>Personalized Approach</h3>
                  <p>We customize strategies to fit your brand&apos;s specific needs, ensuring alignment.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="benefits-steps-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="benefits-steps-no">
                  <h3>02</h3>
                </div>

                <div className="icon-box">
                  <img src="/images/icon-benefits-steps-2.svg" alt="" />
                </div>

                <div className="benefits-steps-content">
                  <h3>experienced team</h3>
                  <p>Combines industry knowledge and creativity to exceptional results for your brand.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="benefits-steps-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="benefits-steps-no">
                  <h3>03</h3>
                </div>

                <div className="icon-box">
                  <img src="/images/icon-benefits-steps-1.svg" alt="" />
                </div>

                <div className="benefits-steps-content">
                  <h3>data-driven decisions</h3>
                  <p>We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="benefits-steps-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="benefits-steps-no">
                  <h3>04</h3>
                </div>

                <div className="icon-box">
                  <img src="/images/icon-benefits-steps-4.svg" alt="" />
                </div>

                <div className="benefits-steps-content">
                  <h3>ongoing support</h3>
                  <p>We provide continuous support and maintenance to keep your digital assets at their best.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Blog Section */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">latest news</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Insights on digital <span>innovation</span> and growth</h2>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                <p>Explore the latest trends, strategies, and tools driving digital innovation and helping businesses thrive in a rapidly evolving digital landscape.</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp">
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <img src="/images/post-1.jpg" alt="" />
                    </Link>
                  </figure>
                </div>

                <div className="post-item-body">
                  <div className="post-item-content">
                    <h3><Link href="/blog-single">UI/UX Design Principles for Better User Engagement</Link></h3>
                  </div>

                  <div className="post-item-btn">
                    <Link href="/blog-single">read more</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <img src="/images/post-2.jpg" alt="" />
                    </Link>
                  </figure>
                </div>

                <div className="post-item-body">
                  <div className="post-item-content">
                    <h3><Link href="/blog-single">Why Your Business Needs a Mobile-Optimized Website</Link></h3>
                  </div>

                  <div className="post-item-btn">
                    <Link href="/blog-single">read more</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <img src="/images/post-3.jpg" alt="" />
                    </Link>
                  </figure>
                </div>

                <div className="post-item-body">
                  <div className="post-item-content">
                    <h3><Link href="/blog-single">Content Marketing Essentials for Growing Your Brand</Link></h3>
                  </div>

                  <div className="post-item-btn">
                    <Link href="/blog-single">read more</Link>
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

