import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Select from 'react-select';
import { Facility } from './types';
import { countries } from './countriesArray';

interface Props {
  showForm: boolean;
  onClose: () => void;
  changeFacilityInfo: (label: keyof Facility, value: any) => void;
  facility: Facility;
  saveFacility: () => void;
}

const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: 54,
      minHeight: 54,
      minWidth: 250,
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 500,
    }),
  };

const typeOptions = [
  { value: 1, label: 'Secretary' },
  { value: 2, label: 'Manager' },
  { value: 3, label: 'Owner' },
];

const FacilityInfo = (props: Props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100vh',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        transition: 'transform 0.3s ease',
        transform: props.showForm ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 10,
        width: '50%',
        paddingLeft: 8,
      }}
    >
      <Typography style={{ color: '#808080', fontSize: 28 }}>
        Add Facility Form
      </Typography>
      <Stack width={'700px'}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='First Name'
            name='firstName'
            value={props.facility.firstName}
            onChange={(e) => props.changeFacilityInfo('firstName', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
           <TextField
            label='Last Name'
            name='lastName'
            value={props.facility.lastName}
            onChange={(e) => props.changeFacilityInfo('lastName', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
         
        </Stack>
        <TextField
            label='Address'
            name='address'
            value={props.facility.address}
            onChange={(e) =>
              props.changeFacilityInfo('address', e.target.value)
            }
            fullWidth
            required
            multiline
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={3}
          marginTop={2}
        >
          <TextField
            label='City'
            name='city'
            value={props.facility.city}
            onChange={(e) => props.changeFacilityInfo('city', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          <Select
            options={countries}
            placeholder='State'
            value={countries.find(
              (option) => option.value === props.facility.state.value || null
            )}
            onChange={(e) => props.changeFacilityInfo('state', e)}
            styles={customStyles}
          />
            <TextField
            label='Zip Code'
            name='zip'
            value={props.facility.zip}
            onChange={(e) => props.changeFacilityInfo('zip', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
        </Stack>
        <div style={{ marginTop: 16 }}>
          <Select
            options={countries}
            placeholder='Country'
            value={countries.find(
              (option) => option.value === props.facility.country.value || null
            )}
            onChange={(e) => props.changeFacilityInfo('country', e)}
            styles={customStyles}
          />
        
        </div>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='Contact Phone'
            name='contactPhone'
            value={props.facility.contactPhone}
            onChange={(e) =>
              props.changeFacilityInfo('contactPhone', e.target.value)
            }
            fullWidth
            required
            type='tel'
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          <TextField
            label='Contact Email'
            name='contactEmail'
            value={props.facility.contactEmail}
            onChange={(e) =>
              props.changeFacilityInfo('contactEmail', e.target.value)
            }
            fullWidth
            required
            type='tel'
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
        </Stack>
        <div style={{ marginTop: 16 }}>
          <Select
            options={typeOptions}
            placeholder='Contact Type'
            value={
              typeOptions.find(
                (option) => option.value === props.facility.contactType.value
              ) || null
            }
            onChange={(e) => props.changeFacilityInfo('contactType', e)}
            styles={customStyles}
          />
        </div>
        <Typography variant='body1' marginTop={3}>
          Billing same as corporate?
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.facility.billingSameAsCorporate}
                onChange={
                  (e) =>
                    props.changeFacilityInfo(
                      'billingSameAsCorporate',
                      e.target.checked
                    ) 
                }
                value='yes'
                name='yes'
                color='info'
              />
            }
            label='Yes'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!props.facility.billingSameAsCorporate}
                onChange={
                  (e) =>
                    props.changeFacilityInfo(
                      'billingSameAsCorporate',
                      !e.target.checked
                    ) 
                }
                value='no'
                name='no'
                color='info'
              />
            }
            label='No'
          />
        </FormGroup>
        <Stack
          justifyContent={'flex-end'}
          direction={'row'}
          spacing={2}
          sx={{ marginTop: 4 }}
        >
          <Button
            type='submit'
            variant='contained'
            color='info'
            onClick={props.saveFacility}
          >
            Save and Continue
          </Button>
          <Button variant='contained' color='inherit' onClick={props.onClose}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FacilityInfo;
