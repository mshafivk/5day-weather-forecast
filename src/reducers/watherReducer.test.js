import { weatherReducer } from './weatherReducer';
import { SET_LOADING_STATE, SET_FORECAST } from './actions';

describe('weatherReducer test', () => {
  it('Sets loading state properly ', () => {
    const currentState = { loading: false };
    const newState = weatherReducer(currentState, {
      type: SET_LOADING_STATE,
      payload: { loading: true },
    });
    expect(newState.loading).toBe(true);

    expect(
      weatherReducer(newState, {
        type: SET_LOADING_STATE,
        payload: { loading: false },
      }).loading,
    ).toBe(false);
  });

  it('Sets forecasts state properly ', () => {
    const currentState = { forecasts: [] };
    const newState = weatherReducer(currentState, {
      type: SET_FORECAST,
      payload: { forecasts: [{ temp: 23 }] },
    });
    expect(newState.forecasts).toEqual([{ temp: 23 }]);
  });

  it('returns current state for unhandled action types ', () => {
    const currentState = { forecasts: [{ temp: 23 }], loading: false };
    const newState = weatherReducer(currentState, {
      type: 'UNHANDLED',
      payload: { forecasts: [{ temp: 23 }] },
    });
    expect(newState).toEqual(currentState);
  });
});
