import React from "react";
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav/nav';

function CourseManagement() {
  const [user] = useParams();
  return (
    <div>
      <div style={{ display: "block", height: "200%" }}>
      {/* Menu */}
        <div className="app-container">
        <Nav/>
          <div className="col-md-9 col-12">
            <div className="projects-section">
              <div className="projects-section-header">
                <p>Quản lí khóa học</p>
                <div className="nav-menu-search">
                  <div
                    className="input-group search-input-group"
                    id="menu-search"
                  >
                    <input
                      type="text"
                      placeholder="Tên khoá học, chủ đề, tác giả"
                      className="search-input form-control"
                    />
                    <button type="button" className="search-button">
                      <i className="fa fa-search" />
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="projects-section-line">
                <div className="projects-status">
                  <div className="item-status">
                    <span className="status-number">45</span>
                    <span className="status-type">Số khóa học</span>
                  </div>
                  <div className="item-status">
                    <span className="status-number">124</span>
                    <span className="status-type">Số bài giảng</span>
                  </div>
                  <div className="item-status">
                    <span className="status-number">62</span>
                    <span className="status-type">Tổng số đăng kí</span>
                  </div>
                </div>
              </div>
              <div className="project-boxes jsGridView">
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="project-box-wrapper">
                  <div className="project-box">
                    <div className="project-box-header">
                      <span>10/12/2020</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">
                        SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023
                      </p>
                      <p className="box-content-subheader">vẽ cơ bản</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <div className="projects-status">
                        <div className="item-status">
                          <span className="status-number">45</span>
                          <span className="status-type">Số bài giảng</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">24</span>
                          <span className="status-type">Số lượt đăng kí</span>
                        </div>
                        <div className="item-status">
                          <span className="status-number">20</span>
                          <span className="status-type">Số hoàn thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }} />
    </div>
  );
}

export default CourseManagement;
