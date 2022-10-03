import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Step,
  StepLabel,
  Typography,
  Grid
} from '@mui/material';
import { Stack } from '@mui/system';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { CustomStepper } from './customStepper';
import { selectMobility, setActiveStep, setMobility, Steps } from '../../store/surveyslice';
import { useAppDispatch } from '../../hooks';
import { useSelector } from 'react-redux';

const validationSchema = yup.object({
  mobility: yup
    .number()
    .required('Please select one option')
    .min(1, 'Please select one option')
});

const Mobility = () => {

  const dispatch = useAppDispatch();
  const mobilityData = useSelector(selectMobility);

  const formik = useFormik({
    initialValues: {
      mobility: mobilityData || 0
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setMobility(values.mobility));
    },
  });

  const goBack = () => {
    dispatch(setActiveStep(Steps.WORK_PLACE));
  }

  return (
    <Container maxWidth='md'>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth variant='outlined'>
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={3}
          >
            <FormLabel id='mobility-label'>
              <Typography align='left' variant='h5' color='primary'>
                Thinking about the general mobility of your job/role, which of the following most closely describes how much you work in your main workplace?
              </Typography>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='mobility-label'
              name='mobility'
              value={formik.values.mobility}
              onChange={formik.handleChange}
            >
              <CustomStepper activeStep={formik.values.mobility}>
                <Step key={1} onClick={() => formik.setFieldValue('mobility', 1, true)}>
                  <StepLabel
                    icon={formik.values.mobility === 1 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                    <FormControlLabel
                      value={1}
                      control={
                        <Card variant='outlined' sx={formik.values.mobility === 1 ? { backgroundColor: 'primary.main', color: 'white' } : {}}>
                          <CardContent>
                            <Typography gutterBottom>
                              I primarily work there and rarely need to work elsewhere
                            </Typography>
                          </CardContent>
                        </Card>}
                      label={''}
                      labelPlacement='bottom'
                    />
                  </StepLabel>
                </Step>
                <Step key={2} onClick={() => formik.setFieldValue('mobility', 2, true)}>
                  <StepLabel
                    icon={formik.values.mobility === 2 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                    <FormControlLabel
                      value={1}
                      control={
                        <Card variant='outlined' sx={formik.values.mobility === 2 ? { backgroundColor: 'primary.main', color: 'white' } : {}}>
                          <CardContent>
                            <Typography gutterBottom>
                              I primarily work there but attend meetings off-site or work elsewhere
                            </Typography>
                          </CardContent>
                        </Card>}
                      label={''}
                      labelPlacement='bottom'
                    />
                  </StepLabel>
                </Step>
                <Step key={3} onClick={() => formik.setFieldValue('mobility', 3, true)}>
                  <StepLabel
                    icon={formik.values.mobility === 3 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                    <FormControlLabel
                      value={1}
                      control={
                        <Card variant='outlined' sx={formik.values.mobility === 3 ? { backgroundColor: 'primary.main', color: 'white' } : {}}>
                          <CardContent>
                            <Typography gutterBottom>
                              I regularly work there but primarily work off-site or work elsewhere
                            </Typography>
                          </CardContent>
                        </Card>}
                      label={''}
                      labelPlacement='bottom'
                    />
                  </StepLabel>
                </Step>
                <Step key={4} onClick={() => formik.setFieldValue('mobility', 4, true)}>
                  <StepLabel
                    icon={formik.values.mobility === 4 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                    <FormControlLabel
                      value={1}
                      control={
                        <Card variant='outlined' sx={formik.values.mobility === 4 ? { backgroundColor: 'primary.main', color: 'white' } : {}} >
                          <CardContent>
                            <Typography gutterBottom>
                              I rarely work there and primarily work elsewhere
                            </Typography>
                          </CardContent>
                        </Card>}
                      label={''}
                      labelPlacement='bottom'
                    />
                  </StepLabel>
                </Step>
              </CustomStepper>
            </RadioGroup>
          </Stack>
          <FormHelperText>{formik.touched.mobility && formik.errors.mobility}</FormHelperText>
        </FormControl>
        <Divider variant='fullWidth' className='space-container' />
        <Grid container columnSpacing={3}>
          <Grid item md={6} xs={12}>
            <Button color='primary' variant='outlined' fullWidth size='large' onClick={goBack} className='space-container'>
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

export default Mobility;
