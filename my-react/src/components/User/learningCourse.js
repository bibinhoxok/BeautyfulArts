import React, { useState } from "react";
import { Link } from "react-router-dom";

function LearningCourse() {
  return (
    <>
      {/* table element */}
      <main className="video-container">
        <section className="video-and-comments">
          <section>
            <iframe
              src="https://www.youtube.com/embed/vKhuzVQboe0"
              title="YouTube Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
            <p className="video-title">
              Bài 1: Khoá học quà tặng - Vẽ chú cún con
            </p>
            <div className="video-stats">
              <div className="video-stat">838,026 views Aug 10, 2020</div>
              <div className="video-stat">
                <Link to="#" className="video-button">
                  <i className="title-icon fa fa-arrow-left" /> bài trước
                </Link>
                <Link to="#" className="video-button">
                  bài tiếp <i className="title-icon fa fa-arrow-right" />
                </Link>
              </div>
            </div>
            <hr />
          </section>
        </section>
        <aside>
          <div className="recommend-header">danh sách bài học:</div>
          <div className="recommend-videos">
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 1: Khoá học quà tặng - Vẽ chú cún con"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 1: Khoá học quà tặng - Vẽ chú cún con</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                  <p>Hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 2: Khoá học quà tặng - Vẽ chú gấu"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 2: Khoá học quà tặng - Vẽ chú gấu</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                  <p>Hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 3: Khoá học quà tặng - Học vẽ con bướm"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 3: Khoá học quà tặng - Học vẽ con bướm</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                  <p>Hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 4: Khoá học quà tặng - Học vẽ con voi"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 4: Khoá học quà tặng - Học vẽ con voi</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                  <p>Hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 1: Khoá học quà tặng - Vẽ chú cún con"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 1: Khoá học quà tặng - Vẽ chú cún con</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                  <p>Hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 2: Khoá học quà tặng - Vẽ chú gấu"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 2: Khoá học quà tặng - Vẽ chú gấu</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 3: Khoá học quà tặng - Học vẽ con bướm"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 3: Khoá học quà tặng - Học vẽ con bướm</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img
                src="../img/portfolio/UploadImages_haiphong_thnguyenhue_2021_12_nam+21_22_ve_tranh_tranh-1_1412202115.jpg"
                alt="Bài 4: Khoá học quà tặng - Học vẽ con voi"
              />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="#">Bài 4: Khoá học quà tặng - Học vẽ con voi</Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                </div>
              </div>
            </div>
            <div className="recommend-video">
              <img src="../img/top_APHAN.jpg" alt="." />
              <div className="video-info-recommend">
                <span className="recommend-video-title">
                  <Link to="/Feedback" className="feedback">
                    Phản hồi và đánh giá chất lượng bài học
                  </Link>
                </span>
                <div className="creator-name">
                  <p>Phan Nguyễn</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default LearningCourse;
