import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/employee";
import { getUsers, updateUser, deleteUser } from "../api/UserApi";

function UserTable({ users, handleUpdateUser, handleDeleteUser }) {
  return (
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>
              <select
                value={user.role}
                onChange={(e) => handleUpdateUser(user.id, e.target.value, user.isDelete)}
              >
                <option value="1">Staff</option>
                <option value="2">Customer</option>
                <option value="3">Instructor</option>
                <option value="4">Admin</option>
              </select>
            </td>
            <td>{user.createDate}</td>
            <td>
              <select
                value={user.isDelete}
                onChange={(e) => handleUpdateUser(user.id, user.role, e.target.value)}
              >
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
            </td>
            <td>
              <Button type="submit" onClick={() => handleUpdateUser(user.id, user.role, user.isDelete)}>
                Chỉnh sửa
              </Button>
              <Button type="submit" onClick={() => handleDeleteUser(user.id)}>
                Xóa
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function AccountManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((usersData) => setUsers(usersData))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleUpdateUser = (userId, newRole, newIsDelete) => {
    updateUser(userId, { role: newRole, isDelete: newIsDelete })
      .then((updatedUser) => {
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, role: newRole, isDelete: newIsDelete } : user
        );
        setUsers(updatedUsers);
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId)
      .then(() => {
        // Remove the deleted user from the list.
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <Sidebar />
      <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="customer" title="Customer">
          <UserTable users={users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
        </Tab>
        <Tab eventKey="instructor" title="Instructor">
          <UserTable users={users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
        </Tab>
        <Tab eventKey="staff" title="Staff" disabled>
          <UserTable users={users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AccountManagement;
