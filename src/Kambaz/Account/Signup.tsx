import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form.Control 
        value={user.username || ""} 
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2" 
        placeholder="username" 
      />
      
      <Form.Control 
        value={user.password || ""} 
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2" 
        placeholder="password" 
        type="password"
      />
      
      <Form.Control 
        value={user.firstName || ""} 
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="mb-2" 
        placeholder="First Name" 
      />
      
      <Form.Control 
        value={user.lastName || ""} 
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="mb-2" 
        placeholder="Last Name" 
      />
      
      <Form.Control 
        value={user.email || ""} 
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="mb-2" 
        placeholder="Email" 
        type="email"
      />
      
      <Form.Control 
        value={user.dob || ""} 
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
        className="mb-2" 
        type="date"
      />
      
      <Form.Select 
        value={user.role || "USER"}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        className="mb-2"
      >
        <option value="USER">User</option>
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </Form.Select>
      
      <Button 
        onClick={signup} 
        className="wd-signup-btn btn btn-primary mb-2 w-100"
      > 
        Sign up 
      </Button>
      
      <br />
      <Link to="/Kambaz/Account/Signin" className="wd-signin-link">
        Already have an account? Sign in
      </Link>
    </div>
  );
}