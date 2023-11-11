// CourseList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from '../api/CourseApi';
import { addToCart } from '../api/OrderApi';
import { useUser } from './Context';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const { user} = useUser();

  // const handleAddToCart = () => {
  //   // Assuming you have user information available (you need userId)
  //   const userId = user.id; // Replace with actual userId or get it dynamically
  //   addToCart(course.id, userId)
  //     .then((response) => {
  //       // Handle success, e.g., show a success message
  //       console.log('Course added to cart:', response);
  //     })
  //     .catch((error) => {
  //       // Handle error, e.g., show an error message
  //       console.error('Error adding to cart:', error);
  //     });
  // };

  useEffect(() => {
    // Fetch all courses when the component mounts
    getAllCourses()
      .then((coursesData) => setCourses(coursesData))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="products-row">
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={`/CourseDetail/${course.id}`}>
            <button className="cell-more-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
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
            <div className="product-cell image">
              <img src={course.image} alt="Course Thumbnail" />
            </div>
            <div className="product-cell info">
              <div className="product-cell">{course.instructor}</div>
              <div className="product-cell">{course.name}</div>
              <div className="product-cell">{course.price}</div>
              <div className="product-cell">{course.createDate}</div>
              {course.enrolled ? (
                <Link to={`/LearningCourse/${course.id}`}>
                  Vào học
                </Link>
              ) : (
                {/* <button onClick={() => handleAddToCart(course.id)}>Thêm vào giỏ hàng</button> */}
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
