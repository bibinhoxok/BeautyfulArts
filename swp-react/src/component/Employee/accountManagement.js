import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Sidebar from "../Sidebar/employee";
import { getUsers } from "../api/UserApi";

function UserTable({ users }) {
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
          <th></th>
          <th></th>
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
            <td>{user.role}</td>
            <td>{user.createDate}</td>
            <td>{user.isDelete}</td>
            <td>
              <Button href="/updateAccount">Edit</Button>
            </td>
            <td>
              <Button href="/deleteAccount">Delete</Button>
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
    // Fetch user's courses when the component mounts
    getUsers()
      .then((usersData) => setUsers(usersData))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <Sidebar />
      <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="customer" title="Customer">
          <UserTable users={users} />
        </Tab>
        <Tab eventKey="instructor" title="Instructor">
          <UserTable users={users} />
        </Tab>
        <Tab eventKey="staff" title="Staff" disabled>
          <UserTable users={users} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default AccountManagement;
