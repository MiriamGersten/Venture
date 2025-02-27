import React, { useEffect, useState } from 'react';
import { BusinessInfo, Facility } from './types';
import { countries } from './countriesArray';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Select from 'react-select';
import AddIcon from '@mui/icons-material/Add';
import FacilityInfo from './FacilityInfo';
import FacilitiesChart from './FacilitiesChart';
import { produce } from 'immer';
import AddressAutocomplete from './AddressAutocomplete';

const BusinessInformation = () => {
  const baseBusinessInfo = {
    facilityName: '',
    address: '',
    city: '',
    state: { value: 0, label: '' },
    zip: '',
    country: { value: 0, label: '' },
    phone: '',
    businessType: { value: 0, label: '' },
    facilities: [],
  };
  const baseFacilityInfo = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: { value: 0, label: '' },
    zip: '',
    country: { value: 0, label: '' },
    contactPhone: '',
    contactEmail: '',
    contactType: { value: 0, label: '' },
    billingSameAsCorporate: false,
  };
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
  const [businessInfo, setBusinessInfo] =
    useState<BusinessInfo>(baseBusinessInfo);
  const [facilityInfo, setFacilityInfo] = useState(baseFacilityInfo);
  const [facilityInfoForm, setFacilityInfoForm] = useState(false);
  const [addressData, setAddressData] = useState({
    street: "",
    streetNumber: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const typeOptions = [
    { value: 1, label: 'Medical Center' },
    { value: 2, label: 'Hospital' },
    { value: 3, label: 'Urgent Care' },
    { value: 4, label: 'Medical School' },
    { value: 5, label: 'Reseller' },
    { value: 6, label: 'University' },
    { value: 7, label: 'Nursing Home' },
    { value: 8, label: 'Home Care Ageny' },
    { value: 9, label: 'Ambulance' },
    { value: 10, label: 'Other' },
  ];

  const changeBusinessInfo = (label: keyof BusinessInfo, value: any) => {
    const newInfo = produce(businessInfo, (draft) => {
      if (label === 'isCorporate' && (value === 'true' || value === 'false')) {
        draft[label] = value === 'true';
      } else {
        (draft[label] as any) = value;
      }
    });
    setBusinessInfo(newInfo);
  };

  const changeFacilityInfo = (label: keyof Facility, value: any) => {
    const newInfo = produce(facilityInfo, (draft) => {
      (draft[label] as any) = value;
    });
    setFacilityInfo(newInfo);
  };
  const saveFacility = () => {
    const newBasicInfo = produce(businessInfo, (draft) => {
      draft.facilities.push(facilityInfo);
    });

    setBusinessInfo(newBasicInfo);
    setFacilityInfoForm(false);
    setFacilityInfo(baseFacilityInfo);
    setFacilityInfoForm(false);
  };
  const addFacility = () => {
    setFacilityInfoForm(true);
    setFacilityInfo(baseFacilityInfo);
  };

  return (
    <Box sx={{ width: 700, padding: '20px' }}>
      <Typography style={{ color: '#808080', fontSize: 28 }}>
        Business Info
      </Typography>
      <Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='Facility Name'
            name='facilityName'
            value={businessInfo.facilityName}
            onChange={(e) => changeBusinessInfo('facilityName', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
        </Stack>
        {/* <TextField
          label='Address'
          name='address'
          value={businessInfo.address}
          onChange={(e) => changeBusinessInfo('address', e.target.value)}
          fullWidth
          required
          multiline
          margin='normal'
          sx={{ backgroundColor: '#fff' }}
        /> */}
         <AddressAutocomplete onAddressSelect={setAddressData} />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={3}
          marginTop={2}
        >
          <TextField
            label='City'
            name='city'
            value={addressData.city}
            // onChange={(e) => changeBusinessInfo('city', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
           <TextField
            label='State'
            name='state'
            value={addressData.state}
            // onChange={(e) => changeBusinessInfo('city', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          {/* <Select
            options={countries}
            placeholder='State'
            value={countries.find(
              (option) => option.value === businessInfo.state.value
            )}
            onChange={(e) => changeBusinessInfo('state', e)}
            styles={customStyles}
          /> */}
          <TextField
            label='Zip Code'
            name='zip'
            value={addressData.zip}
            //onChange={(e) => changeBusinessInfo('zip', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
        </Stack>
        <div style={{ marginTop: 16 }}>
        <TextField
            label='Country'
            name='country'
            value={addressData.country}
            // onChange={(e) => changeBusinessInfo('city', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          {/* <Select
            options={countries}
            placeholder='Country'
            value={countries.find(
              (option) => option.value === businessInfo.country.value
            )}
            onChange={(e) => changeBusinessInfo('country', e)}
            styles={customStyles}
          /> */}
        </div>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='Phone'
            name='phone'
            value={businessInfo.phone}
            onChange={(e) => changeBusinessInfo('phone', e.target.value)}
            fullWidth
            type='tel'
            sx={{ backgroundColor: '#fff', maxHeight: 54 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Select
              options={typeOptions}
              placeholder='Business Type'
              value={
                typeOptions.find(
                  (option) => option.value === businessInfo.businessType.value
                ) || null
              }
              onChange={(e) => changeBusinessInfo('businessType', e)}
              styles={customStyles}
            />
            {businessInfo.businessType.label === 'Other' && (
              <TextField
                label='Other Business Type'
                name='otherBusinessType'
                value={businessInfo.otherBusinessType}
                onChange={(e) =>
                  changeBusinessInfo('otherBusinessType', e.target.value)
                }
                fullWidth
                margin='normal'
                sx={{ backgroundColor: '#fff', marginBottom: 3 }}
              />
            )}
          </div>
        </Stack>
        <FormControl style={{marginTop: 32}}>
          <FormLabel>Are you corporate?</FormLabel>
          <RadioGroup
            row
            name='isCorporate'
            value={businessInfo.isCorporate}
            onChange={(e) => changeBusinessInfo('isCorporate', e.target.value === "true")}
          >
            <FormControlLabel value='true' control={<Radio />} label='Yes' />
            <FormControlLabel value='false' control={<Radio />} label='No' />
          </RadioGroup>
        </FormControl>
        {businessInfo.isCorporate && (
          <Stack justifyContent={'flex-end'} direction={'row'} marginTop={3}>
            <Button
              variant='contained'
              color='info'
              onClick={() => {
                addFacility();
                setFacilityInfoForm(true);
              }}
            >
              <AddIcon sx={{ marginRight: 1 }} />
              Add Facility
            </Button>
          </Stack>
        )}
        <FacilityInfo
          showForm={facilityInfoForm}
          onClose={() => {
            setFacilityInfoForm(false);
          }}
          changeFacilityInfo={changeFacilityInfo}
          facility={facilityInfo}
          saveFacility={saveFacility}
        />
        {facilityInfoForm && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 5,
              transition: 'opacity 0.3s ease',
            }}
            onClick={() => setFacilityInfoForm(false)}
          />
        )}
        {businessInfo.facilities.length > 0 && (
          <>
            businessInfo
            <Typography
              variant='h5'
              component='h2'
              sx={{ color: '#808080', marginTop: 10 }}
            >
              Facilities
            </Typography>
            <FacilitiesChart facilities={businessInfo.facilities} />
          </>
        )}
        {/* <Stack
          justifyContent={'flex-end'}
          direction={'row'}
          sx={{ marginTop: 12 }}
        >
          <Button
            type='submit'
            variant='contained'
            color='info'
            onClick={() => {}}
          >
            Save and Continue
          </Button>
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default BusinessInformation;
