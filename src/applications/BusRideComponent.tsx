import React, {useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import {rideHistory} from "../constants";
import {ChevronRightOutlined} from "@mui/icons-material";
import { ReactComponent as BusIcon } from "../assets/bus.svg";

const BusRideComponent = () => {
    const [destination, setDestination] = useState('');
    const [departure, setDeparture] = useState('');

    const handleDepartureChange = (event: SelectChangeEvent) => {
        setDeparture(event.target.value as string);
    };

    const handleDestinationChange = (event: SelectChangeEvent) => {
        setDestination(event.target.value as string);
    };


    return (
        <Box display="grid" >
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="grid" alignItems="center">
                    <Typography variant="h3" fontWeight="bold">
                        Trips
                    </Typography>
                    {rideHistory.map((trip) => (
                        <Paper sx={{ width: '300px', display: 'flex', marginTop: '50px', padding: '20px', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography variant="h4">{trip.date.day}</Typography>
                                <Typography variant="subtitle1">{trip.date.month}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2">{`${trip.from} - ${trip.to}`}</Typography>
                                <Typography variant="body2">{trip.id}</Typography>
                                <Typography variant="button">{trip.amtPaid}</Typography>
                            </Box>
                            <ChevronRightOutlined />
                        </Paper>
                    ))}
                </Box>
                <Box display="grid" alignItems="center" width="50%" >
                    <BusIcon />
                </Box>
            </Box>
            <Paper sx={{ height: "200px", padding: "20px", marginTop: "80px", cursor: "pointer" }}>
                <Box display="flex" gap="20px" justifyContent="space-between" >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Departure</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={departure}
                            label="Age"
                            onChange={handleDepartureChange}
                        >
                            <MenuItem value={10}>Accra</MenuItem>
                            <MenuItem value={20}>Tamale</MenuItem>
                            <MenuItem value={30}>Kumasi</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={destination}
                            label="Age"
                            onChange={handleDestinationChange}
                        >
                            <MenuItem value={10}>Bechem</MenuItem>
                            <MenuItem value={20}>Dormaa</MenuItem>
                            <MenuItem value={30}>Sunyani</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box display="flex" justifyContent="center" gap="50px" mt="30px">
                    <Button color="secondary" variant="outlined">Schedule for later</Button>
                    <Button color="primary" variant="outlined">Book now</Button>
                </Box>
            </Paper>

        </Box>
    );
};

export default BusRideComponent;