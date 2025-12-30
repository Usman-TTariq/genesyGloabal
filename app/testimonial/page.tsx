import Link from 'next/link';

export default function Testimonial() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">Testimonial</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">testimonial</li>
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

      {/* Page Testimonial Section */}
      <div className="page-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-box-list">
                {/* Testimonial Box Item 1 */}
                <div className="testimonial-box-item wow fadeInUp">
                  <div className="client-author-image">
                    <figure className="image-anime">
                      <img src="/images/author-1.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="client-testimonial-content">
                    <div className="client-testimonial-rating">
                      <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                      </ul>
                    </div>

                    <div className="client-testimonial-info">
                      <p>The team transformed our brand&apos;s online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.</p>
                    </div>

                    <div className="client-author-content">
                      <div className="client-author-title">
                        <h3>alexander bennett</h3>
                        <p>senior brand strategist</p>
                      </div>

                      <div className="client-author-logo">
                        <img src="/images/icon-testimonial-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box Item 2 */}
                <div className="testimonial-box-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="client-author-image">
                    <figure className="image-anime">
                      <img src="/images/author-2.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="client-testimonial-content">
                    <div className="client-testimonial-rating">
                      <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                      </ul>
                    </div>

                    <div className="client-testimonial-info">
                      <p>We approached Isabella Morgan with the goal of completely transforming our brand&apos;s digital presence, and they exceeded all expectations. Their team took the time to understand our business.</p>
                    </div>

                    <div className="client-author-content">
                      <div className="client-author-title">
                        <h3>isabella morgan</h3>
                        <p>director of digital marketing</p>
                      </div>

                      <div className="client-author-logo">
                        <img src="/images/icon-testimonial-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box Item 3 */}
                <div className="testimonial-box-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="client-author-image">
                    <figure className="image-anime">
                      <img src="/images/author-3.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="client-testimonial-content">
                    <div className="client-testimonial-rating">
                      <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                      </ul>
                    </div>

                    <div className="client-testimonial-info">
                      <p>Collaborating with Christopher Hughes was an absolute pleasure. Their team brought fresh ideas to the table and helped us completely reimagine our online branding and user experience.</p>
                    </div>

                    <div className="client-author-content">
                      <div className="client-author-title">
                        <h3>christopher hughes</h3>
                        <p>chief technology officer</p>
                      </div>

                      <div className="client-author-logo">
                        <img src="/images/icon-testimonial-logo.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box Item 4 */}
                <div className="testimonial-box-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="client-author-image">
                    <figure className="image-anime">
                      <img src="/images/author-4.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="client-testimonial-content">
                    <div className="client-testimonial-rating">
                      <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                      </ul>
                    </div>

                    <div className="client-testimonial-info">
                      <p>When we first partnered with Olivia Reynolds, we were in need of a complete website overhaul. They not only delivered a beautiful, responsive website, but they also implemented a robust digital marketing strategy.</p>
                    </div>

                    <div className="client-author-content">
                      <div className="client-author-title">
                        <h3>olivia reynolds</h3>
                        <p>senior marketing manager</p>
                      </div>

                      <div className="client-author-logo">
                        <img src="/images/icon-testimonial-logo.svg" alt="" />
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

