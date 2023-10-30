import axios from 'axios';

function getUsers() {
  try {
    // Fetch user data from the server. Replace with your actual API endpoint.
    return axios.get('/api/users').then((response) => response.data);
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  try {
    // Update user data on the server. Replace with your actual API endpoint.
    axios.post('/api/users', users);
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

function registerUser(username, email, password) {
  try {
    // Register a new user on the server. Replace with your actual API endpoint.
    return axios.post('/User/register', { username, email, password })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error registering the user:', error);
        return { success: false, message: 'Registration failed' };
      });
  } catch (error) {
    console.error('Error registering the user:', error);
    return { success: false, message: 'Registration failed' };
  }
}

function loginUser(username, password) {
  try {
    // Authenticate the user on the server. Replace with your actual API endpoint.
    return axios.post('/api/login', { username, password })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error logging in:', error);
        return null; // Return null when login fails
      });
  } catch (error) {
    console.error('Error logging in:', error);
    return null; // Return null when login fails
  }
}

export { getUsers, saveUsers, registerUser, loginUser };
