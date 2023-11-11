import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseDetail } from '../api/CourseApi';
import { addToCart } from '../api/OrderApi';
import { useUser } from './Context';


function CourseDetail() {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const { user} = useUser();

  useEffect(() => {
    // Fetch the course details when the component mounts
    getCourseDetail(id)
      .then((courseData) => setCourse(courseData))
      .catch((error) => console.error('Error fetching course details:', error));
  }, [id]);

  const handleAddToCart = () => {
    // Assuming you have user information available (you need userId)
    const userId = user.id; // Replace with actual userId or get it dynamically
    addToCart(course.id, userId)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('Course added to cart:', response);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error('Error adding to cart:', error);
      });
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
                <Link to={`/LearningCourse/${course.id}`}>
                  Vào học
                </Link>
              ) : (
                <button onClick={() => handleAddToCart(course.id)}>Thêm vào giỏ hàng</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
