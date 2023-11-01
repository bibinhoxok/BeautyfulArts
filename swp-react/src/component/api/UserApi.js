import axiosClient from './axios';

async function getUsers() {
  try {
    // Fetch user data from the server. Replace with your actual API endpoint.
    const response = await axiosClient.get('/api/users');
    return response.data;
  } catch (error) {
    return [];
  }
}

async function saveUsers(users) {
  try {
    // Update user data on the server. Replace with your actual API endpoint.
    await axiosClient.post('/api/users', users);
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

async function registerUser(username, email, password) {
  try {
    // Register a new user on the server. Replace with your actual API endpoint.
    const response = await axiosClient.post('/User/register', { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering the user:', error);
    return { success: false, message: 'Registration failed' };
  }
}

async function loginUser(email, password) {
  try {
    // Authenticate the user on the server. Replace with your actual API endpoint.
    const response = await axiosClient.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null; // Return null when login fails
  }
}

async function editProfile(userId, updatedData) {
  try {
    // Send a PUT request to update the user's profile.
    // Replace '/api/users/{userId}' with the actual API endpoint for updating user profiles.
    const response = await axiosClient.put(`/api/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
}

export { getUsers, saveUsers, registerUser, loginUser, editProfile };
