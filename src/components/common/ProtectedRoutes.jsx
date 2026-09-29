import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {

    const { user } = useContext(AuthContext);

    // User exists or not
    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    // User exists but wrong role
    if (role && user.role !== role) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};

export default ProtectedRoute;