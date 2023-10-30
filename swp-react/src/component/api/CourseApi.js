// CourseApi.js
import axios from 'axios';

// Function to fetch all courses
function getAllCourses() {
  return axios.get('/api/courses').then((response) => response.data);
}

// Function to search for courses based on a search query
function searchCourses(query) {
  return axios.get(`/api/courses/search?q=${query}`).then((response) => response.data);
}

// Add other course-related API functions as needed

export { getAllCourses, searchCourses };
