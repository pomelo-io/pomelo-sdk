import * as pomelo from "../";

test("calculate_divisor #1 (pass)", () => {
  const match_value = 100000;
  const sum_square = 1578.29538956198575761;
  const divisor = pomelo.calculate_divisor(match_value, sum_square);
  expect( divisor ).toBe( 63.359495732767975 );
});

test("calculate_grant_estimated_match #1 (pass)", () => {
  const divisor = 63.359495732767975;
  const square = 706.30066043198416992;
  const grant_estimate = pomelo.calculate_grant_estimated_match(square, divisor);
  expect( grant_estimate ).toBe( 44750.85368069151 );
});

test("calculate_grant_estimated_match #1 (pass)", () => {
  const value = 180
  const sum_sqrt = 26.57631766125593487
  const grant_estimate = 44750.85368069151;
  const funding_estimate = pomelo.calculate_funding_estimated_match(value, sum_sqrt, grant_estimate);
  expect( funding_estimate ).toBe( 22591.380526818404 );
});
