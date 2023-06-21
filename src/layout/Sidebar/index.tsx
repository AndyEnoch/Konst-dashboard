import React, {FC, useEffect, useState, Dispatch, SetStateAction} from 'react';
import {useLocation, useNavigate} from "react-router";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {
    AirportShuttleOutlined, ChevronLeft, ChevronRightOutlined,
    DashboardOutlined,
    DirectionsBusOutlined,
    Inventory2Outlined, LocalGasStationOutlined
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    drawerWidth: string;
    isNonMobile: boolean;
}

export interface NavItems {
    label: string;
    icon: React.ReactElement | undefined;
}

const sideMenu: NavItems[] = [
    {
        label: 'Overview',
        icon: <DashboardOutlined />,
    },
    {
        label: 'Bus Ride',
        icon: <AirportShuttleOutlined />
    },
    {
        label: 'Parcel',
        icon: <Inventory2Outlined />
    },
    {
        label: 'Bus Hire',
        icon: <DirectionsBusOutlined />
    },
    {
        label: 'Fuel coupon',
        icon: <LocalGasStationOutlined />
    }
]

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen, drawerWidth, isNonMobile }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: '',
                            backgroundColor: '',
                            boxSizing: 'border-box',
                            borderWidth: '2px',
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 1rem 3rem">
                            <FlexBetween>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        FHAMA
                                    </Typography>
                                </Box>
                                {isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {sideMenu.map(({ label, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={label} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                                            {label}
                                        </Typography>
                                    );
                                }
                                const lcText = label.replaceAll(' ', '-').toLowerCase();

                                return (
                                    <ListItem key={label}>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText ? '#f9fbe7' : 'transparent',
                                                color: active === lcText ? 'blue' : 'black',
                                                borderRadius: '6px',
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: '1rem',
                                                    color: active === lcText ? 'grey' : 'black',
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={label} />
                                            {active === lcText && (
                                                <ChevronRightOutlined
                                                    sx={{
                                                        ml: 'auto',
                                                    }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;