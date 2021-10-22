export function calculate_divisor(match_value: number, sum_square: number) {
  return match_value / sum_square;
}

export function calculate_grant_estimated_match(square: number, divisor: number) {
  return square * divisor;
}

export function calculate_funding_estimated_match(value: number, sum_sqrt: number, grant_estimate: number) {
  return Math.sqrt(value) / sum_sqrt * grant_estimate;
}
