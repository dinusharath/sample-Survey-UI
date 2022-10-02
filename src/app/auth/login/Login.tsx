import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Container, FormControl, Button, Stack, Divider, FormLabel, Link, Typography } from '@mui/material';

import './Login.css';
import { AuthLayout } from '../../layouts/auth-layout/AuthLayout';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthLayout>
      <Container maxWidth='sm' className='container'>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={3}
          >
            <FormLabel id='mobility-label'>
              <Typography align='left' variant='h5' color='primary'>
                Login to ABC
              </Typography>
            </FormLabel>
            <FormControl fullWidth variant='outlined'>
              <Typography align='left' variant='subtitle1' gutterBottom>
                Email
              </Typography>
              <TextField
                fullWidth
                id='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>
            <FormControl fullWidth variant='outlined'>
              <Typography align='left' variant='subtitle1' gutterBottom>
                Password
              </Typography>
              <TextField
                fullWidth
                id='password'
                name='password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </FormControl>
          </Stack>
          <Divider variant='fullWidth' className='space-container' />
          <div className='forgot-password-link'>
            <Link href='#' underline='always' >
              Forgot Password?
            </Link>
          </div>
          <Button color='primary' variant='contained' fullWidth type='submit' size='large' className='space-container'>
            Submit
          </Button>
        </form>
      </Container>
    </AuthLayout>
  );
};

export default Login;
