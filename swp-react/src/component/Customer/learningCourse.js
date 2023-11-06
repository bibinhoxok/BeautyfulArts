import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getMaterials } from '../api/MaterialApi';
import Feedback from './feedback';

function Learn() {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null); // Bài học được chọn
  const [isAllCompleted, setIsAllCompleted] = useState(false); // Biến kiểm tra

  useEffect(() => {
    // Fetch materials when the component mounts
    getMaterials()
      .then((materialsData) => {
        // Lấy danh sách bài học và chọn bài học đầu tiên làm bài học mặc định
        setMaterials(materialsData);
        setSelectedMaterial(materialsData[0]);
        // Kiểm tra nếu tất cả bài học đã hoàn thành
        const allCompleted = materialsData.every((material) => material.isCompleted);
        setIsAllCompleted(allCompleted);
      })
      .catch((error) => console.error('Error fetching materials:', error));
  }, []);

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

  

  return (
    <div className="learn-container">
      <main className="video-container">
        <section className="video-and-comments">
          <section>
            <iframe
              src={selectedMaterial ? selectedMaterial.fileUrl : ""}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
              title="Video Player"
            />
            <p className="video-title-large">
              {selectedMaterial ? selectedMaterial.title : "Chọn một bài học"}
            </p>
            <div className="video-stats">
              <div className="video-stat">
                {selectedMaterial ? selectedMaterial.createDate : ""}
              </div>
              <div className="video-stat">
                <Button href="#" className="video-button">
                  <i className="title-icon fa fa-arrow-left" /> bài trước
                </Button>
                <Button href="#" className="video-button">
                  bài tiếp <i className="title-icon fa fa-arrow-right" />
                </Button>
              </div>
            </div>
            <hr />
          </section>
        </section>
        <aside>
          <div className="recommend-header">Danh sách bài học:</div>
          <div className="recommend-videos">
            {materials.map((material, index) => (
              <div
                className={`recommend-video ${material.isCompleted ? "completed" : ""} ${
                  selectedMaterial === material ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleMaterialClick(material)}
              >
                <img src={material.fileUrl} alt={material.title} />
                <div className="video-info-recommend">
                  <span className="recommend-video-title">
                    <Link to="#">{material.title}</Link>
                  </span>
                  <div className="creator-name">
                    <p>Phan Nguyễn</p>
                    {material.isCompleted && <p className="completed-mark">&#10003;</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isAllCompleted && (
            <Feedback/>
          )}
        </aside>
      </main>
    </div>
  );
}

export default Learn;
