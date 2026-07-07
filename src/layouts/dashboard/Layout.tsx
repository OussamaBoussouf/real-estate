import { Outlet } from "react-router";
import Sidebar from "./Sidebar";



function Layout() {
    return (
        <div className="dashboard">
            <Sidebar/>
            <main className="dashboard__content">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;