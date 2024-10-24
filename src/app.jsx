import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import MainLayout from './components/mainlayout';
import Home from './pages/home';
import Cart from './pages/cart';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
        </Route>,
    ),
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
