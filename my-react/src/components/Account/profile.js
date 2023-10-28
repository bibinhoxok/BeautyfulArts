import React from "react";
import { Link, useParams } from 'react-router-dom';

function Profile() {
  const [user] = useParams();
    return (<>
    {/* table element */}
    <div style={{ display: "block", height: "200%" }}>
      <div className="app-container">
        <div className="col-md-9 col-12">
          <div>
            <p className="title">Thông tin tài khoản</p>
            <hr />
            <div className="user-account-info-component">
              <div className="section-title text-primary">
                <span>Thông tin chung</span>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Họ tên:</div>
                    <div className="col-md-6 col-12"{user.username}</div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Số điện thoại:</div>
                    <div className="col-md-6 col-12">0888 888 888</div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Địa chỉ:</div>
                    <div className="col-md-6 col-12">abcxyz</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-button">
              <button className="info">Chỉnh sửa</button>
            </div>
            <hr />
            <div className="section-title text-primary">
              <span>Thông tin đăng nhập</span>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="row no-gutters mb-1">
                  <div className="col-md-4 col-12 label">Username:</div>
                  <div className="col-md-6 col-12">Username</div>
                </div>
                <div className="row no-gutters mb-1">
                  <div className="col-md-4 col-12 label">Email:</div>
                  <div className="col-md-6 col-12">example@fpt.edu.vn</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="section-title text-primary">Đổi mật khẩu</div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 col-12">
                  <div className="form-container">
                    <form className="form">
                      <div>
                        <label>Nhập mật khẩu cũ</label>
                        <div>
                          <div role="group" className="input-group">
                            <input
                              id="oldPasswordFormInput"
                              name="oldPassword"
                              type="password"
                              placeholder="Mật khẩu cũ"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="val-err-long">
                        <span style={{ display: "none" }} />
                      </p>
                      <div>
                        <label>Nhập mật khẩu mới</label>
                        <div>
                          <input
                            id="passwordResetFormPassword1Input"
                            name="newPassword1"
                            type="password"
                            placeholder="Mật khẩu"
                          />
                        </div>
                      </div>
                      <p className="val-err-long">
                        <span style={{ display: "none" }} />
                      </p>
                      <div>
                        <label>Nhập lại mật khẩu mới</label>
                        <div>
                          <input
                            id="passwordResetFormPassword2Input"
                            name="newPassword2"
                            type="password"
                            placeholder="Nhập lại mật khẩu mới"
                          />
                        </div>
                      </div>
                      <p className="val-err" />
                      <div className="row justify-content-center">
                        <button
                          type="submit"
                          disabled="disabled"
                          className="info"
                        >
                          Đổi mật khẩu
                          <span className="icon icon-right-open" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div style={{ height: "30vh" }} />
    {/*Info form */}
    <div className="info-form">
      <Link to="#" className="close-form">
        x
      </Link>
      <div id="logo">
        <h1>
          <Link to="#body" className="scrollto">
            Beautyful <span>Arts</span>
          </Link>
        </h1>
      </div>
      <input type="text" name="name" placeholder="Họ tên:" />
      <div className="sex-option">
        <p>
          <label htmlFor="male">Nam</label>
          <input type="radio" id="male" name="sex" defaultValue="" />
          <label htmlFor="female">Nữ</label>
          <input type="radio" id="female" name="sex" defaultValue="" />
        </p>
      </div>
      <input type="text" name="email" placeholder="0888 888 888" />
      <input type="text" name="email" placeholder="abcxyz" />
      <button type="submit">hoàn tất</button>
    </div>
  </>)
;  
}

export default Profile;