export type AllAction = {
  type: 'INCREMENT_COUNTER',
  delta: number,
} | {
  type: 'RESET_COUNTER',
}

export const incrementCounter = (delta: number): AllAction => ({
  type: 'INCREMENT_COUNTER',
  delta,
})

export const resetCounter = (): AllAction => ({
  type: 'RESET_COUNTER',
})