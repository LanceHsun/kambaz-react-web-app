import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

interface Credentials {
    username?: string;
    password?: string;
}

export default function Signin() {
  const [credentials, setCredentials] = useState<Credentials>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const signin = async (): Promise<void> => {
    try {
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Account/Profile");
    } catch (error) {
      console.error("Sign in failed:", error);
      // Optionally, you can add error handling here
      // For example, show an error message to the user
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control 
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} 
      />
      <Form.Control 
        id="wd-password"
        placeholder="password" 
        type="password"
        className="mb-2"
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Button 
        onClick={signin} 
        id="wd-signin-btn" 
        className="w-100"
      > 
        Sign in 
      </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}