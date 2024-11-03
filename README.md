# 🚧 Notice: Pomelo is No Longer Available

Pomelo has concluded its journey. Together with the web3 community, we raised over **$3 million** to fund public goods and facilitated approximately **30,000 donations** to **652 projects**. We are grateful to have served the builders who created grants and brought their visions to life. Through quadratic funding, your support made a meaningful difference, helping matching partners meet the needs of their communities.

**Next Steps: Build with [Pinax](https://pinax.network)**

Pomelo users can start building with a **FREE Pinax Pro Plan**. Pinax provides comprehensive blockchain data services for dozens of chains, including **EOS**, **WAX**, and **Telos**. We encourage you to continue your journey by leveraging Pinax's advanced tools and services at https://pinax.network.

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
