import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Divider, Select, FormLabel, Container, FormControl, FormHelperText, MenuItem, Typography, Grid } from '@mui/material';
import { Stack } from '@mui/system';

import { selectPersonalDetails, setActiveStep, setPersonalDetails, Steps } from '../../store/surveyslice';
import { useAppDispatch } from '../../hooks';
import { useSelector } from 'react-redux';

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

  const dispatch = useAppDispatch();
  const personalData = useSelector(selectPersonalDetails);

  const formik = useFormik({
    initialValues: personalData.ageGroup ? personalData : {
      department: 'select',
      role: 'select',
      employmentType: 'select',
      timeWithOrganisation: 'select',
      ageGroup: 'select',
      gender: 'select',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setPersonalDetails(values));
      dispatch(setActiveStep(Steps.WORK_PLACE));
    },
  });

  return (
    <Container maxWidth='sm'>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={3}
        >
          <FormLabel id='mobility-label'>
            <Typography align='left' variant='h5' color='primary'>
              Select your details from below dropdowns
            </Typography>
          </FormLabel>

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
              <MenuItem value={'department-1'}>Department 1</MenuItem>
              <MenuItem value={'department-2'}>Department 2</MenuItem>
              <MenuItem value={'department-3'}>Department 3</MenuItem>
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
              <MenuItem value={'people-manager'}>People Manager</MenuItem>
              <MenuItem value={'lead'}>Leader</MenuItem>
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
              <MenuItem value={'part-time'}>Part time</MenuItem>
              <MenuItem value={'full-time'}>Full time</MenuItem>
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
              <MenuItem value={'lessThanSix'}>0 - 6 Months</MenuItem>
              <MenuItem value={'sixMonthToOneYear'}>6 - 12 Months</MenuItem>
              <MenuItem value={'oneToFiveYears'}>1 - 5 Years</MenuItem>
              <MenuItem value={'fiveToTenYears'}>5 - 10 Years</MenuItem>
              <MenuItem value={'moreThanTenYears'}>more than 10 Years</MenuItem>
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
              <MenuItem value={'under25'}>Under 25</MenuItem>
              <MenuItem value={'25-30'}>25-30</MenuItem>
              <MenuItem value={'30-35'}>30-35</MenuItem>
              <MenuItem value={'35-40'}>35-40</MenuItem>
              <MenuItem value={'40-50'}>40-50</MenuItem>
              <MenuItem value={'over50'}>50 or over</MenuItem>
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
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
            </Select>
            <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
          </FormControl>
        </Stack>
        <Divider variant='fullWidth' className='space-container' />
        <Grid container justifyContent="flex-end" columnSpacing={3}>
          <Grid item md={6} xs={12}>
            <Button color='primary' variant='contained' fullWidth type='submit' size='large' className='space-container'>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container >
  );
};

export default PersonalDetails;
