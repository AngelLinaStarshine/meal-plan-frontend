import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Logout = () => {

    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div>
        <button onClick={() => logout()}>Log out</button>
        </div>
    ))
}

export default Logout;