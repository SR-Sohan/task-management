import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [data,setData] = useState([])

    useEffect(()=> {
        let teams = JSON.parse(localStorage.getItem("teams")) || []
        setData(teams)
    },[])
    

    return (
        <div className="container mt-5">
            <h2>Team Name </h2>
            <hr />
            <div className="row g-3 mt-3">
                {
                    data && data.map( item => <div className="col-md-4 bg-success py-5">
                    <Link className="text-white text-center" to={`team/${item.teamName}`}>
                        <h3>{item.teamName}</h3>
                    </Link>
                </div>)
                }
                
            </div>
        </div>
    )
}

export default Home;