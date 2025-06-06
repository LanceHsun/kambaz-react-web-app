import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Button } from "react-bootstrap";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const fetchProfile = async () => {
    try {
      if (!currentUser) {
        try {
          const serverProfile = await client.profile();
          dispatch(setCurrentUser(serverProfile));
          setProfile(serverProfile);
        } catch (error) {
          console.error("Error fetching profile from server:", error);
          navigate("/Kambaz/Account/Signin");
        }
      } else {
        setProfile(currentUser);
      }
    } catch (error) {
      console.error("Error in fetchProfile:", error);
      navigate("/Kambaz/Account/Signin");
    }
  };
  
  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };
  
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  
  useEffect(() => { 
    fetchProfile(); 
  }, [currentUser]); 
  
  if (!profile || Object.keys(profile).length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      <div>
        <FormControl 
          value={profile.username || ""} 
          id="wd-username" 
          className="mb-2"
          placeholder="Username"
          onChange={(e) => setProfile({ 
            ...profile, 
            username: e.target.value 
          })} 
        />
        
        <FormControl 
          value={profile.password || ""} 
          id="wd-password" 
          className="mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setProfile({ 
            ...profile, 
            password: e.target.value 
          })} 
        />
        
        <FormControl 
          value={profile.firstName || ""} 
          id="wd-firstname" 
          className="mb-2"
          placeholder="First Name"
          onChange={(e) => setProfile({ 
            ...profile, 
            firstName: e.target.value 
          })} 
        />
        
        <FormControl 
          value={profile.lastName || ""} 
          id="wd-lastname" 
          className="mb-2"
          placeholder="Last Name"
          onChange={(e) => setProfile({ 
            ...profile, 
            lastName: e.target.value 
          })} 
        />
        
        <FormControl 
          value={profile.dob || ""} 
          id="wd-dob" 
          className="mb-2"
          type="date"
          onChange={(e) => setProfile({ 
            ...profile, 
            dob: e.target.value 
          })} 
        />
        
        <FormControl 
          value={profile.email || ""} 
          id="wd-email" 
          className="mb-2"
          type="email"
          placeholder="Email"
          onChange={(e) => setProfile({ 
            ...profile, 
            email: e.target.value 
          })} 
        />
        
        <select 
          value={profile.role || "USER"}
          onChange={(e) => setProfile({ 
            ...profile, 
            role: e.target.value 
          })}
          className="form-control mb-2" 
          id="wd-role"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        
        <Button 
          onClick={updateProfile} 
          className="w-100 mb-2" 
          variant="primary"
        >
          Update
        </Button>
        
        <Button 
          onClick={signout} 
          className="w-100 mb-2" 
          id="wd-signout-btn"
          variant="danger"
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}