import React, { useEffect, useState } from 'react';
import { ShippingInfo } from './types';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Select from 'react-select';

import { produce } from 'immer';

const ShippingInformation = () => {
  const baseShippingInfo = {
    legalName: '',
    address: '',
    city: '',
    state: { value: 0, label: '' },
    zip: '',
    country: { value: 0, label: '' },
    phone: '',
    fax: '',
    email: '',
  };
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: 54,
      minHeight: 54,
      width: 342,
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 500,
    }),
  };
  const [shippingInfo, setShippingInfo] =
    useState<ShippingInfo>(baseShippingInfo);

  //get states perf country selected?
  const stateOptions = [];

  const countries = [
    { value: 1, label: 'United States' },
    { value: 2, label: 'Canada' },
    { value: 3, label: 'Mexico' },
    { value: 4, label: 'United Kingdom' },
    { value: 5, label: 'Australia' },
    { value: 6, label: 'Germany' },
    { value: 7, label: 'France' },
    { value: 8, label: 'Italy' },
    { value: 9, label: 'Spain' },
    { value: 10, label: 'India' },
    { value: 11, label: 'China' },
    { value: 12, label: 'Japan' },
    { value: 13, label: 'South Korea' },
    { value: 14, label: 'Brazil' },
    { value: 15, label: 'Argentina' },
    { value: 16, label: 'Russia' },
    { value: 17, label: 'South Africa' },
    { value: 18, label: 'Nigeria' },
    { value: 19, label: 'Egypt' },
    { value: 20, label: 'Saudi Arabia' },
  ];

  const changeShippingInfo = (label: keyof ShippingInfo, value: any) => {
    const newInfo = produce(shippingInfo, (draft) => {
      (draft[label] as any) = value;
    });
    setShippingInfo(newInfo);
  };

  return (
    <Box sx={{ width: 700, padding: '20px' }}>
      <Typography style={{ color: '#808080', fontSize: 28 }}>
        Shipping Information
      </Typography>
      <Stack>
        <TextField
          label='Legal Name'
          name='name'
          value={shippingInfo.legalName}
          onChange={(e) => changeShippingInfo('legalName', e.target.value)}
          fullWidth
          required
          margin='normal'
          sx={{ backgroundColor: '#fff' }}
        />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='Address'
            name='address'
            value={shippingInfo.address}
            onChange={(e) => changeShippingInfo('address', e.target.value)}
            fullWidth
            required
            multiline
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
          <TextField
            label='City'
            name='city'
            value={shippingInfo.city}
            onChange={(e) => changeShippingInfo('city', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
          sx={{ zIndex: 500 }}
        >
          <Select
            options={countries}
            placeholder='State'
            value={countries.find(
              (option) => option.value === shippingInfo.state.value
            )}
            onChange={(e) => changeShippingInfo('state', e)}
            styles={customStyles}
          />
          <Select
            options={countries}
            placeholder='Country'
            value={countries.find(
              (option) => option.value === shippingInfo.country.value
            )}
            onChange={(e) => changeShippingInfo('country', e)}
            styles={customStyles}
          />
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='Zip Code'
            name='zip'
            value={shippingInfo.zip}
            onChange={(e) => changeShippingInfo('zip', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          <TextField
            label='Email'
            name='email'
            value={shippingInfo.email}
            onChange={(e) => changeShippingInfo('email', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='Phone'
            name='phone'
            value={shippingInfo.phone}
            onChange={(e) => changeShippingInfo('phone', e.target.value)}
            fullWidth
            required
            type='tel'
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          <TextField
            label='Fax'
            name='fax'
            value={shippingInfo.fax}
            onChange={(e) => changeShippingInfo('fax', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
        </Stack>
        <Stack
          justifyContent={'flex-end'}
          direction={'row'}
          sx={{ marginTop: 4 }}
        >
          <Button type='submit' variant='contained' color='info'>
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShippingInformation;
