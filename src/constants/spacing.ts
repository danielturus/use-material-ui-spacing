import { SpacingType } from '../useSpacing'

export const AVAILABLE_POSITIONS = (typeOfAlignment: SpacingType) => {
  const typeOfSpacing = typeOfAlignment === 'm' ? 'margin' : 'padding'

  return {
    x: (spacingValue: number) => ({
      [`${typeOfSpacing}Left`]: spacingValue,
      [`${typeOfSpacing}Right`]: spacingValue,
    }),
    y: (spacingValue: number) => ({
      [`${typeOfSpacing}Top`]: spacingValue,
      [`${typeOfSpacing}Bottom`]: spacingValue,
    }),
    t: (spacingValue: number) => ({
      [`${typeOfSpacing}Top`]: spacingValue,
    }),
    b: (spacingValue: number) => ({
      [`${typeOfSpacing}Bottom`]: spacingValue,
    }),
    l: (spacingValue: number) => ({
      [`${typeOfSpacing}Left`]: spacingValue,
    }),
    r: (spacingValue: number) => ({
      [`${typeOfSpacing}Right`]: spacingValue,
    }),
  }
}
