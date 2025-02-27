import React, { useEffect, useState } from 'react';
import { BillingInfo, ShippingInfo } from './types';
import { countries } from './countriesArray';
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
import Select from 'react-select';

import { produce } from 'immer';

const BillingInformation = () => {
  const baseBillingInfo = {
    shippingInfo: {
      legalName: '',
      address: '',
      city: '',
      state: { value: 0, label: '' },
      zip: '',
      country: { value: 0, label: '' },
      phone: '',
      fax: '',
      email: '',
    },
    sameAsShipping: false,
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
  const [billingInfo, setBillingInfo] = useState<BillingInfo>(baseBillingInfo);

  //get states per country selected?
  const stateOptions = [];


  const changeBillingInfo = (
    label: keyof BillingInfo,
    value: any,
    field?: keyof ShippingInfo
  ) => {
    const newInfo = produce(billingInfo, (draft) => {
      if (label === 'sameAsShipping') {
        draft[label] = value;
      } else if (label === 'shippingInfo' && field) {
        draft.shippingInfo[field] = value;
      }
    });
    setBillingInfo(newInfo);
  };

  return (
    <Box sx={{ width: 700, padding: '20px' }}>
      <Typography style={{ color: '#808080', fontSize: 28 }}>
        Billing Information!!
      </Typography>
      <FormGroup sx={{marginTop: 2}}>
        <FormControlLabel
          control={
            <Checkbox
              checked={billingInfo.sameAsShipping}
              onChange={(e) =>
                changeBillingInfo('sameAsShipping', e.target.checked)
              }
              value='yes'
              name='yes'
              color='info'
            />
          }
          label='Same as Shipping'
        />
      </FormGroup>
      {!billingInfo.sameAsShipping && (
        <Stack>
          <TextField
            label='Legal Name'
            name='name'
            value={billingInfo.shippingInfo.legalName}
            onChange={(e) =>
              changeBillingInfo('shippingInfo', e.target.value, 'legalName')
            }
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
              value={billingInfo.shippingInfo.address}
              onChange={(e) =>
                changeBillingInfo('shippingInfo', e.target.value, 'address')
              }
              fullWidth
              required
              multiline
              margin='normal'
              sx={{ backgroundColor: '#fff' }}
            />
            <TextField
              label='City'
              name='city'
              value={billingInfo.shippingInfo.city}
              onChange={(e) =>
                changeBillingInfo('shippingInfo', e.target.value, 'city')
              }
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
            <Select
              options={countries}
              placeholder='State'
              value={countries.find(
                (option) =>
                  option.value === billingInfo.shippingInfo.state.value
              )}
              onChange={(e) => changeBillingInfo('shippingInfo', e, 'state')}
              styles={customStyles}
            />
            <Select
              options={countries}
              placeholder='Country'
              value={countries.find(
                (option) =>
                  option.value === billingInfo.shippingInfo.country.value
              )}
              onChange={(e) => changeBillingInfo('shippingInfo', e, 'country')}
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
              value={billingInfo.shippingInfo.zip}
              onChange={(e) =>
                changeBillingInfo('shippingInfo', e.target.value, 'zip')
              }
              fullWidth
              required
              margin='normal'
              sx={{ backgroundColor: '#fff', marginBottom: 3 }}
            />
            <TextField
              label='Email'
              name='email'
              value={billingInfo.shippingInfo.email}
              onChange={(e) =>
                changeBillingInfo('shippingInfo', e.target.value, 'email')
              }
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
              value={billingInfo.shippingInfo.phone}
              onChange={(e) =>
                changeBillingInfo('shippingInfo', e.target.value, 'phone')
              }
              fullWidth
              required
              type='tel'
              margin='normal'
              sx={{ backgroundColor: '#fff', marginBottom: 3 }}
            />
            <TextField
              label='Fax'
              name='fax'
              value={billingInfo.shippingInfo.fax}
              onChange={(e) =>
                changeBillingInfo('shippingInfo', e.target.value, 'fax')
              }
              fullWidth
              required
              margin='normal'
              sx={{ backgroundColor: '#fff', marginBottom: 3 }}
            />
          </Stack>
        </Stack>
      )}
      <Stack
        justifyContent={'flex-end'}
        direction={'row'}
        sx={{ marginTop: 4 }}
      >
        <Button type='submit' variant='contained' color='info'>
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export default BillingInformation;
