import { Outlet } from "react-router-dom";
import "../assets/styles.css"
import "../assets/scripts"
import HeaderNav from "../components/HeaderNav";
import SideNav from "../components/SideNav";


const DashLayout = () => {
    return (
        <>
       
      <HeaderNav/>

        <div id="layoutSidenav">
            <SideNav/>
            <div id="layoutSidenav_content">
                <main>
                    <Outlet/>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </>

    );
}

export default DashLayout;