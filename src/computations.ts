export function calculate_divisor(round_match_value: number, round_sum_square: number, round_sum_value: number) {
  return round_match_value / (round_sum_square - round_sum_value);
}

export function calculate_grant_estimated_match(sum_sqrt: number, sum_value: number, divisor: number) {
  return (sum_sqrt * sum_sqrt - sum_value) * divisor;
}

export function calculate_funding_estimated_match(value: number, sum_sqrt: number, grant_estimate: number) {
  return Math.sqrt(value) / sum_sqrt * grant_estimate;
}
