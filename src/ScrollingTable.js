import * as React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Tooltip } from '@mui/material';

export default function ScrollingTable(props) {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Level</TableCell>
                            <TableCell align="center">Health
                                <Tooltip title="Use the Magnifying Glass to see the wild health">
                                    <IconButton size="small "><HelpIcon fontSize="small" /></IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="center">Damage vs. Tame
                                <Tooltip title="When 'Floating Damage Text' is enabled, let the creature bite one of your tames. The damage shown can be looked up to show to the wild melee stat." >
                                    <IconButton size="small" ><HelpIcon fontSize="small" /></IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="center">Damage vs. Survivor
                                <Tooltip title="When 'Floating Damage Text' is enabled, let the creature bite you. The damage shown can be looked up to show to the wild melee stat." >
                                    <IconButton size="small" ><HelpIcon fontSize="small" /></IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <TableRow
                                key={row[0]}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row[0]}
                                </TableCell>
                                {row.slice(1).map((c, i) => <TableCell key={i} align="center">{c}</TableCell>)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
