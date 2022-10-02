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
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { CustomStepper } from './customStepper';
import { MainLayout } from '../../layouts/main-layout/MainLayout';

const validationSchema = yup.object({
  mobility: yup
    .number()
    .required('Please select one option')
    .min(1, 'Please select one option')
});

const Mobility = () => {
  const formik = useFormik({
    initialValues: {
      mobility: 0
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <MainLayout>
      <div>
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
                    <Step key={1}>
                      <StepLabel
                        icon={formik.values.mobility === 1 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                        <FormControlLabel
                          value={1}
                          control={
                            <Card variant='outlined' onClick={() => formik.setFieldValue('mobility', 1, true)}>
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
                    <Step key={2}>
                      <StepLabel
                        icon={formik.values.mobility === 2 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                        <FormControlLabel
                          value={1}
                          control={
                            <Card variant='outlined' onClick={() => formik.setFieldValue('mobility', 2, true)}>
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
                    <Step key={3}>
                      <StepLabel
                        icon={formik.values.mobility === 3 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                        <FormControlLabel
                          value={1}
                          control={
                            <Card variant='outlined' onClick={() => formik.setFieldValue('mobility', 3, true)}>
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
                    <Step key={4}>
                      <StepLabel
                        icon={formik.values.mobility === 4 ? <CircleIcon color='primary' /> : <CircleOutlinedIcon color='primary' />}>
                        <FormControlLabel
                          value={1}
                          control={
                            <Card variant='outlined' onClick={() => formik.setFieldValue('mobility', 4, true)}>
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
            <Button color='primary' variant='contained' fullWidth type='submit' size='large' className='space-container'>
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Mobility;
