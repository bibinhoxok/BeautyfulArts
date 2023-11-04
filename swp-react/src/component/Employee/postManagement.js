import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/employee";
import { getPosts } from "../api/PostApi";
// import Modal from 'react-bootstrap/Modal';

function PostManagement() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch post's courses when the component mounts
        getPosts()
            .then((postsData) => setPosts(postsData))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <Sidebar />
            <div className="post-table">
            <span>Các bài viết</span>
            <Button className="btn btn-success">Tạo bài viết</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Post Date</th>
                            <th>Staff Id</th>
                            <th>Create Date</th>
                            <th>Is Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>{post.userId}</td>
                                <td>{post.createDate}</td>
                                <td>{post.isDelete}</td>
                                <td>
                                    <Button href="/updatePost">Edit</Button>
                                    <Button href="/deletePost">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default PostManagement;

