import axios from './axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129',
});

// Function to fetch all courses
async function getAllCourses() {
  const response = await axiosClient.get('/api/courses');
  return response.data;
}

// Function to get a course by name
async function getCourseByName(courseName) {
  try {
    const response = await axiosClient.get(`/api/courses/name/${courseName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
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

async function deleteCourse(courseId) {
  try {
    const response = await axiosClient.delete(`/api/courses/${courseId}`);

    if (response.status !== 204) {
      throw new Error("Failed to delete course.");
    }
  } catch (error) {
    throw error;
  }
}

export { getAllCourses, getCourseByName, getCourseDetail, searchCourses, updateCourse, createCourse, getCoursesByInstructorId, getMyCourse, deleteCourse };
