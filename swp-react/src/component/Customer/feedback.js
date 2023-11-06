import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { sendFeedback } from '../api/FeedbackApi';

function Feedback({ courseId }) {
  const [show, setShow] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    content: '',
    courseEnrollUserId: '',
    courseEnrollCourseId: courseId,
    courseEnrollId: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSendFeedback = async () => {
    try {
      // Gửi đối tượng feedbackData
      await sendFeedback(feedbackData);
      // Đóng modal và đặt lại trường nhập
      handleClose();
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Phản hồi và đánh giá chất lượng bài học
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Phản Hồi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="content"
            placeholder="Nội dung"
            value={feedbackData.content}
            onChange={(e) => setFeedbackData({ ...feedbackData, content: e.target.value })}
          />
          <input
            type="text"
            name="courseEnrollUserId"
            placeholder="User ID"
            value={feedbackData.courseEnrollUserId}
            onChange={(e) => setFeedbackData({ ...feedbackData, courseEnrollUserId: e.target.value })}
          />
          <input
            type="text"
            name="courseEnrollId"
            placeholder="Enroll ID"
            value={feedbackData.courseEnrollId}
            onChange={(e) => setFeedbackData({ ...feedbackData, courseEnrollId: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSendFeedback}>
            Gửi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Feedback;
