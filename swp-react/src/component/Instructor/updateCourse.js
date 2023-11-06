import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/instructor";
import Modal from "react-bootstrap/Modal";
import { addMaterial, getMaterials, updateMaterial, deleteMaterial } from "../api/MaterialApi";
import { getCourseDetail, updateCourse as updateCourseApi} from "../api/CourseApi";

function AddMaterial(props) {
  const { courseId, materials, setMaterials } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [materialData, setMaterialData] = useState({
    title: "",
    description: "",
    fileUrl: "",
    isDeleted: false,
  });

  // Function to add a new material
  const handleAddMaterial = async () => {
    try {
      const addedMaterial = await addMaterial({
        title: materialData.title,
        description: materialData.description,
        fileUrl: materialData.fileUrl,
        courseId: courseId,
        isDeleted: materialData.isDeleted,
      });

      // Update the materials state with the newly added material
      setMaterials([...materials, addedMaterial]);

      // Close the modal
      handleClose();
    } catch (error) {
      console.error("Failed to add material:", error);
    }
  }

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
        {courseId}
          <input
            type="text"
            name="title"
            placeholder="Tên"
            value={materialData.title}
            onChange={(e) => setMaterialData({ ...materialData, title: e.target.value })}
          />
          <input
            type="text"
            name="description"
            placeholder="Mô tả"
            value={materialData.description}
            onChange={(e) => setMaterialData({ ...materialData, description: e.target.value })}
          />
          <input
            type="text"
            name="fileUrl"
            placeholder="File url"
            value={materialData.fileUrl}
            onChange={(e) => setMaterialData({ ...materialData, fileUrl: e.target.value })}
          />
          <input
            type="text"
            name="isDeleted"
            placeholder="isDeleted"
            value={materialData.isDeleted}
            onChange={(e) => setMaterialData({ ...materialData, isDeleted: e.target.value })}
          />
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const [isDeleted, setIsDeleted] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getCourseDetail(courseId)
      .then((courseData) => {
        setCourse(courseData);
        setName(courseData.name);
        setDescription(courseData.description);
        setPrice(courseData.price);
        setStatus(courseData.status);
        setIsDeleted(courseData.isDeleted);
        setCreationDate(courseData.creationDate);
      })
      .catch((error) => console.error("Error fetching course details:", error));

    getMaterials(courseId)
      .then((materialsData) => setMaterials(materialsData))
      .catch((error) => console.error("Error fetching materials:", error));
  }, [courseId]);

  const handleUpdateCourse = async () => {
    const updatedCourseData = {
      name,
      description,
      price,
      status,
      isDeleted,
    };

    try {
      const updatedCourse = await updateCourseApi(courseId, updatedCourseData);

      setCourse(updatedCourse);
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  const handleUpdateMaterial = async (materialId, name, value) => {
    try {
      const updatedMaterial = await updateMaterial(materialId, {
        [name]: value,
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
      const updatedMaterials = materials.filter(
        (material) => material.id !== materialId
      );
      setMaterials(updatedMaterials);
    } catch (error) {
      console.error("Failed to delete material:", error);
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
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Id</div>
              <div className="col-md-6 col-12">{courseId}</div>
            </div>
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Tên khóa học:</div>
              <div className="col-md-6 col-12">
                <input
                  type="text"
                  className="title-material form-control"
                  placeholder={course.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Mô tả:</div>
              <div className="col-md-6 col-12">
                <input
                  type="text"
                  className="description-couse form-control"
                  placeholder={course.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Giá:</div>
              <div className="col-md-6 col-12">
                <input
                  type="number"
                  className="price form-control"
                  placeholder={course.price}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Tình trạng:</div>
              <div className="col-md-6 col-12">
                <input
                  type="text"
                  className="status form-control"
                  placeholder={course.status}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Ẩn/Hiện</div>
              <div className="col-md-6 col-12">
                <input
                  type="number"
                  className="isDeleted form-control"
                  placeholder={course.isDeleted}
                  value={isDeleted}
                  onChange={(e) => setIsDeleted(e.target.value)}
                />
              </div>
            </div>
            <div className="row no-gutters mb-1">
              <div className="col-md-4 col-12 label">Ngày tạo</div>
              <div className="col-md-6 col-12">{creationDate}</div>
            </div>
            <hr />
            <h3>Bài học</h3>
            <AddMaterial
              courseId={courseId}
              materials={materials}
              setMaterials={setMaterials}
            />
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
                    <td>
                      <input
                        type="text"
                        name="title"
                        placeholder={material.title}
                        value={material.title}
                        onChange={(e) => handleUpdateMaterial(material.id, e.target.name, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        placeholder={material.description}
                        value={material.description}
                        onChange={(e) => handleUpdateMaterial(material.id, e.target.name, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="fileUrl"
                        placeholder={material.fileUrl}
                        value={material.fileUrl}
                        onChange={(e) => handleUpdateMaterial(material.id, e.target.name,  e.target.value)}
                      />
                    </td>
                    <td>{material.courseId}</td>
                    <td>
                      <input
                        type="text"
                        name="isDeleted"
                        placeholder={material.isDeleted}
                        value={material.isDeleted}
                        onChange={(e) => handleUpdateMaterial(material.id, e.target.name, e.target.value)}
                      />
                    </td>
                    <td>
                      <Button
                        type="submit"
                        onClick={() => handleUpdateMaterial(material.id)}
                      >
                        Chỉnh sửa
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => handleDeleteMaterial(material.id)}
                      >
                        Xóa
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <hr />
            <div className="container">
              <div>
                <Button type="submit" onClick={handleUpdateCourse}>
                  Lưu khóa học
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCourse;
