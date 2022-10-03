import React, { useMemo } from 'react';

import { selectActiveStep, Steps } from '../store/surveyslice';
import { useSelector } from 'react-redux';
import PersonalDetails from './personal-details/PersonalDetails';
import Workplace from './work-place/workPlace';
import Mobility from './mobility/mobility';
import { Divider, Step, StepLabel, Stepper } from '@mui/material';
import { MainLayout } from '../layouts/main-layout/MainLayout';

const Survey = () => {

    const activeStep = useSelector(selectActiveStep);

    const body = useMemo(() => {
        switch (activeStep) {
            case Steps.PERSONAL_DETAILS:
                return <PersonalDetails />;

            case Steps.WORK_PLACE:
                return <Workplace />;

            case Steps.MOBILITY:
                return <Mobility />;
            default:
                return <PersonalDetails />;
        }
    }, [activeStep]);

    return <MainLayout>
        <Stepper activeStep={activeStep} alternativeLabel>
            <Step key={'personal'}>
                <StepLabel>{'Personal Details'}</StepLabel>
            </Step>
            <Step key={'workPlace'}>
                <StepLabel>{'Work place'}</StepLabel>
            </Step>
            <Step key={'mobility'}>
                <StepLabel>{'Mobility'}</StepLabel>
            </Step>
        </Stepper>
        <Divider variant='fullWidth' className='space-container' />
        <div className='space-container'>{body}</div>
    </MainLayout>;
};

export default Survey;
