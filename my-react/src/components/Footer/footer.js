import React from "react";

function Footer() {
    return <footer className="main-footer">
        <div className="row footer-contain">
    <div className="col-12 col-lg-5">
      <p className="item-title">CÔNG TY </p>
      <div className="item-list pb-4">
        <p className="info-item">Mã số thuế: </p>
        <p className="info-item">Địa chỉ: </p>
        <p className="info-item">Đại diện pháp luật: </p>
      </div>
    </div>
    <div className="col-12 col-lg-4">
      <p className="item-title">Về Beautyful Arts:</p>
      <div className="item-list">
        <a href="/aboutUs" className="">
          <p className="item">Giới thiệu - Liên hệ</p>
        </a>{" "}
        <a href="/policy" className="">
          <p className="item">Chính sách bảo mật</p>
        </a>{" "}
        <a href="/payment" className="">
          <p className="item">Hướng dẫn thanh toán</p>
        </a>{" "}
        <a href="/service" className="">
          <p className="item">Chính sách dịch vụ</p>
        </a>
      </div>
    </div>
    <div className="col-12 col-lg-3 share-container">
      <p>
        Chia sẻ: <br />
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
      </p>
      <p>
        Theo dõi chúng tôi: <br />
        <a href="">
          <i className="fa fa-brands fa-facebook" />
        </a>
        <a href="">
          <i className="fa fa-brands fa-youtube" />
        </a>
      </p>
    </div>
  </div>
    </footer>;
}

export default Footer;