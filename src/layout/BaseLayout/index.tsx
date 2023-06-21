import {FC, ReactNode, useState} from 'react';
import { Outlet } from 'react-router-dom';

import { Box, useMediaQuery } from '@mui/material';
import Sidebar from "../Sidebar";
import Navbar from "../../components/Navbar";

interface BaseLayoutProps {
    children?: ReactNode;
}
const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <Box display="flex" width="100%" height="100%">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                drawerWidth="250px"
                isNonMobile={isNonMobile}
            />
            <Box flexGrow={1} p="30px" bgcolor="#F8F8F8" height="100vh">
                <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <Box>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default BaseLayout;