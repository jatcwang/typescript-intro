import * as React from 'react'
import {cursorTo} from 'readline'

interface State {
  currentCount: number
}

// A dumb components that doesn't know about redux
export class MyDumbComponent extends React.PureComponent<MyDumbComponent.Props, State> {

  constructor(p: MyDumbComponent.Props) {
    super(p)
    this.state = {
      currentCount: p.initialNum
    }
  }

  componentWillReceiveProps(nextProps: Readonly<MyDumbComponent.Props>, nextContext: any): void {
    if (nextProps.initialNum !== this.props.initialNum) {
      this.setState({
        currentCount: nextProps.initialNum
      })
    }
  }

  incrementStateCounter: () => void = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
  }

  render() {
    const { currentCount } = this.state
    const { displayNum, doOnClick } = this.props

    return (
      <div className='Lol'>
        <div>Global state: {displayNum}</div>
        <div>Component State: {currentCount}</div>
        <button onClick={doOnClick}>Click to update global state</button>
        <button onClick={this.incrementStateCounter}>Click to add to component state</button>
      </div>
    )

  }
}

export namespace MyDumbComponent {
  export interface Props {
    displayNum: number
    initialNum: number
    doOnClick: () => void
  }
}

