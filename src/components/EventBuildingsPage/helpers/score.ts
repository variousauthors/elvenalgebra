import { sigmoid } from '../../../helpers/sigmoid';

enum Rating {
  GOOD = 'GOOD',
  AVERAGE = 'AVERAGE',
  BAD = 'BAD',
}

const minimumScore = {
  [Rating.GOOD]: 68,
  [Rating.AVERAGE]: 40,
  [Rating.BAD]: 0,
}

const colorCode = {
  [Rating.GOOD]: '#6c3',
  [Rating.AVERAGE]: '#fc3',
  [Rating.BAD]: '#f00',
}

const is = (score: number, rating: Rating) => score >= minimumScore[rating]

/**
 * given a rational number x, scoreCalculator returns an integer
 * in the range [0, 100]
 * 
 * @param x a rational number
 */
export const calculateScore = (x: number) => {
  if (x <= 0) {
    return 0
  }

  return (clamp(x) * 100) | 0
}

/**
 * given a score, returns a rating
 * 
 * @param score an integer in [0, 100]
 */
const toRating = (score: number) => {
  if (is(score, Rating.GOOD)) {
    return Rating.GOOD
  } else if (is(score, Rating.AVERAGE)) {
    return Rating.AVERAGE
  } else if (is(score, Rating.BAD)) {
    return Rating.BAD
  }

  throw new Error(`Score of ${score} is not in range 0 - 100`)
}

/**
 * given a rating, returns a color representing that rating
 * 
 * @param rating a Rating
 */
export const toColor = (score: number) => {
  const rating = toRating(score)

  return colorCode[rating]
}

const clamp = sigmoid(1.5, 1.5)
