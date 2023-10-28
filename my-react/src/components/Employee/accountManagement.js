import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Sidebar from "./sidebarEmployee";

function AccountManagement() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <Sidebar />
      <Tabs
        defaultActiveKey="Customers"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="customer" title="Customer">
          {users.map((user) => (
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
              </tbody>
            </Table>
          ))}
        </Tab>
        <Tab eventKey="instructor" title="Instructor">
          {users.map((user) => (
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
              </tbody>
            </Table>
          ))}
        </Tab>
        <Tab eventKey="staff" title="Staff" disabled>
          {users.map((user) => (
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
              </tbody>
            </Table>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
}

export default AccountManagement;
