import React from 'react';
import { Stepper } from '@mui/material';

interface IProps {
    activeStep: number;
    children: React.ReactNode;
}

export const CustomStepper: React.FC<IProps> = ({ activeStep, children }) => {
    return (
        <>
            <Stepper sx={{ display: { s: 'flex', xs: 'flex', md: 'none' } }} activeStep={activeStep} orientation='vertical'>
                {children}
            </Stepper>
            <Stepper sx={{ display: { md: 'flex', xs: 'none' } }} activeStep={activeStep} alternativeLabel>
                {children}
            </Stepper>
        </>
    );
};
