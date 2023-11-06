import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129',
});

async function sendFeedback(feedbackData) {
  try {
    const response = await axios.post('/api/feedback', feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error sending feedback:', error);
  }
}

async function getAllFeedback() {
  try {
    // Replace with your actual API endpoint for fetching all feedback.
    const response = await axiosClient.get('/api/feedback');
    return response.data;
  } catch (error) {
    console.error('Error fetching all feedback:', error);
  }
}

export { sendFeedback, getAllFeedback };
