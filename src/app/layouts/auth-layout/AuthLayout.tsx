import React, { ReactNode, useRef } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Grid } from '@mui/material';

import './AuthLayout.css'

export interface IPageLayoutProps {
  footer?: ReactNode;
  children: ReactNode;
}

export const AuthLayout: React.FC<IPageLayoutProps> = ({
  footer,
  children
}) => {
  const mainRef = useRef<HTMLDivElement>();

  return (
    <div>
      <div className='header'>
        <Typography align='left' variant='h5' color='secondary'>
          ABC Comapny survay
        </Typography>
      </div>
      <div className='main'>
        <div className='content'>{children}</div>
        <div className='footer'>
          <Grid
            container
            justifyContent='flex-start'
            alignItems='center'
            rowGap={3}
          >
            <Grid item md={1} xs={12}>
              <Avatar alt='Remy Sharp' src='https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg' />
            </Grid>
            <Grid item md={9} xs={12}>
              <Typography align='left' variant='subtitle1' color='secondary'>
                Employemnt performance annual survay
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
