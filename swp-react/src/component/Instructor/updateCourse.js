import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/instructor";
import Modal from 'react-bootstrap/Modal';
import { addMaterial, getMaterials, updateMaterial, deleteMaterial } from "../api/MaterialApi";
import { getCourseDetail, updateCourse as updateCourseApi } from '../api/CourseApi';

function AddMaterial(props) {
  const { courseId, materials, setMaterials } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  // Function to add a new material
  const handleAddMaterial = async () => {
    const newMaterial = {
      title: title,
      description: desc,
      fileUrl: fileUrl,
      courseId: courseId,
      isDeleted: isDeleted,
    };

    try {
      const addedMaterial = await addMaterial(newMaterial);

      // Update the materials state with the newly added material
      setMaterials([...materials, addedMaterial]);

      // Close the modal
      handleClose();
    } catch (error) {
      console.error("Failed to add material:", error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Tạo bài học
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo bài học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{courseId}</p>
          <input type="text" name="title" placeholder="Tên" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="desc" placeholder="Mô tả" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <input type="text" name="fileUrl" placeholder="File url" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} />
          <input type="text" name="isDeleted" placeholder="isDeleted" value={isDeleted} onChange={(e) => setIsDeleted(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleAddMaterial}>
            Lưu bài học
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function UpdateCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [isDeleted, setIsDeleted] = useState('');
  const { creationDate } = useState('');

  useEffect(() => {
    getCourseDetail(courseId)
      .then((courseData) => {
        setCourse(courseData);
        setName(courseData.name);
        setDescription(courseData.description);
        setPrice(courseData.price);
        setStatus(courseData.status);
        setIsDeleted(courseData.isDeleted);
      })
      .catch((error) => console.error('Error fetching course details:', error));
  }, [courseId]);

  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials(courseId).then((materialsData) => setMaterials(materialsData));
  }, [courseId]);

  const handleUpdateMaterial = async (materialId) => {
    const materialToUpdate = materials.find((material) => material.id === materialId);

    if (!materialToUpdate) {
      console.error("Material not found for update.");
      return;
    }

    try {
      const updatedMaterial = await updateMaterial(materialId, {
        title: materialToUpdate.title,
        description: materialToUpdate.description,
        fileUrl: materialToUpdate.fileUrl,
        courseId: materialToUpdate.courseId,
        isDeleted: true, // Set isDeleted to true for deletion
      });

      // Replace the old material with the updated material
      const updatedMaterials = materials.map((material) =>
        material.id === materialId ? updatedMaterial : material
      );
      setMaterials(updatedMaterials);
    } catch (error) {
      console.error("Failed to update material:", error);
    }
  };

  const handleDeleteMaterial = async (materialId) => {
    try {
      await deleteMaterial(materialId);

      // Remove the deleted material from the materials state
      const updatedMaterials = materials.filter((material) => material.id !== materialId);
      setMaterials(updatedMaterials);
    } catch (error) {
      console.error("Failed to delete material:", error);
    }
  };

  const handleUpdateCourse = async (courseId) => {
    const updatedCourseData = {
      name,
      description,
      price,
      status,
      isDeleted,
    };

    try {
      const updatedCourse = await updateCourseApi(courseId, updatedCourseData);

      // Update the course state with the updated course data
      setCourse(updatedCourse);
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="col-md-9 col-12">
        <div>
          <p className="title">Nội dung khóa học</p>
          <hr />
          <div className="user-account-info-component">
            <div className="section-title text-primary">
              <span>Thông tin chung</span>
            </div>
            <div className="row">
              <form className="material-create" style={{ width: "100%" }}>
                <div className="col-md-6 col-12">
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Id</div>
                    <div className="col-md-6 col-12">
                      {courseId}
                    </div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Tên khóa học:</div>
                    <div className="col-md-6 col-12">
                      <input
                        type="text"
                        className="title-material form-control"
                        placeholder="SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023"
                        value={name} onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Mô tả:</div>
                    <div className="col-md-6 col-12">
                      <input
                        type="text"
                        className="description-couse form-control"
                        placeholder=""
                        height="100px"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Giá:</div>
                    <div className="col-md-6 col-12">
                      <input
                        type="number"
                        className="price form-control"
                        placeholder={500000}
                        value={price} onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Tình trạng:</div>
                    <div className="col-md-6 col-12">
                      <input
                        type="number"
                        className="price form-control"
                        placeholder="status"
                        value={status} onChange={(e) => setStatus(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Ẩn/Hiện</div>
                    <div className="col-md-6 col-12">
                      <input
                        type="number"
                        className="price form-control"
                        placeholder=""
                        value={isDeleted} onChange={(e) => setIsDeleted(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row no-gutters mb-1">
                    <div className="col-md-4 col-12 label">Ngày tạo</div>
                    <div className="col-md-6 col-12">
                      {creationDate}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <hr />
            <h3>Bài học</h3>
            <AddMaterial courseId={courseId} materials={materials} setMaterials={setMaterials} />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>File Url</th>
                  <th>Course Id</th>
                  <th>Creation Date</th>
                  <th>Is Delete</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((material) => (
                  <tr key={material.id}>
                    <td>{material.id}</td>
                    <td><input type="text" name="name" placeholder={material.title} value={material.title} onChange={(e) => e.target.value} /></td>
                    <td><input type="text" name="desc" placeholder="Mô tả" value={material.description} onChange={(e) => e.target.value} /></td>
                    <td><input type="text" name="fileUrl" placeholder="File Url" value={material.fileUrl} onChange={(e) => (e.target.value)} /></td>
                    <td>{material.courseId}</td>
                    <td><input type="text" name="isDeleted" placeholder="isDeleted" value={material.isDeleted} onChange={(e) => e.target.value} /></td>
                    <td>
                      <Button type="submit" onClick={() => handleUpdateMaterial(material.id)}>Chỉnh sửa</Button>
                      <Button type="submit" onClick={() => handleDeleteMaterial(material.id)}>Xóa</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <hr />
            <div className="container">
              <div>
                <Button type="submit" onClick={() => handleUpdateCourse(courseId)}>Lưu khóa học</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCourse;
