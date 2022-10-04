import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Steps {
  PERSONAL_DETAILS = 0,
  WORK_PLACE = 1,
  MOBILITY = 2
}

export interface CounterState {
  step: Steps;
  personalDetails: {
    ageGroup?: string;
    department?: string;
    employmentType?: string;
    gender?: string;
    role?: string;
    timeWithOrganisation?: string;
  },
  workPlace?: string;
  mobility?: number;
}

const initialState: CounterState = {
  step: Steps.PERSONAL_DETAILS,
  personalDetails: {},
};

export const surveyState = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<Steps>) => {
      state.step = action.payload;
    },
    setPersonalDetails: (state, action: PayloadAction<CounterState['personalDetails']>) => {
      state.personalDetails = action.payload;
    },
    setWorkPlace: (state, action: PayloadAction<string>) => {
      state.workPlace = action.payload;
    },
    setMobility: (state, action: PayloadAction<number>) => {
      state.mobility = action.payload;
    }
  },
});

export const {
  setActiveStep,
  setMobility,
  setPersonalDetails,
  setWorkPlace
} = surveyState.actions;

function selectSurveyState(rootState: any): CounterState {
  return rootState['survey'];
}

export const selectActiveStep = createSelector(selectSurveyState, state => state.step);
export const selectPersonalDetails = createSelector(selectSurveyState, state => state.personalDetails);
export const selectWorkPlace = createSelector(selectSurveyState, state => state.workPlace);
export const selectMobility = createSelector(selectSurveyState, state => state.mobility);

export const surveyReducer = surveyState.reducer;
