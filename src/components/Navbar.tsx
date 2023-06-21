import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import FlexBetween from "./FlexBetween";
import {ArrowDropDownOutlined, Menu as MenuIcon, SettingsOutlined} from "@mui/icons-material";

interface NavBarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavBarProps> = ({ isSidebarOpen, setIsSidebarOpen, }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar
            sx={{
                position: 'static',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: 'none',
                marginBottom: '70px',
                maxWidth: "1800px",
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <FlexBetween>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween>
                        <h3 style={{ color: 'black' }}>Dashboard</h3>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween gap="1.5rem">
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: '25px' }} />
                    </IconButton>
                    <FlexBetween>
                        <Button
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textTransform: 'none',
                                gap: '1rem',
                            }}
                        >
                            <Avatar
                                sx={{
                                    height: "40px",
                                    width: "40px",
                                    borderRadius: "50%",
                                }}
                            />
                            <Box textAlign="left">
                                <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: "" }}>
                                    {`Andy Aladi`}
                                </Typography>
                                <Typography fontSize="0.75rem" sx={{ color: "" }}>
                                    {`Driver`}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{
                                    color: "",
                                    fontSize: '25px',
                                }}
                            />
                        </Button>
                        <Menu
                            open={isOpen}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <MenuItem onClick={handleClose}>Log out</MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;