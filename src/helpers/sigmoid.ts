const exp = (x: number) => Math.pow(Math.E, x)

/**
 * 
 * @param shift a positive shift moves the function right
 * @param squeeze a large squeeze makes the slope steeper around the center
 */
export const sigmoid = (shift: number, squeeze: number) => (t: number) => {
  const x = squeeze * (shift - t)

  return 1 / (1 + exp(x));
}