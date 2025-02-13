import React, { useEffect, useState } from 'react';
import { BasicInfo, Facility } from './types';
import { countries } from './countriesArray';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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

const BasicInformation = () => {
  const baseBasicInfo = {
    firstName: '',
    lastName: '',
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
  const [basicInfo, setBasicInfo] = useState<BasicInfo>(baseBasicInfo);
  const [facilityInfo, setFacilityInfo] = useState(baseFacilityInfo);
  const [facilityInfoForm, setFacilityInfoForm] = useState(false);

  const typeOptions = [
    { value: 1, label: 'Nursing Home' },
    { value: 2, label: 'Hospital' },
    { value: 3, label: 'Rehab' },
  ];

  const changeBasicInfo = (label: keyof BasicInfo, value: any) => {
    const newInfo = produce(basicInfo, (draft) => {
      if (label === 'isCorporate' && (value === 'true' || value === 'false')) {
        draft[label] = value === 'true';
      } else {
        (draft[label] as any) = value;
      }
    });
    setBasicInfo(newInfo);
  };

  const changeFacilityInfo = (label: keyof Facility, value: any) => {
    const newInfo = produce(facilityInfo, (draft) => {
      (draft[label] as any) = value;
    });
    setFacilityInfo(newInfo);
  };
  const saveFacility = () => {
    const newBasicInfo = produce(basicInfo, (draft) => {
      draft.facilities.push(facilityInfo);
    });

    setBasicInfo(newBasicInfo);
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
        Basic Info
      </Typography>
      <Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          spacing={2}
          marginTop={2}
        >
          <TextField
            label='First Name'
            name='firstName'
            value={basicInfo.firstName}
            onChange={(e) => changeBasicInfo('firstName', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
           <TextField
            label='Last Name'
            name='lastName'
            value={basicInfo.lastName}
            onChange={(e) => changeBasicInfo('lastName', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff' }}
          />
         
        </Stack>
        <TextField
            label='Address'
            name='address'
            value={basicInfo.address}
            onChange={(e) => changeBasicInfo('address', e.target.value)}
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
            value={basicInfo.city}
            onChange={(e) => changeBasicInfo('city', e.target.value)}
            fullWidth
            required
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          <Select
            options={countries}
            placeholder='State'
            value={countries.find(
              (option) => option.value === basicInfo.state.value
            )}
            onChange={(e) => changeBasicInfo('state', e)}
            styles={customStyles}
          />
           <TextField
            label='Zip Code'
            name='zip'
            value={basicInfo.zip}
            onChange={(e) => changeBasicInfo('zip', e.target.value)}
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
              (option) => option.value === basicInfo.country.value
            )}
            onChange={(e) => changeBasicInfo('country', e)}
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
            label='Phone'
            name='phone'
            value={basicInfo.phone}
            onChange={(e) => changeBasicInfo('phone', e.target.value)}
            fullWidth
            required
            type='tel'
            margin='normal'
            sx={{ backgroundColor: '#fff', marginBottom: 3 }}
          />
          <div>
            <Select
              options={typeOptions}
              placeholder='Business Type'
              value={
                typeOptions.find(
                  (option) => option.value === basicInfo.businessType.value
                ) || null
              }
              onChange={(e) => changeBasicInfo('businessType', e)}
              styles={customStyles}
            />
          </div>
        </Stack>
        {basicInfo.businessType.label === 'Nursing Home' && (
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
          //   <FormControl component='fieldset'>
          //     <FormLabel component='legend' sx={{ color: '#808080' }}>
          //       Select an option
          //     </FormLabel>
          //     <RadioGroup
          //       name='isCorporate'
          //       value={basicInfo.isCorporate ? 'true' : 'false'}
          //       onChange={(e) => changeBasicInfo('isCorporate', e.target.value)}
          //     >
          //       <FormControlLabel
          //         value='true'
          //         control={<Radio />}
          //         label='Corporate'
          //         sx={{
          //           color: '#808080',
          //         }}
          //       />
          //       <FormControlLabel
          //         value='false'
          //         control={<Radio />}
          //         label='Facility'
          //         sx={{
          //           color: '#808080',
          //         }}
          //       />
          //     </RadioGroup>
          //   </FormControl>
        )}
        {/* {basicInfo.isCorporate && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
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
          </Box>
        )} */}
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
              width:'50%',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 5,
              transition: 'opacity 0.3s ease',
            }}
            onClick={() => setFacilityInfoForm(false)}
          />
        )}
        {basicInfo.facilities.length > 0 && (
          <>
            <Typography
              variant='h5'
              component='h2'
              sx={{ color: '#808080', marginTop: 10 }}
            >
              Facilities
            </Typography>
            <FacilitiesChart facilities={basicInfo.facilities} />
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

export default BasicInformation;
