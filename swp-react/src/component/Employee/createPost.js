import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPost } from '../api/PostApi'; 

function CreatePost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Tạo một state riêng cho từng trường
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  // Hàm xử lý khi nhấn nút "Lưu"
  const handleAddPost = async () => {
    try {
      const newPost = {
        title: title,
        content: content,
        UserId: userId, 
        creationDate: new Date().toISOString(),
        isDeleted: false, 
      };
  
      const addedPost = await createPost(newPost);
  
      console.log('Newly added post:', addedPost);
  
      handleClose();
    } catch (error) {
      console.error('Lỗi khi tạo bài viết:', error);
      // Xử lý lỗi nếu cần
    }
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Tạo bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="title"
            placeholder="Tựa đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="content"
            placeholder="Nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="number"
            name="userId"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleAddPost}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatePost;
