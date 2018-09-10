// Discriminated Union == sealed trait in Scala
// but is more powerful because it's an open union (can add more cases to it)

// E.g. typesafe redux reducer

type IncrementCounter = {
  type: 'INCREMENT',
  payload: {
    amount: number
  }
}

type ResetCounter = {
  type: 'RESET',
}

type AppAction = IncrementCounter | ResetCounter

function handleAction(act: AppAction): string {
  switch (act.type) {
    case 'INCREMENT':
      return act.payload.amount.toString()
    case 'RESET':
      return 'reset'
  }
}

const anAction: AppAction = {
  type: 'INCREMENT',
  payload: {
    amount: 5
  }
}

handleAction(anAction) // returns "5"

type ExtendedAppAction = AppAction | {
  type: 'ERROR',
  payload: {
    message: string
  }
}

// You can use control flow (switch, if) to narrow the types, This is called Control Flow Based Analysis
function handleExtendedAction(act: ExtendedAppAction): string {
  if (act.type === 'ERROR') {
    return act.payload.message
  }
  else {
    // Type is inferred to be "IncrementCounter | ResetCounter" so we can call handleAction
    return handleAction(act)
  }
}
