import React, {FC} from 'react';
import {Box, Button, Card, CardActions, CardContent, Paper, Typography, useMediaQuery} from '@mui/material';
import { ReactComponent as WalletIcon } from "../assets/wallet.svg";

const trips = [
    {
        header: 'Today',
        firstTrip: 'Accra - Circle',
        secondTrip: 'Kaneshie -  Mallam',
    },
    {
        header: 'Yesterday',
        firstTrip: 'Dome - Circle',
        secondTrip: 'Taifa - Mallam',
    }
]

const parcels = [
    {
        header: 'Today',
        first: 'Tarkwa - Kumasi',
        second: 'Accra - Takoradi',
    },
    {
        header: 'Yesterday',
        first: 'Dormaa - Konongo',
        second: 'Accra - Cape Coast',
    },
]

const Overview: FC = () => {
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            maxWidth="1800px"
            sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" }
            }}
        >
            <Box>
                <Paper sx={{
                    height: '210px',
                    alignItems: 'center',
                    padding: '20px',
                    marginBottom: "40px",
                    borderRadius: "10px",
                }}>
                    <Box display="flex" justifyContent="space-between" >
                        <Box alignItems="center">
                            <Typography variant="subtitle1" fontWeight="bold">
                                Recent Trips
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                {trips.map((trip) => (
                                    <Box pl="40px">
                                        <Typography mb="20px" variant="subtitle2" fontWeight="bold" pt="20px">
                                            {trip.header}
                                        </Typography>
                                        <Typography>
                                            {trip.firstTrip}
                                        </Typography>
                                        <Typography>
                                            {trip.secondTrip}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                <Paper sx={{
                    height: '210px',
                    alignItems: 'center',
                    padding: '20px',
                    marginBottom: "20px",
                    borderRadius: "10px",
                }}>
                    <Box display="flex" justifyContent="space-between" >
                        <Box alignItems="center">
                            <Typography variant="subtitle1" fontWeight="bold">
                                Recent Parcels
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                {parcels.map((trip) => (
                                    <Box pl="40px">
                                        <Typography mb="20px" variant="subtitle2" fontWeight="bold" pt="20px">
                                            {trip.header}
                                        </Typography>
                                        <Typography>
                                            {trip.first}
                                        </Typography>
                                        <Typography>
                                            {trip.second}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Paper
            sx={{
                height: '500px',
                alignItems: 'center',
                padding: '20px',
                borderRadius: "10px",
            }}>
                <Box display="flex" padding="20px" borderRadius="8px" border="1px solid #f9fbe7">
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                            My wallet
                        </Typography>
                        <Typography maxWidth="400px" variant="body2">
                            Deposit money into Wallet and get amazing cashbacks and Vouchers
                        </Typography>
                        <Typography mt="20px" variant="subtitle2">
                            Available Balance
                        </Typography>
                        <Typography variant="body2">
                            GHS 700.00
                        </Typography>
                    </Box>
                    <WalletIcon style={{ height: "100px", width: "100px"}} />
                </Box>
                    <Card sx={{ minWidth: 275, marginTop: "70px", alignItems: "center", justifyContent: "center" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Hello!
                            </Typography>
                            <Typography variant="h5" component="div">
                                Redeem your coupons
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                to save some money
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
            </Paper>
        </Box>
    );
};

Overview.propTypes = {

};

export default Overview;