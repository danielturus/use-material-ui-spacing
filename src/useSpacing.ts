import { makeStyles, useTheme } from '@material-ui/core'
import { AVAILABLE_POSITIONS } from './constants/spacing'

type SpacingType = 'm' | 'p'
type Position = 't' | 'r' | 'b' | 'l' | 'x' | 'y'
type SpacingValue = number

export function useSpacing() {
  const { spacing } = useTheme()
  if (!arguments.length) {
    throw new Error('No value provided')
  }

  const generatedClasses: string[] = []

  for (let i = 0; i < arguments.length; i++) {
    const expression = arguments[i]
    const { spacingType, position, value } = extractSpacingElements(expression)
    const getStyle = AVAILABLE_POSITIONS(spacingType)
    const providedOption = getStyle[position]

    if (!providedOption) {
      throw new Error('Provided option is not valid')
    }
    const spacingValue = spacing(value)
    const styles = providedOption(spacingValue)
    const useStyles = makeStyles({ root: styles })
    const classes = useStyles()
    generatedClasses.push(classes.root)
  }

  return generatedClasses
}

function extractSpacingElements(expression: string) {
  const spacingTypeRegex = /p|m/g
  const positionRegex = /t|r|b|l|x|y/g
  const numberRegex = /[0-9]+/g

  const matchedSpacingType = expression.match(spacingTypeRegex)
  const matchedNumbers = expression.match(numberRegex)
  const matchedPosition = expression.match(positionRegex)

  if (
    matchedNumbers === null ||
    matchedSpacingType === null ||
    matchedPosition === null
  ) {
    throw new Error(
      'Specified format does not corresponds with the needed format.'
    )
  }

  const [formattedSpacingType] = matchedSpacingType
  const [formattedPosition] = matchedPosition
  const [formattedMatchedNumbers] = matchedNumbers

  const spacingType: SpacingType = formattedSpacingType as SpacingType
  const position: Position = formattedPosition as Position
  const value: SpacingValue = Number(formattedMatchedNumbers)

  return {
    spacingType,
    position,
    value,
  }
}
