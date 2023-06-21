import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import BaseLayout from "./layout/BaseLayout";
import Overview from "./applications/Overview";
import BusRideComponent from "./applications/BusRideComponent";
import ParcelComponent from "./applications/ParcelComponent";
import FuelCouponComponent from "./applications/FuelCouponComponent";
import HireBusComponent from "./applications/HireBusComponent";

const routes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/overview" replace />
            },
            {
                path: 'overview',
                element: <Overview />
            },
            {
                path: 'bus-ride',
                element: <BusRideComponent />
            },
            {
                path: 'parcel',
                element: <ParcelComponent />
            },
            {
                path: 'bus-hire',
                element: <HireBusComponent />
            },
            {
                path: 'fuel-coupon',
                element: <FuelCouponComponent />
            },
        ]
    }
]

export default routes;