import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./sidebarInstructor";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function CourseManagement() {
  const [user] = useParams();
  const [courses, setCourses] = useState([]);
  return (
    <div>
      <div style={{ display: "block", height: "200%" }}>
        {/* Menu */}
        <div className="app-container">
          <Sidebar />
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
              {courses.map((course) => (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Course name</th>
                      <th>Price</th>
                      <th>Create Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{course.id}</td>
                      <td>{course.name}</td>
                      <td>{course.price}</td>
                      <td>{course.createDate}</td>
                      <td>
                        <Button href="/updateCourse/:course.id">Detail</Button>
                      </td>
                      <td>
                        <Button href="/deleteCourse/:course.id ">Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }} />
    </div>
  );
}

export default CourseManagement;
