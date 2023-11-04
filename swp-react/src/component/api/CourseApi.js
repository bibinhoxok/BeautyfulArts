import axios from './axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129',
});

// Function to fetch all courses
async function getAllCourses() {
  const response = await axiosClient.get('/api/courses');
  return response.data;
}

async function getCourseDetail() {
  const response = await axiosClient.get('url');
  return response.data;
}

// Function to search for courses based on a search query
async function searchCourses(query) {
  const response = await axiosClient.get(`/api/courses/search?q=${query}`);
  return response.data;
}

// Function to update a course by ID
async function updateCourse(courseId, updatedData) {
  const response = await axiosClient.put(`/api/courses/${courseId}`, updatedData);
  return response.data;
}

// Function to create a new course
async function createCourse(newCourseData) {
  const response = await axiosClient.post('/api/courses', newCourseData);
  return response.data;
}

// Function to fetch courses by instructor ID
async function getCoursesByInstructorId(instructorId) {
  const response = await axiosClient.get(`/api/courses/instructor/${instructorId}`);
  return response.data;
}

async function getMyCourse(customerId) {
  const response = await axiosClient.get(`/api/courses/customer/${customerId}`);
  return response.data;
}

export { getAllCourses, getCourseDetail, searchCourses, updateCourse, createCourse, getCoursesByInstructorId, getMyCourse };
