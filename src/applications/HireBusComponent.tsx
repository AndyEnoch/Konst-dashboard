import React from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

function createData(
    busType: string,
    vehicleNumber: string,
    destination: string,
    fee: number,
    date: string,
) {
    return { busType, vehicleNumber, destination, fee, date };
}

const rows = [
    createData('Youtong', 'GH - 12 20', "Tarkwa", 2400, '12 Jun, 2020'),
    createData('Macopolo', 'GA - 23 20', 'Lome', 3744, '1 Mar, 2021'),
    createData('Benz', 'ER - 1118 22', 'Mampong', 2409, '3 May, 2021'),
    createData('Nissan', 'AS - 9807 12', 'Ejura', 6734, '10 Jul, 2022'),
    createData('Toyota', 'GW - 3456 20', 'Konongo', 4921, '23 Aug, 2022'),
];

const HireBusComponent = () => {
    return (
        <Box mt="100px">
            <Typography  mb="50px" variant="h3" fontWeight="bold">Bus hires</Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bus number</TableCell>
                            <TableCell align="right">Bus type</TableCell>
                            <TableCell align="right">Destination&nbsp;(g)</TableCell>
                            <TableCell align="right">Fee&nbsp;(g)</TableCell>
                            <TableCell align="right">Date&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.vehicleNumber}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.vehicleNumber}
                                </TableCell>
                                <TableCell align="right">{row.busType}</TableCell>
                                <TableCell align="right">{row.destination}</TableCell>
                                <TableCell align="right">{row.fee}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

HireBusComponent.propTypes = {

};

export default HireBusComponent;