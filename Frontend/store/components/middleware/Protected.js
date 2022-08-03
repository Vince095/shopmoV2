import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { notification } from "antd";

const Protected = (WrappedComponent) => {
    
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const userIsAuthenticated = useSelector(state => state.auth.isLoggedIn) 
    
      //const accessToken = localStorage.getItem("accessToken");

      // If there is no access token we redirect to "/" page.
      if (Boolean(userIsAuthenticated) === false) {

        notification.open({
            message: 'opps, looks like your not signed in',
            description: 'Please login first to access this resource' ,
            duration: 500,})
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default Protected;