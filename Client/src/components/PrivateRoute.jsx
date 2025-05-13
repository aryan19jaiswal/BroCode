import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PrivateRoute = ({ children }) => {
const { isAuthenticated } = useAuth();
const navigate = useNavigate();

useEffect(() => {
if (!isAuthenticated) {
navigate("/login", {
replace: true,
state: { fromPrivateRoute: true }, // updated flag
});
}
}, [isAuthenticated, navigate]);

return isAuthenticated ? children : null;
};

export default PrivateRoute;