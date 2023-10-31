import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseDetail } from '../api/CourseApi';

function CourseDetail() {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Fetch the course details when the component mounts
    getCourseDetail(id)
      .then((courseData) => setCourse(courseData))
      .catch((error) => console.error('Error fetching course details:', error));
  }, [id]);

  const handleEnrollOrPurchase = (courseId) => {
    // Your logic to enroll or purchase a course based on courseId
    console.log(`User enrolled or purchased Course ${courseId}`);
  };

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      {/* Course Detail */}
      <section id="about" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-img">
              <img src={course.image} alt={course.name} />
            </div>
            <div className="col-lg-6 content">
              <h2>{course.name}</h2>
              <h3>{course.instructor}</h3>
              <p>{course.description}</p>
              <h2>{course.price}</h2>
              {course.enrolled ? (
                <Link to="/LearningCourse" onClick={() => handleEnrollOrPurchase(course.id)} >
                  Vào học
                </Link>
              ) : (
                <Link to="/Cart" onClick={() => handleEnrollOrPurchase(course.id)} >
                  Mua khóa học
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
