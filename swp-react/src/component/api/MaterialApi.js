import axiosClient from './axios';

// Function to fetch all materials
async function getMaterials() {
    const response = await axiosClient.get('/api/materials'); // Replace with the actual endpoint for fetching materials
    return response.data;
  }
  
  // Add other material-related API functions as needed
  
  export { getMaterials };