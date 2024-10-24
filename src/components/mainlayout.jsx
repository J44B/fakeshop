import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

function MainLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default MainLayout;
