import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className="min-h-screen bg-customPrimary p-3 overflow-hidden">
            {<Outlet />}
        </div>
    );
}

export default Root;