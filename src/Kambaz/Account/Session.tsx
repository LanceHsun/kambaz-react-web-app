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
      
      if (currentUser) {
        dispatch(setCurrentUser(currentUser));
      } else {

        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
          console.log("Restoring user from localStorage");
          dispatch(setCurrentUser(JSON.parse(savedUser)));
        } else {
          dispatch(setCurrentUser(null));
        }
      }
    } catch (err: any) {
      console.log("Profile fetch error:", err.response?.status);
      
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        console.log("Restoring user from localStorage after fetch error");
        dispatch(setCurrentUser(JSON.parse(savedUser)));
      } else {
        dispatch(setCurrentUser(null));
      }
      
      if (err.response?.status !== 401) {
        console.error("Session error:", err);
      }
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