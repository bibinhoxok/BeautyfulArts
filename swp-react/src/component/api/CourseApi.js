import axiosClient from './axios';

// Function to fetch all courses
function getAllCourses() {
  return axiosClient.get('/api/courses').then((response) => response.data);
}

// Function to search for courses based on a search query
function searchCourses(query) {
  return axiosClient.get(`/api/courses/search?q=${query}`).then((response) => response.data);
}

// Function to update a course by ID
function updateCourse(courseId, updatedData) {
  return axiosClient.put(`/api/courses/${courseId}`, updatedData).then((response) => response.data);
}

// Function to create a new course
function createCourse(newCourseData) {
  return axiosClient.post('/api/courses', newCourseData).then((response) => response.data);
}

// Function to fetch courses by instructor ID
function getCoursesByInstructorId(instructorId) {
  return axiosClient.get(`/api/courses/instructor/${instructorId}`).then((response) => response.data);
}

export { getAllCourses, searchCourses, updateCourse, createCourse, getCoursesByInstructorId };
