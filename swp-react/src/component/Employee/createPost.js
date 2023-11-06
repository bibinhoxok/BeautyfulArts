import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CreatePost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Tạo một state riêng cho từng trường
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  // Hàm xử lý khi nhấn nút "Lưu"
  const handleAddPost = () => {
    // Tạo đối tượng post từ dữ liệu nhập vào
    const newPost = {
      title: title,
      content: content,
      UserId: userId,
      creationDate: new Date().toISOString(),
      isDelete: 1,
    };

    // Thực hiện lưu bài viết (gọi API hoặc xử lý khác ở đây)
    // Sau khi hoàn thành, bạn có thể đóng Modal
    // và cập nhật danh sách bài viết nếu cần
    console.log('New Post:', newPost);

    // Đóng Modal
    handleClose();
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
