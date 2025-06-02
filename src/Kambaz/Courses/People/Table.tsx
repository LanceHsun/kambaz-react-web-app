import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import PeopleDetails from "./Details";
import * as courseClient from "../client";

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[], fetchUsers?: () => void }) {
  const { cid } = useParams();
  const [courseUsers, setCourseUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    if (cid) {
      const users = await courseClient.findUsersForCourse(cid);
      setCourseUsers(users);
    }
  };

  useEffect(() => {
    if (cid && users.length === 0) {
      fetchUsersForCourse();
    }
  }, [cid]);

  const displayUsers = users.length > 0 ? users : courseUsers;

  return (
    <div id="wd-people-table">
      <PeopleDetails fetchUsers={fetchUsers || fetchUsersForCourse} />
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}