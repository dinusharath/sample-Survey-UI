import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Divider, Select, Container, FormControl, FormHelperText, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { MainLayout } from '../../layouts/main-layout/MainLayout';

const validationSchema = yup.object({
  department: yup
    .string()
    .notOneOf(['select'], 'Please select a Department')
    .required('Please select a Department'),
  role: yup
    .string()
    .notOneOf(['select'], 'Please select a Role')
    .required('Please select a Role'),
  employmentType: yup
    .string()
    .notOneOf(['select'], 'Please select a Employment type')
    .required('Please select a Employment type'),
  timeWithOrganisation: yup
    .string()
    .notOneOf(['select'], 'Please select a Time with organisation')
    .required('Please select a Time with organisation'),
  ageGroup: yup
    .string()
    .notOneOf(['select'], 'Please select a Age group')
    .required('Please select a Age group'),
  gender: yup
    .string()
    .notOneOf(['select'], 'Please select a Gender')
    .required('Please select a Gender'),
});

const PersonalDetails = () => {
  const formik = useFormik({
    initialValues: {
      department: 'select',
      role: 'select',
      employmentType: 'select',
      timeWithOrganisation: 'select',
      ageGroup: 'select',
      gender: 'select',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <MainLayout>
      <div>
        <Container maxWidth='sm'>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={3}
            >
              {/* Department */}
              <FormControl fullWidth variant='outlined'>
                <Typography align='left' variant='subtitle1' gutterBottom>
                  Department
                </Typography>
                <Select
                  id='department'
                  name='department'
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  error={formik.touched.department && Boolean(formik.errors.department)}
                >
                  <MenuItem value='select'>
                    <em>-- select --</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.department && formik.errors.department}</FormHelperText>
              </FormControl>

              {/* Role */}
              <FormControl fullWidth variant='outlined'>
                <Typography align='left' variant='subtitle1' gutterBottom>
                  Role
                </Typography>
                <Select
                  id='role'
                  name='role'
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                >
                  <MenuItem value='select'>
                    <em>-- select --</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.role && formik.errors.role}</FormHelperText>
              </FormControl>

              {/* Employment type */}
              <FormControl fullWidth variant='outlined'>
                <Typography align='left' variant='subtitle1' gutterBottom>
                  Employment type
                </Typography>
                <Select
                  id='employmentType'
                  name='employmentType'
                  value={formik.values.employmentType}
                  onChange={formik.handleChange}
                  error={formik.touched.employmentType && Boolean(formik.errors.employmentType)}
                >
                  <MenuItem value='select'>
                    <em>-- select --</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.employmentType && formik.errors.employmentType}</FormHelperText>
              </FormControl>

              {/* Time with organisation */}
              <FormControl fullWidth variant='outlined'>
                <Typography align='left' variant='subtitle1' gutterBottom>
                  Time with organisation
                </Typography>
                <Select
                  id='timeWithOrganisation'
                  name='timeWithOrganisation'
                  value={formik.values.timeWithOrganisation}
                  onChange={formik.handleChange}
                  error={formik.touched.timeWithOrganisation && Boolean(formik.errors.timeWithOrganisation)}
                >
                  <MenuItem value='select'>
                    <em>-- select --</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.timeWithOrganisation && formik.errors.timeWithOrganisation}</FormHelperText>
              </FormControl>

              {/* Age group */}
              <FormControl fullWidth variant='outlined'>
                <Typography align='left' variant='subtitle1' gutterBottom>
                  Age group
                </Typography>
                <Select
                  id='ageGroup'
                  name='ageGroup'
                  value={formik.values.ageGroup}
                  onChange={formik.handleChange}
                  error={formik.touched.ageGroup && Boolean(formik.errors.ageGroup)}
                >
                  <MenuItem value='select'>
                    <em>-- select --</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.ageGroup && formik.errors.ageGroup}</FormHelperText>
              </FormControl>

              {/* Gender */}
              <FormControl fullWidth variant='outlined'>
                <Typography align='left' variant='subtitle1' gutterBottom>
                  Gender
                </Typography>
                <Select
                  id='gender'
                  name='gender'
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                >
                  <MenuItem value='select'>
                    <em>-- select --</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
              </FormControl>
            </Stack>
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

export default PersonalDetails;
