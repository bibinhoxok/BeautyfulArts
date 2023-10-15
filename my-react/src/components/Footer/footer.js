import React from "react";
import { Link } from 'react-router-dom';

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
        <Link to="/aboutUs" className="">
          <p className="item">Giới thiệu - Liên hệ</p>
        </Link>
        <Link to="/policy" className="">
          <p className="item">Chính sách bảo mật</p>
        </Link> 
        <Link to="/payment" className="">
          <p className="item">Hướng dẫn thanh toán</p>
        </Link> 
        <Link to="/service" className="">
          <p className="item">Chính sách dịch vụ</p>
        </Link>
      </div>
    </div>
    <div className="col-12 col-lg-3 share-container">
      <p>
        Chia sẻ: <br />
        <Link to="">
          <i className="fa fa-twitter" />
        </Link>
        <Link to="">
          <i className="fa fa-facebook" />
        </Link>
        <Link to="">
          <i className="fa fa-google-plus" />
        </Link>
        <Link to="">
          <i className="fa fa-linkedin" />
        </Link>
      </p>
      <p>
        Theo dõi chúng tôi: <br />
        <Link to="">
          <i className="fa fa-brands fa-facebook" />
        </Link>
        <Link to="">
          <i className="fa fa-brands fa-youtube" />
        </Link>
      </p>
    </div>
  </div>
    </footer>;
}

export default Footer;