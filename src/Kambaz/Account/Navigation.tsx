import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  
  const isActive = (path: string) => currentPath === path;
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        to={`/Kambaz/Account/Signin`} 
        className={`list-group-item border border-0 ${isActive('Signin') ? 'active' : 'text-danger'}`}
      >
        Signin
      </Link><br />
      
      <Link 
        to={`/Kambaz/Account/Signup`} 
        className={`list-group-item border border-0 ${isActive('Signup') ? 'active' : 'text-danger'}`}
      >
        Signup
      </Link><br />
      
      <Link 
        to={`/Kambaz/Account/Profile`} 
        className={`list-group-item border border-0 ${isActive('Profile') ? 'active' : 'text-danger'}`}
      >
        Profile
      </Link><br />
    </div>
  );
}