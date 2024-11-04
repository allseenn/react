import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicBox(props) {
    return (
      <Box component="section" sx={{ p: 2, border: '1px dashed grey',  width: '300px'}}>
        <h1>{props.name}</h1>
        <p>{props.value}</p>
      </Box>
    );
  }

function BasicTextFields(props) {
    return (
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic" 
          label={props.name} 
          variant="outlined" 
          onChange={props.onChange} 
          value={props.value} // Add value prop
        />
      </Box>
    );
}

function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={props.onClick}>{props.name}</Button>
    </Stack>
  );
}

export { BasicBox, BasicTextFields, BasicButtons };
