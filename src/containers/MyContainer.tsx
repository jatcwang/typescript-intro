import {AnyAction, Dispatch} from 'redux'
import {incrementCounter} from '../actions'
import * as React from 'react'
import {connect, MapDispatchToProps, MapStateToProps, MergeProps} from 'react-redux'
import { AllState } from '../reducers/Store'
import { MyDumbComponent } from '../components/MyDumbComponent'

/**
 * A container around MyDumbComponent to connect it to the redux store
 */

const mapStateToProps: MapStateToProps<PropsFromRedux, OwnProps, AllState> = (state: AllState) => {
  return {
    globalNum: state.counter.value
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchFromRedux, OwnProps> = (dispatch: Dispatch) => {
  return {
    doOnClick: () => {
      dispatch(incrementCounter(1))
    },
  }
}

interface PropsFromRedux {
  globalNum: number
}

interface DispatchFromRedux {
  doOnClick: () => void
}

interface OwnProps {
  passThisIn: number
}

export default connect<PropsFromRedux, DispatchFromRedux, OwnProps, MyDumbComponent.Props, AllState>(mapStateToProps, mapDispatchToProps, (stateProps, dispathProps, ownProps) => {
  return {
    doOnClick: dispathProps.doOnClick,
    displayNum: stateProps.globalNum,
    initialNum: ownProps.passThisIn
  }
})(MyDumbComponent)
