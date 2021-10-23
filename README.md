# Pomelo SDK

[![Build Status](https://travis-ci.org/pomelo-io/pomelo-sdk.svg?branch=master)](https://travis-ci.org/pomelo-io/pomelo-sdk)
[![npm version](https://badge.fury.io/js/pomelo-sdk.svg)](https://badge.fury.io/js/pomelo-sdk)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/pomelo-io/pomelo-sdk/master/LICENSE)

> Pomelo - Javascript Library

## Install

Using Yarn:

```bash
$ yarn add pomelo-sdk
```

or using NPM:

```bash
$ npm install --save pomelo-sdk
```

## Quick Start

```js
import * as pomelo from "pomelo-sdk"

// Round Computations
const match_value = 100000;
const sum_square = 1578.29538956198575761;
const divisor = pomelo.calculate_divisor(match_value, sum_square);
// => 63.359495732767975

// Grant Computations
const square = 706.30066043198416992;
const grant_estimate = pomelo.calculate_grant_estimated_match(square, divisor);
// => 44750.85368069151

// User Computations
const value = 180
const sum_sqrt = 26.57631766125593487
const funding_estimate = pomelo.calculate_funding_estimated_match(value, sum_sqrt, grant_estimate);
// => 22591.380526818404;
```