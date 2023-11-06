import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/instructor";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { getCoursesByInstructorId,  deleteCourse  } from "../api/CourseApi";

function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const { instructorId } = useParams();

  useEffect(() => {
    // Fetch all courses when the component mounts
    getCoursesByInstructorId(instructorId)
      .then((coursesData) => setCourses(coursesData))
      .catch((error) => console.error('Error fetching courses:', error));
  }, [instructorId]);

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);
      // Remove the deleted course from the courses state
      const updatedCourses = courses.filter((course) => course.id !== courseId);
      setCourses(updatedCourses);
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

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
              {/* <div className="projects-section-line">
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
              </div> */}
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Course name</th>
                    <th>Price</th>
                    <th>Creation Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>{course.name}</td>
                      <td>{course.price}</td>
                      <td>{course.creationDate}</td>
                      <td>
                        <Button href={`/updateCourse/${course.id}`}>Chi tiết</Button>
                      <Button type="submit" onClick={() => handleDeleteCourse(course.id)}>Xóa</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }} />
    </div>
  );
}

export default CourseManagement;
