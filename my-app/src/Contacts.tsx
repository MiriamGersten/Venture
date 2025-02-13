import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
  Box,
  Typography,
  FormLabel,
} from '@mui/material';
import { ContactType } from './types';
import { produce } from 'immer';

const ContactForm = () => {
  const [contact, setContact] = useState<ContactType>({
    name: '',
    phone: '',
    email: '',
    preferredMethod: 'phone',
  });

  const handleChange = (field: keyof ContactType, value: any) => {
    const newContact = produce(contact, (draft) => {
      draft[field] = value;
    });
    setContact(newContact);
  };

  const handlePreferredMethodChange = (e: any) => {
    const value = e.target.value as 'phone' | 'email';
    const updatedContact = produce(contact, (draft) => {
      draft.preferredMethod = value;
    });
    setContact(updatedContact);
  };

  return (
    <Box sx={{ width: 700, padding: '20px' }}>
      <Typography style={{ color: '#808080', fontSize: 28 }}>
        Contact Information
      </Typography>
      <Typography style={{ fontSize: 18 }} marginTop={4}>
        Purchasing Department
      </Typography>
      <TextField
        label='Name'
        name='name'
        value={contact.name}
        onChange={(e) => handleChange('name', e.target.value)}
        fullWidth
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
          label='Phone'
          name='phone'
          value={contact.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          fullWidth
          margin='normal'
          sx={{ backgroundColor: '#fff' }}
        />

        <TextField
          label='Email'
          name='email'
          value={contact.email}
          onChange={(e) => handleChange('email', e.target.value)}
          fullWidth
          margin='normal'
          sx={{ backgroundColor: '#fff' }}
        />
      </Stack>
    
      <FormControl component='fieldset' margin='normal' sx={{ marginTop: 4 }}>
      <FormLabel component="legend" >Preferred Method of Contact</FormLabel>
        <RadioGroup
          name='preferredMethod'
          value={contact.preferredMethod}
          onChange={handlePreferredMethodChange}
          row
        >
          <FormControlLabel value='phone' control={<Radio />} label='Phone' />
          <FormControlLabel value='email' control={<Radio />} label='Email' />
        </RadioGroup>
      </FormControl>
      <Typography style={{ fontSize: 18 }} marginTop={4}>
        Accounts Payable
      </Typography>
      <TextField
        label='Name'
        name='name'
        value={contact.name}
        onChange={(e) => handleChange('name', e.target.value)}
        fullWidth
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
          label='Phone'
          name='phone'
          value={contact.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          fullWidth
          margin='normal'
          sx={{ backgroundColor: '#fff' }}
        />

        <TextField
          label='Email'
          name='email'
          value={contact.email}
          onChange={(e) => handleChange('email', e.target.value)}
          fullWidth
          margin='normal'
          sx={{ backgroundColor: '#fff' }}
        />
      </Stack>
    
      <FormControl component='fieldset' margin='normal' sx={{ marginTop: 4 }}>
      <FormLabel component="legend" >Preferred Method of Contact</FormLabel>
        <RadioGroup
          name='preferredMethod'
          value={contact.preferredMethod}
          onChange={handlePreferredMethodChange}
          row
        >
          <FormControlLabel value='phone' control={<Radio />} label='Phone' />
          <FormControlLabel value='email' control={<Radio />} label='Email' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
