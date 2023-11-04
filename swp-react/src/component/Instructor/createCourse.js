import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/instructor";
import Modal from 'react-bootstrap/Modal';
import { addMaterial, getMaterials } from "../api/MaterialApi";

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
        <>
            <Button variant="primary" onClick={handleShow}>
                Tạo bài học
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tạo bài học</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" name="title" placeholder="Tên" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" name="desc" placeholder="Mô tả" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <input type="text" name="fileUrl" placeholder="File url" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} />
                    {/* <input type="text" name="courseId" placeholder={course.id} value={courseId} onChange={(e) => setCourseId(e.target.value)} /> */}
                    <input type="text" name="isDeleted" placeholder="isDeleted" value={isDeleted} onChange={(e) => setIsDeleted(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddMaterial}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function CreateCourse() {
    //   Course 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [isDeleted, setIsDeleted] = useState('');
    const [createDate, setCreateDate] = useState('');
    // Material 
    const [materials, setMaterials] = useState([]);
    const { courseId } = useParams();

    useEffect(() => {
        getMaterials(courseId).then((materialsData) => setMaterials(materialsData));
      }, [courseId]); 

    return <div>
        <Sidebar />
        <div className="col-md-9 col-12">
            <div>
                <p className="title">Tạo khóa học</p>
                <hr />
                <div className="user-account-info-component">
                    <div className="section-title text-primary">
                        <span>Thông tin chung</span>
                    </div>
                    <div className="row">
                        <form className="material-create" style={{ width: "100%" }}>
                            <div className="col-md-6 col-12">
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
                            </div>
                        </form>
                    </div>
                    <hr />
                    <h3>Thêm bài học</h3>
                    <AddMaterial />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>FileUrl</th>
                                <th>Course lId</th>
                                <th>Creation Date</th>
                                <th>Is Delete</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materials.map((material) => (
                                <tr key={material.id}>
                                    <td>{material.id}</td>
                                    <td>{material.title}</td>
                                    <td>{material.fileUrl}</td>
                                    <td>{material.courseId}</td>
                                    <td>{material.isDeleted}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <hr />
                    <div className="container">
                        <div>
                            <button
                                style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
                                type="submit"
                                disabled="disabled"
                                className="info"
                            >
                                Tạo khóa học
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
}

export default CreateCourse;