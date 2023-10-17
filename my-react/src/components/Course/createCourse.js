import React from "react";
import { Link } from "react-router-dom";

function CreateCourse() {
  return (
    <div className="create-course">
      {/* table element */}
      <div style={{ display: "block", height: "200%" }}>
        <div className="app-container">
          <div className="col-12 col-md-3">
            <div className="image">
              <img
                src="https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div id="sidebar">
              <header>
                <Link to="#">Username</Link>
              </header>
              <ul className="nav">
                <li>
                  <Link to="#">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="#">Quản lí khóa học</Link>
                </li>
                <li className="sidebar-list-item active">
                  <Link to="#">Tạo khóa học</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div>
              <p className="title">Tạo khóa học</p>
              <hr />
              <div className="user-account-info-component">
                <div className="section-title text-primary">
                  <span>Thông tin chung</span>
                </div>
                <div className="row">
                  <form className="course-create" style={{ width: "100%" }}>
                    <div className="col-md-6 col-12">
                      <div className="row no-gutters mb-1">
                        <div className="col-md-4 col-12 label">Tiêu đề:</div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            className="title-course form-control"
                            placeholder="SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023"
                          />
                        </div>
                      </div>
                      <div className="row no-gutters mb-1">
                        <div className="col-md-4 col-12 label">Loại:</div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            className="title-course form-control"
                            placeholder="vẽ cơ bản"
                          />
                        </div>
                      </div>
                      <div className="row no-gutters mb-1">
                        <div className="col-md-4 col-12 label">Mô tả:</div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            className="description-couse form-control"
                            placeholder=""
                            height="100px"
                          />
                        </div>
                      </div>
                      <div className="row no-gutters mb-1">
                        <div className="col-md-4 col-12 label">Giá:</div>
                        <div className="col-md-6 col-12">
                          <input
                            type="number"
                            className="price form-control"
                            placeholder={500000}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="section-title text-primary">
                  <span>Thêm bài học</span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="row no-gutters mb-1">
                      <div className="col-md-4 col-12 label">Tiêu đề:</div>
                      <div className="col-md-6 col-12">
                        <input
                          type="text"
                          className="title-course form-control"
                          placeholder="Bài 1: Khoá học quà tặng - Vẽ chú cún con"
                        />
                      </div>
                    </div>
                    <div className="row no-gutters mb-1">
                      <div className="col-md-4 col-12 label">Mô tả:</div>
                      <div className="col-md-6 col-12">
                        <input
                          type="text"
                          className="description-couse form-control"
                          placeholder=""
                          height="100px"
                        />
                      </div>
                    </div>
                    <button type="submit" disabled="disabled" className="info">
                      Upload video
                    </button>
                    <p>bài-1.mp4</p>
                  </div>
                </div>
                <hr />
                <div className="section-title text-primary">
                  <span>Thêm bài học</span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="row no-gutters mb-1">
                      <div className="col-md-4 col-12 label">Tiêu đề:</div>
                      <div className="col-md-6 col-12">
                        <input
                          type="text"
                          className="title-course form-control"
                          placeholder="Bài 1: Khoá học quà tặng - Vẽ chú cún con"
                        />
                      </div>
                    </div>
                    <div className="row no-gutters mb-1">
                      <div className="col-md-4 col-12 label">Mô tả:</div>
                      <div className="col-md-6 col-12">
                        <input
                          type="text"
                          className="description-couse form-control"
                          placeholder=""
                          height="100px"
                        />
                      </div>
                    </div>
                    <button type="submit" disabled="disabled" className="info">
                      Upload video
                    </button>
                  </div>
                </div>
                <hr />
                <div className="container">
                  <div>
                    <button type="submit" disabled="disabled" className="info">
                      Thêm bài học
                    </button>
                  </div>
                </div>
                <hr />
                <div className="container">
                  <div>
                    <button
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                      }}
                      type="submit"
                      disabled="disabled"
                      className="info"
                    >
                      Tạo khóa học
                    </button>
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
        {/* Info form */}
      </div>
    </div>
  );
}

export default CreateCourse;
