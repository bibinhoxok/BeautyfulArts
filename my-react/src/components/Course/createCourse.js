import React from "react";
import { Link, useParams } from 'react-router-dom';

function CreateCourse() {
  const [user] = useParams();

  return (
    <div className="create-course">
      {/* table element */}
      <div style={{ display: "block", height: "200%" }}>
        <div className="app-container">
         {/* Menu  */}
          <div className="col-12 col-md-3">
            <div className="image">
              <img
                src={user.image}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div id="sidebar">
              <header>
              <Link to="/profile">{user.username}</Link>
              </header>
              <ul className="nav">
                <li>
                  <Link to="/profile">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="/courseManagement">Quản lí khóa học</Link>
                </li>
                <li className="sidebar-list-item active">
                  <Link to="/createCourse">Tạo khóa học</Link>
                </li>
              </ul>
            </div>
            {/* End Menu  */}
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
                            placeholder="Title"
                          />
                        </div>
                      </div>
                      <div className="row no-gutters mb-1">
                        <div className="col-md-4 col-12 label">Mô tả:</div>
                        <div className="col-md-6 col-12">
                          <input
                            type="text"
                            className="description-couse form-control"
                            placeholder="Description"
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
                            placeholder="Price"
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
                    {/* <p>bài-1.mp4</p> */}
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
      </div>
    </div>
  );
}

export default CreateCourse;
