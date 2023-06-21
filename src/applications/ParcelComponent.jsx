import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box, Typography} from "@mui/material";
import {ParcelColumns, ParcelRows} from "../constants";

const ParcelComponent = () => {
    return (
        <Box mt="100px">
            <Typography mb="50px" variant="h3" fontWeight="bold">
                Parcels
            </Typography>
            <DataGrid
                columns={ParcelColumns}
                rows={ParcelRows}
                getRowId={(row) => row.id}
            />
        </Box>
    );
};

ParcelComponent.propTypes = {

};

export default ParcelComponent;