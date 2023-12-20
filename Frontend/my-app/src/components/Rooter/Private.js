import { Navigate } from 'react-router-dom';


function PrivateRoute({ children }) {
    const isAuthentified = sessionStorage.getItem("token") && sessionStorage.getItem("token") !==null && sessionStorage.getItem("token").length > 0;
    
    if (!isAuthentified) {
        return <Navigate to="/signIn" />
    }

    return children;
}
export default PrivateRoute