import { Outlet } from "react-router";
import DashboardSidebar from "./DashboardSidebar";


function DashboardLayout() {
    return (
        <div className="dashboard">
            <DashboardSidebar/>
            <main className="dashboard__content">
                <Outlet/>
            </main>
        </div>
    );
}

export default DashboardLayout;