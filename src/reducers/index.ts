import { AllAction } from '../actions'
import { connect } from 'react-redux'
import {AllState, ICounter} from './Store'
import {combineReducers, Reducer} from 'redux'

const initialState: ICounter = {
  value: 0,
}

export function counter(state: ICounter = initialState, action: AllAction): ICounter {
  const { value } = state
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      const newValue = value + action.delta
      return { value: newValue }
    case 'RESET_COUNTER':
      return { value: 0 }
  }

  return state
}

export const allReducers: Reducer<AllState, AllAction> = combineReducers<AllState, AllAction>({
  counter: counter
})