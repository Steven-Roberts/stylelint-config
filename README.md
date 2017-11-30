# Stylelint Config

[![Build Status](https://travis-ci.org/Steven-Roberts/stylelint-config.svg?branch=master)](https://travis-ci.org/Steven-Roberts/stylelint-config)
[![devDependencies Status](https://david-dm.org/Steven-Roberts/stylelint-config/dev-status.svg)](https://david-dm.org/Steven-Roberts/stylelint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/Steven-Roberts/stylelint-config/peer-status.svg)](https://david-dm.org/Steven-Roberts/stylelint-config?type=peer)
[![Maintainability](https://api.codeclimate.com/v1/badges/c6a225c8c53590dd71cb/maintainability)](https://codeclimate.com/github/Steven-Roberts/stylelint-config/maintainability)

The [stylelint](https://stylelint.io/) configuration used for my projects

## Install

```shell
npm install --save-dev stylelint Steven-Roberts/stylelint-config
```

## Usage

The rules can be extended and overridden as follows

```json
{
    "extends": "stylelint-config-steven-roberts",
    "rules": {
        "ruleToOverride": "..."
    }
}
```

## Test

```shell
npm test
```
