import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  const fetchProfile = async () => {
    try {
      console.log("Fetching user profile...");
      const currentUser = await client.profile();
      console.log("Profile fetched:", currentUser);
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.log("Profile fetch error:", err.response?.status);
      if (err.response?.status !== 401) {
        console.error("Session error:", err);
      }
      dispatch(setCurrentUser(null));
    } finally {
      setPending(false);
    }
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  if (pending) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  return children;
}