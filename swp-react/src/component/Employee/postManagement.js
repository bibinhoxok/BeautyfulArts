import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/employee";
import { getPosts, updatePost, deletePost } from '../api/PostApi';
import AddPost from './createPost';

function PostManagement() {
    const [posts, setPosts] = useState([]);
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        isDelete: "",
    });

    useEffect(() => {
        // Fetch post's courses when the component mounts
        getPosts()
            .then((postsData) => setPosts(postsData))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    const handleUpdatePost = async (postId) => {
        const postToUpdate = posts.find((post) => post.id === postId);

        if (!postToUpdate) {
            console.error("Post not found for update.");
            return;
        }

        try {
            const updatedPost = await updatePost(postId, {
                title: postData.title,
                content: postData.content,
                isDelete: postData.isDelete,
            });

            // Replace the old post with the updated post
            const updatedPosts = posts.map((post) =>
                post.id === postId ? updatedPost : post
            );

            setPosts(updatedPosts);
        } catch (error) {
            console.error("Failed to update post:", error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);

            // Remove the deleted post from the posts state
            const updatedPosts = posts.filter((post) => post.id !== postId);
            setPosts(updatedPosts);
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="post-table">
                <span>Các bài viết</span>
                <AddPost/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Staff Id</th>
                            <th>Creation Date</th>
                            <th>Is Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder={post.title}
                                        value={postData.title}
                                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="content"
                                        placeholder={post.content}
                                        value={postData.content}
                                        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                                    />
                                </td>
                                <td>{post.userId}</td>
                                <td>{post.creationDate}</td>
                                <td>
                                    <input
                                        type="text"
                                        name="isDelete"
                                        placeholder={post.isDelete}
                                        value={postData.isDelete}
                                        onChange={(e) => setPostData({ ...postData, isDelete: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <Button type="submit" onClick={() => handleUpdatePost(post.id)}>
                                        Chỉnh sửa
                                    </Button>
                                    <Button type="submit" onClick={() => handleDeletePost(post.id)}>
                                        Xóa
                                    </Button>
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
