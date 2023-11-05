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

// Function to update an existing material
async function updateMaterial(materialId, updatedMaterialData) {
  try {
    const response = await axiosClient.put(`/materials/${materialId}`, updatedMaterialData);

    if (response.status !== 200) {
      throw new Error("Failed to update material.");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to delete a material
async function deleteMaterial(materialId) {
  try {
    const response = await axiosClient.delete(`/materials/${materialId}`);

    if (response.status !== 204) {
      throw new Error("Failed to delete material.");
    }
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

export { getMaterials, addMaterial, updateMaterial, deleteMaterial };
