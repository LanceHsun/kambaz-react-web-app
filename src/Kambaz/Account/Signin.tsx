import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const signin = async () => {
    try {
      setError("");
      setLoading(true);
      console.log("Attempting to sign in with:", credentials);
      
      const user = await client.signin(credentials);
      console.log("Sign in successful:", user);
      
      dispatch(setCurrentUser(user));
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      navigate("/Kambaz/Account/Profile");  
    } catch (error: any) {
      console.error("Sign in failed:", error);
      setError(error.response?.data?.message || "Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signin();
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Control 
          id="wd-username"
          placeholder="username"
          className="mb-2"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} 
          required
        />
        <Form.Control 
          id="wd-password"
          placeholder="password" 
          type="password"
          className="mb-2"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <Button 
          type="submit"
          id="wd-signin-btn" 
          className="w-100"
          disabled={loading}
        > 
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </Form>
      
      <div className="mt-3">
        <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}