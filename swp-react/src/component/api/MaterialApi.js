// MaterialApi.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129',
});

// Function to add a new material
async function addMaterial(materialData) {
  try {
    const response = await axiosClient.post('/materials', materialData);

    if (response.status !== 201) {
      throw new Error("Failed to add material.");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to get a list of materials for a specific course
async function getMaterials(courseId) {
  try {
    const response = await axiosClient.get(`/materials?courseId=${courseId}`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch materials.");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export { getMaterials, addMaterial };
