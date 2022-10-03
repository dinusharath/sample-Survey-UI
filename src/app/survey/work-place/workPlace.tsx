import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';

import { useAppDispatch } from '../../hooks';
import { selectWorkPlace, setActiveStep, setWorkPlace, Steps } from '../../store/surveyslice';
import { useSelector } from 'react-redux';

const validationSchema = yup.object({
  workPlace: yup
    .string()
    .required('Please select one option')
});

const Workplace = () => {

  const dispatch = useAppDispatch();
  const workPlaceData = useSelector(selectWorkPlace);

  const formik = useFormik({
    initialValues: {
      workPlace: workPlaceData || ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setWorkPlace(values.workPlace));
      dispatch(setActiveStep(Steps.MOBILITY));
    },
  });

  const goBack = () => {
    dispatch(setActiveStep(Steps.PERSONAL_DETAILS));
  }

  return (
    <Container maxWidth='sm'>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth variant='outlined'>
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={3}
          >
            <FormLabel id='workplace-label'>
              <Typography align='left' variant='h5' color='primary'>
                Which of the following is your main workplace?
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-labelledby='workplace-label'
              name='workPlace'
              value={formik.values.workPlace}
              onChange={formik.handleChange}
            >
              <FormControlLabel value='london' control={<Radio color='primary' />} label='London Office' />
              <FormControlLabel value='delhi' control={<Radio color='primary' />} label='Delhi Office' />
              <FormControlLabel value='newYork' control={<Radio color='primary' />} label='New York Office' />
              <FormControlLabel value='other' control={<Radio color='primary' />} label='Other' />
              <FormControlLabel value='neverVisit' control={<Radio color='primary' />} label='I never visit an office' />
              <FormHelperText>{formik.touched.workPlace && formik.errors.workPlace}</FormHelperText>
            </RadioGroup>
          </Stack>
        </FormControl>
        <Divider variant='fullWidth' className='space-container' />
        <Grid container columnSpacing={3}>
          <Grid item md={6} xs={12}>
            <Button color='primary' variant='outlined' onClick={goBack} fullWidth size='large' className='space-container'>
              Go Back
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button color='primary' variant='contained' fullWidth type='submit' size='large' className='space-container'>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Workplace;
