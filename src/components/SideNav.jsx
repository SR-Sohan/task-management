import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

    const [teams,setTeams] = useState([]);



    useEffect(()=> {
        const loginUser = JSON.parse(localStorage.getItem("isLogin"));
        const teamsList = JSON.parse(localStorage.getItem("teams"));

        let filterTeam = teamsList.filter( team => {
            return team.owner == loginUser.email || team.members.filter( item => item.email === loginUser.email)
        })

        setTeams(filterTeam)

    },[])

    

    return (
        <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link" to="/">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Team Summary
                    </Link>
                    <div className="sb-sidenav-menu-heading">Task Team</div>

                    {
                        teams && teams.map( team =>   <Link to={`team/${team.teamName}`} className="nav-link">
                        <div className="sb-nav-link-icon"><i class="fa-solid fa-people-group"></i></div>
                        {team.teamName}                      
                    </Link>)
                    }
                  

                    <Link to="/create-team" className="nav-link ">
                        <div className="sb-nav-link-icon"><i class="fa-solid fa-plus"></i></div>
                        Create Team                     
                    </Link>
                 
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Task Management
            </div>
        </nav>
    </div>
    )
}

export default SideNav;