import React from "react";

function Banner() {
    return <div className="banner">

    {/* Intro Section */}
    <section id="intro">
    <div className="intro-content">
      <h2>
        Ươm mầm <span>giấc mơ</span>
        <br />
        trẻ thơ!
      </h2>
      <div>
        <a href="#" className="btn-sign-up">
          Đăng kí
        </a>
        <a href="#" className="btn-log-in">
          Đăng nhập
        </a>
      </div>
    </div>
    <div id="intro-carousel" className="owl-carousel">
      <div
        className="item"
        style={{ backgroundImage: 'url("img/intro-carousel/1.jpg")' }}
      />
      <div
        className="item"
        style={{ backgroundImage: 'url("img/intro-carousel/2.jpg")' }}
      />
      <div
        className="item"
        style={{ backgroundImage: 'url("img/intro-carousel/3.jpg")' }}
      />
      <div
        className="item"
        style={{ backgroundImage: 'url("img/intro-carousel/4.jpg")' }}
      />
      <div
        className="item"
        style={{ backgroundImage: 'url("img/intro-carousel/5.jpg")' }}
      />
    </div>
  </section>

{/* Main */}
<main id="main">
    {/* About Section  */}
    <section id="about" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-img">
            <img src="img/top_APHAN.jpg" alt="" />
          </div>
          <div className="col-lg-6 content">
            <h2>
              Học vẽ cho bé - Khơi nguồn cảm hứng - Đam mê &amp; Sáng tạo.
            </h2>
            <h3>
              Hoạ sĩ Phan Nguyễn, người đồng hành cũng bạn trong khoá học này là
              họa sĩ chuyên nghiệp từ 2007.
            </h3>
            <p>
              Các bài giảng dạy vẽ các con vật và nhân vật hoạt hình từ những
              đường nét cơ bản nhất nên rất phù hợp với trẻ, giúp bé làm quen
              với cách tạo hình nhân vật và là tiền đề để bé có thể tiếp tục học
              vẽ nghệ thuật sau này. Bé sẽ được học 3 dáng vẽ khác nhau cho từng
              con vật hay nhân vật để tăng sự đa dạng cho bài học và để bé có
              thể biết cách tự sáng tạo dáng vẽ theo ý muốn của mình.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section  */}

    <section id="services">
    <div className="container">
      <div className="section-header">
        <h2>BÉ SẼ HỌC ĐƯỢC GÌ:</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="box wow fadeInLeft">
            <div className="icon">
              <i className="fa fa-eye" />
            </div>
            <h4 className="title">
              <a href="">Quan sát</a>
            </h4>
            <p className="description">
              Vẽ giúp bé cải thiện trí nhớ, và ngạc nhiên hơn là vẽ giúp bé biết
              cách quan sát mọi việc trong cuộc sống tinh tế hơn, sâu sắc hơn.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box wow fadeInRight">
            <div className="icon">
              <i className="fa fa-picture-o" />
            </div>
            <h4 className="title">
              <a href="">Sáng tạo</a>
            </h4>
            <p className="description">
              Vẽ giúp bé nâng cao khả năng tưởng tượng - tăng cường tính sáng
              tạo; thúc đẩy khả năng tư duy, suy nghĩ đa chiều của bé.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box wow fadeInLeft" data-wow-delay="0.2s">
            <div className="icon">
              <i className="fa fa-user" />
            </div>
            <h4 className="title">
              <a href="">Diễn đạt</a>
            </h4>
            <p className="description">
              Bé sẽ thoải mãi thể hiện, bộc bạch những suy nghĩ, cảm xúc của
              mình qua từng bức vẽ. Vẽ cũng giúp bé cảm thấy phấn chấn và yêu
              đời hơn nhiều.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box wow fadeInRight" data-wow-delay="0.2s">
            <div className="icon">
              <i className="fa fa-map" />
            </div>
            <h4 className="title">
              <a href="">Cover</a>
            </h4>
            <p className="description">
              Khoá học cũng sẽ giúp bé thoả thích cover lại các nhân vật và tuỳ
              biến họ về mặt cảm xúc,cử chỉ.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Our Portfolio Section */}
  <section id="portfolio" className="wow fadeInUp">
    <div className="container">
      <div className="section-header">
        <h2>TÁC PHẨM CỦA HỌC VIÊN:</h2>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 1</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-2_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-2_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 2</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-3_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-3_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 3</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-4_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-4_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 4</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-5_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-5_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 5</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-6_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-6_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 6</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-7_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-7_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 7</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="portfolio-item wow fadeInUp">
            <a
              href="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-2_1412202115.jpg"
              className="portfolio-popup"
            >
              <img
                src="img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-2_1412202115.jpg"
                alt=""
              />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h2 className="wow fadeInUp">Tác phẩm 8</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section id="testimonials" className="wow fadeInUp">
    <div className="container">
      <div className="section-header">
        <h2>ĐÁNH GIÁ:</h2>
      </div>
      <div className="owl-carousel testimonials-carousel">
        <div className="testimonial-item">
          <img src="img/img/1.jpg" />
        </div>
        <div className="testimonial-item">
          <img src="img/img/2.jpg" />
        </div>
        <div className="testimonial-item">
          <img src="img/img/3.jpg" />
        </div>
        <div className="testimonial-item">
          <img src="img/img/4.jpg" />
        </div>
        <div className="testimonial-item">
          <img src="img/img/2.jpg" />
        </div>
      </div>
    </div>
  </section>

  {/* Call To Action Section */}
  <section id="call-to-action" className="wow fadeInUp">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 text-center text-lg-left">
          <h3 className="cta-title">
            Trở thành giảng viên của{" "}
            <b style={{ color: "#0c2e8a" }}>Beautyful</b>{" "}
            <b style={{ color: "#51d8af" }}>Arts</b>
          </h3>
          <p className="cta-text">
            Cùng hợp tác xây dựng các khóa học online để chia sẻ kiến thức và
            kinh nghiệm của bạn với mọi người
          </p>
        </div>
        <div className="col-lg-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href="#">
            Tham gia ngay
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Our Team Section */}
  <section id="team" className="wow fadeInUp">
    <div className="container">
      <div className="section-header">
        <h2>GIẢNG VIÊN HƯỚNG DẪN:</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="member">
            <div className="pic">
              <img src="img/team-1.jpg" alt="" />
            </div>
            <div className="details">
              <h4>Walter White</h4>
              <span>artist</span>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="member">
            <div className="pic">
              <img src="img/team-2.jpg" alt="" />
            </div>
            <div className="details">
              <h4>Sarah Jhinson</h4>
              <span>artist</span>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="member">
            <div className="pic">
              <img src="img/team-3.jpg" alt="" />
            </div>
            <div className="details">
              <h4>William Anderson</h4>
              <span>artist</span>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="member">
            <div className="pic">
              <img src="img/team-4.jpg" alt="" />
            </div>
            <div className="details">
              <h4>Amanda Jepson</h4>
              <span>artist</span>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter" />
                </a>
                <a href="">
                  <i className="fa fa-facebook" />
                </a>
                <a href="">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style={{ height: "20vh" }} />
</main>

    </div>;
}

export default Banner;