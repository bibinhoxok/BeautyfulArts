import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebarCustomer';

function MyCourse() {
    const [courses, setCourses] = useState([]);

  // Function to handle enrollment or purchase
  const handleEnrollOrPurchase = (courseId) => {
    // Your logic to enroll or purchase a course based on courseId
    console.log(`User enrolled or purchased Course ${courseId}`);
  };

    return(
    <div className="products-row">
    <Sidebar/>
      {courses.map((course) => (
        <Link to="/LearningCourse" key={course.id}>
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
          <div className="product-cell">{course.name}</div>
            <div className="product-cell">{course.instructor}</div>
              <Link to="/LearningCourse" onClick={() => handleEnrollOrPurchase(course.id)}>
                Vào học
              </Link>
          </div>
        </Link>
      ))}
    </div>
    );
}

export default MyCourse;