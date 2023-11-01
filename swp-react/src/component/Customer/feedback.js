import React from 'react';
import { Link } from 'react-router-dom';

function Feedback() {
    return<div className="feedback-form">
    <Link to="#" className="close-form">
      x
    </Link>
    <div id="logo">
      <h1>
        <a href="#body" className="scrollto">
          Beautiful <span>Arts</span>
        </a>
      </h1>
    </div>
    <input type="text" name="title" placeholder="tiêu đề" />
    <input
      type="text"
      name="content"
      className="content"
      placeholder="nội dung"
    />
    <button type="submit">Gửi</button>
  </div>
;  
}

export default Feedback;