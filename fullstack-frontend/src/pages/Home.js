import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
const {id}=useParams();
  useEffect(() => {
    //after opening page this data is loaded already
    loadUsers();
  }, []); //if not not give empty array it run infinite loop
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
    alert(`The user ${id} has been deleted`)
  }
  return (
    <div className="conataienr">
      <div className="py-4 mx-4">
        <table className="table border shadow mx-8">
          <thead>
            <tr className="tr border-dark ">
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <Link className="btn btn-primary m-2" to={`/viewuser/${user.id}`}>View</Link>
                <Link className="btn btn-primary m-2" to={`/edituser/${user.id}`}>Edit</Link>
                <button className="btn btn-danger m-2 " onClick={()=>{
                  deleteUser(user.id)
                }}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
