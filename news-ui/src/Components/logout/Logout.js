import React from 'react'

import { Navigate } from "react-router-dom";

export default function Logout() {

   
    return (
        <>
        {localStorage.clear() }
        { window.location.reload(false)}
         <Navigate to="/login" />
         </>
    )
}
