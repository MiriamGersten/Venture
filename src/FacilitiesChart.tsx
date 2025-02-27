import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Facility } from './types';

interface Props {
    facilities: Facility[];
}
const FacilitiesChart = (props: Props) => {

  return (
    <TableContainer component={Paper} sx={{ width: '1200px', marginTop: 2 }}>
    <Table aria-label="facilities table" sx={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold',padding: '12px' }}>Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold',padding: '12px' }}>Address</TableCell>
          <TableCell sx={{ fontWeight: 'bold', padding: '12px' }}>Contact Type</TableCell>
          <TableCell sx={{ fontWeight: 'bold', padding: '12px' }}>Contact Phone</TableCell>
          <TableCell sx={{ fontWeight: 'bold', padding: '12px' }}>Contact Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.facilities?.map((facility, index) => (
          <TableRow key={index}>
            <TableCell>{facility.firstName} {facility.lastName}</TableCell>
            <TableCell>{facility.address} {facility.city} {facility.state.label} {facility.country.label}</TableCell>
            <TableCell>{facility.contactType.label}</TableCell>
            <TableCell>{facility.contactPhone}</TableCell>
            <TableCell>{facility.contactEmail}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default FacilitiesChart;
