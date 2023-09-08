import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link" to="/">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Team Summary
                    </Link>
                    <div className="sb-sidenav-menu-heading">Taks Team</div>
                    <Link to="/team" className="nav-link">
                        <div className="sb-nav-link-icon"><i class="fa-solid fa-people-group"></i></div>
                        iBos                       
                    </Link>

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