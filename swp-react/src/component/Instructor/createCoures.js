// import React, { useState } from "react";
// import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/Button";
// import Sidebar from "../Sidebar/instructor";

// function CreateCourse() {
//     // material 
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     // const [status, setStatus] = useState('');
//     // const [isDeleted, setIsDeleted] = useState('');
//     // const [createDate, setCreateDate] = useState('');
//     //   Material 
//     const [materials, setMaterials] = useState([]);
//     const [title, setTitle] = useState('');
//     const [mDescription, setMDescription] = useState('');
//     const [fileUrl, setFileUrl] = useState('');
//     const [courseId, setCourseId] = useState('');
//     const [isDeleted, setIsDeleted] = useState('');

//     return <div>
//         <Sidebar />
//         <div className="col-md-9 col-12">
//             <div>
//                 <p className="title">Tạo khóa học</p>
//                 <hr />
//                 <div className="user-account-info-component">
//                     <div className="section-title text-primary">
//                         <span>Thông tin chung</span>
//                     </div>
//                     <div className="row">
//                         <form className="material-create" style={{ width: "100%" }}>
//                             <div className="col-md-6 col-12">
//                                 <div className="row no-gutters mb-1">
//                                     <div className="col-md-4 col-12 label">Tên khóa học:</div>
//                                     <div className="col-md-6 col-12">
//                                         <input
//                                             type="text"
//                                             className="title-material form-control"
//                                             placeholder="SKETCHNOTE CÙNG HỌA SỸ XUÂN LAN 2023"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="row no-gutters mb-1">
//                                     <div className="col-md-4 col-12 label">Mô tả:</div>
//                                     <div className="col-md-6 col-12">
//                                         <input
//                                             type="text"
//                                             className="description-couse form-control"
//                                             placeholder=""
//                                             height="100px"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="row no-gutters mb-1">
//                                     <div className="col-md-4 col-12 label">Giá:</div>
//                                     <div className="col-md-6 col-12">
//                                         <input
//                                             type="number"
//                                             className="price form-control"
//                                             placeholder={500000}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <hr />
//                     <h3>Thêm bài học</h3><Button type="submit" onClick={handleAddMaterial}>+</Button>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Title</th>
//                                 <th>Description</th>
//                                 <th>FileUrl</th>
//                                 <th>Course lId</th>
//                                 <th>Creation Date</th>
//                                 <th>Is Delete</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {materials.map((material) => (
//                                 <tr key={material.id}>
//                                     <td>{material.id}</td>
//                                     <td>{material.title}</td>
//                                     <td>{material.fileUrl}</td>
//                                     <td>{material.courseId}</td>
//                                     <td>{material.isDeleted}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                     {/* <div className="section-title text-primary">
//                         <span>Thêm bài học</span>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6 col-12">
//                             <div className="row no-gutters mb-1">
//                                 <div className="col-md-4 col-12 label">Tiêu đề:</div>
//                                 <div className="col-md-6 col-12">
//                                     <input
//                                         type="text"
//                                         className="title-material form-control"
//                                         placeholder="Bài 1: Khoá học quà tặng - Vẽ chú cún con"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="row no-gutters mb-1">
//                                 <div className="col-md-4 col-12 label">Mô tả:</div>
//                                 <div className="col-md-6 col-12">
//                                     <input
//                                         type="text"
//                                         className="description-couse form-control"
//                                         placeholder=""
//                                         height="100px"
//                                     />
//                                 </div>
//                             </div>
//                             <button type="submit" disabled="disabled" className="info">
//                                 Upload video
//                             </button>
//                             <p>bài-1.mp4</p>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="section-title text-primary">
//                         <span>Thêm bài học</span>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6 col-12">
//                             <div className="row no-gutters mb-1">
//                                 <div className="col-md-4 col-12 label">Tiêu đề:</div>
//                                 <div className="col-md-6 col-12">
//                                     <input
//                                         type="text"
//                                         className="title-material form-control"
//                                         placeholder="Bài 1: Khoá học quà tặng - Vẽ chú cún con"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="row no-gutters mb-1">
//                                 <div className="col-md-4 col-12 label">Mô tả:</div>
//                                 <div className="col-md-6 col-12">
//                                     <input
//                                         type="text"
//                                         className="description-couse form-control"
//                                         placeholder=""
//                                         height="100px"
//                                     />
//                                 </div>
//                             </div>
//                             <button type="submit" disabled="disabled" className="info">
//                                 Upload video
//                             </button>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="container">
//                         <div>
//                             <button type="submit" disabled="disabled" className="info">
//                                 Thêm bài học
//                             </button>
//                         </div>
//                     </div> */}
//                     <hr />
//                     <div className="container">
//                         <div>
//                             <button
//                                 style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
//                                 type="submit"
//                                 disabled="disabled"
//                                 className="info"
//                             >
//                                 Tạo khóa học
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         ;
// }

// export default CreateCourse;