import React from 'react';
import {couponHeaders, couponRows} from "../constants";
import {DataGrid} from "@mui/x-data-grid";
import {Box, Typography} from "@mui/material";

const FuelCouponComponent = () => {
    return (
        <Box  mt="100px">
            <Typography mb="50px" variant="h3" fontWeight="bold">
                Fuel coupons
            </Typography>
            <DataGrid
                columns={couponHeaders}
                rows={couponRows}
                getRowId={(row) => row.code}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    );
};

FuelCouponComponent.propTypes = {

};

export default FuelCouponComponent;