# Test Project

This project is just for practicing testing.

## Installation

Use the package manager [NPM](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

To have cucumber autocomplete enabled, add these lines on your settings.json on Visual Studio Code.

```
    "cucumberautocomplete.steps": ["./features/step-definitions/*.js"],
    "cucumberautocomplete.syncfeatures": "./features/*feature"

```

## Usage

In order to execute a all the features run the following command

```
npx wdio run ./wdio.conf.js

```

In order to execute a specific tag run the following command

```
npm run wdioTag "@Test1"

```

In order to execute a specific feature run the following command

```
npm run wdioFeature "./features/login.feature"

```
