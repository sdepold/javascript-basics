# Fibonacci plotting

In this exercise, we are going to reuse our previously implemented Fibonacci module to render a configurable Fibonacci graph.

## Instructions

1. Create a web application (with your most favorite Node.js server module) that serves a blank page with a title.
2. Allow users to configure the amount of data points they want to have rendered.
3. Using the Fibonacci module, render the Fibonacci sequence with the configured amount of data points. Possibility: https://canvasjs.com/html5-javascript-line-chart/
4. Dependency inject another function and render a different sequence.
5. Integration test your implementation

## UI testing

Put test files into `test/ui/<something>.js`.
Test command: `mocha -t 10000 test/ui/*.js`

### Setup

http://webdriver.io/guide.html

```
curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz
yarn add --dev webdriverio
```

### Bootup

```
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar
yarn start
```

### Documentation

http://webdriver.io/api.html
