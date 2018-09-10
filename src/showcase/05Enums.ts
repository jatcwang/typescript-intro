enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

enum CardinalDirection {
  NORTH,
  SOUTH,
  WEST,
  EAST,
}

const cardinalDirection: CardinalDirection = CardinalDirection.NORTH
const compatibleWithNumber: CardinalDirection = 0

console.log(cardinalDirection === compatibleWithNumber) // true

// But different enums are not considered of the same type, even if their numeric values are the same

// Direction.UP == CardinalDirection.NORTH

enum StrEnum {
  NORTH = 'N',
  SOUTH = 'S',
  WEST = 'W',
  EAST = 'E',
}


