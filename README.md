# Pomelo SDK

[![Build Status](https://github.com/pomelo-io/pomelo-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/pomelo-io/pomelo-sdk/actions/workflows/test.yml)
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
const sum_square = 6815.9417537;
const sum_value = 3010;
const divisor = pomelo.calculate_divisor(match_value, sum_square, sum_value);
// => 26.2747058341

// Grant Computations
const sum_sqrt = 60.104076406;
const sum_value = 1712.5;
const grant_estimate = pomelo.calculate_grant_estimated_match(sum_sqrt, sum_value, divisor);
// => 1900.0000

// User Computations
const value = 180
const sum_sqrt = 26.57631766125593487
const funding_estimate = pomelo.calculate_funding_estimated_match(value, sum_sqrt, grant_estimate);
// => 22591.380526818404;
```