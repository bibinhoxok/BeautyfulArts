import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail } from '../api/CourseApi';

function CourseDetail() {
  const { courseId } = useParams(); // Extract the courseId parameter from the URL

  const [course, setCourse] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [isDeleted, setIsDeleted] = useState('');

  useEffect(() => {
    // Fetch course details when the component mounts
    getCourseDetail(courseId) // Pass the courseId to the getCourseDetail function
      .then((courseData) => {
        setCourse(courseData);
        setName(courseData.name);
        setDescription(courseData.description);
        setPrice(courseData.price);
        setStatus(courseData.status);
        setIsDeleted(courseData.isDeleted);
      })
      .catch((error) => console.error('Error fetching course details:', error));
  }, [courseId]);

  const handleUpdateCourse = () => {
    // Implement your course update logic here
  };

  return (
    <div>
      {/* Course Detail */}
      <section id="about" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-img">
              <img src={course.image} alt="" />
            </div>
            <h2>Chi tiết khóa học</h2>
            <div className="col-lg-6 content">
              <input type="text" name="name" placeholder={course.name} value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" name="description" placeholder={course.description} value={description} onChange={(e) => setDescription(e.target.value)} />
              <input type="text" name="price" placeholder={course.price} value={price} onChange={(e) => setPrice(e.target.value)} />
              <input type="text" name="status" placeholder={course.status} value={status} onChange={(e) => setStatus(e.target.value)} />
              <p>{course.createDate}</p>
              <input type="text" name="isDeleted" placeholder={course.isDeleted} value={isDeleted} onChange={(e) => setIsDeleted(e.target.value)} />
              <button type="submit" onClick={handleUpdateCourse}>Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
