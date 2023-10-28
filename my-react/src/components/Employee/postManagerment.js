import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


function PostManagement() {
    const [posts, setPosts] = useState([]);

    return (
        <div className="products-row">
            {posts.map((post) => (
                <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Role</th>
                <th>Create Date</th>
                <th>Is Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{post.id}</td>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
                <td>{post.phone}</td>
                <td>{post.address}</td>
                <td>{post.role}</td>
                <td>{post.createDate}</td>
                <td>{post.isDelete}</td>
                <td>
                  <Button href="/updatePost">Link</Button>
                  <Button href="/deletePost">Link</Button>
                </td>
              </tr>
            </tbody>
          </Table>
            ))}
        </div>
    );
}

export default PostManagement;