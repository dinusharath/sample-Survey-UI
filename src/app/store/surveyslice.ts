import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = null;
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const surveyState = createSlice({
  name: 'survey',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
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
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     })
  //     .addCase(incrementAsync.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },
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
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectActiveStep = (state: CounterState) => state.step;
export const selectActiveStep = createSelector(selectSurveyState, state => state.step);
export const selectPersonalDetails = createSelector(selectSurveyState, state => state.personalDetails);
export const selectWorkPlace = createSelector(selectSurveyState, state => state.workPlace);
export const selectMobility = createSelector(selectSurveyState, state => state.mobility);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//     (dispatch, getState) => {
//       const currentValue = selectCount(getState());
//       if (currentValue % 2 === 1) {
//         dispatch(incrementByAmount(amount));
//       }
//     };

export const surveyReducer = surveyState.reducer;