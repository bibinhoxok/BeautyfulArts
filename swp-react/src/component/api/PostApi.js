import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7129', 
});

async function getPosts() {
  try {
    // Gọi API để lấy danh sách bài viết
    const response = await axiosClient.get('/api/posts');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách bài viết:', error);
  }
}

async function createPost(postData) {
  try {
    // Gọi API để tạo bài viết mới
    const response = await axiosClient.post('/api/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tạo bài viết:', error);
  }
}

async function updatePost(postId, updatedData) {
  try {
    // Gọi API để cập nhật bài viết theo ID
    const response = await axiosClient.put(`/api/posts/${postId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật bài viết:', error);
  }
}

async function deletePost(postId) {
  try {
    // Gọi API để xóa bài viết theo ID
    const response = await axiosClient.delete(`/api/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi xóa bài viết:', error);
  }
}

export { getPosts, createPost, updatePost, deletePost };
