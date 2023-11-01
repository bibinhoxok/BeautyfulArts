import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getMaterials } from '../api/MaterialApi';

function Learn() {
    const [materials, setMaterials] = useState([]);
    const course = useState('');

    useEffect(() => {
        // Fetch materials when the component mounts
        getMaterials()
            .then((materialsData) => setMaterials(materialsData))
            .catch((error) => console.error('Error fetching materials:', error));
    }, []);

    return <div>
        {materials.map((material) => (
            <main className="video-container">
                <section className="video-and-comments">
                    <section>
                        <iframe
                            src={material.fileUrl}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                            title="Video Player"
                        />

                        <p className="video-title">{material.title}</p>
                        <div className="video-stats">
                            <div className="video-stat">{material.createDate}</div>
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
                            <div className="recommend-video" key={index}>
                                <img src={material.fileUrl} alt={material.title} />
                                <div className="video-info-recommend">
                                    <span className="recommend-video-title">
                                        <Link to="#">{material.title}</Link>
                                    </span>
                                    <div className="creator-name">
                                        <p>Phan Nguyễn</p>
                                        <p>Hoàn thành</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="recommend-video">
                            <img src="../img/top_APHAN.jpg" alt="." />
                            <div className="video-info-recommend">
                                <span className="recommend-video-title">
                                    <a href="/feedback" className="feedback">
                                        Phản hồi và đánh giá chất lượng bài học
                                    </a>
                                </span>
                                <div className="creator-name">
                                    <p>{course.userId}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        ))
        }
    </div>
}

export default Learn;