import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const [isLogin,setIsLogin] = useState(true);
    useEffect(()=>{
        setIsLogin(localStorage.getItem("isLogin") || false)
    },[isLogin])   

    if(isLogin){
        return children;
    }else{
        return <Navigate to="/login" />
    }

}

export default PrivateRoute;