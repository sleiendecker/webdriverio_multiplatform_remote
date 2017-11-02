
# webdriverio_multiplatform_remote
The idea of this app is to demonstrate webdriver.io's multiplatform feature across multiple platforms. This demo tests against a chat app built on Express and Socket.IO with a browser (chrome) and a mobile device (iOS simulator).


# Pre-Installation
Make sure brew is up to date by running brew update and make sure node, npm, and mongodb are installed globally.
```unix
brew update
brew install node
```

# Global NPM Packages
Install required global packages using the following.
```unix
npm install -g appium
```

# Installation

## Clone repo and install dependencies
```unix
git clone https://github.com/sleiendecker/webdriverio_multiplatform_remote
cd webdriverio_multiplatform_remote
npm i
```
## Run the app
Navigate to the project in a new terminal window/tab and start the chat app
```unix
npm run start
```
Open http://localhost:3000/ in your browser to ensure the app is running

## Test config
This demo assumes you have xcode + iOS simulator already installed. To view a list of available simulators, run
```unix
instruments -s
```
Copy the model name, platform verion, and udid for any device you want to run, and paste it in the `capabilities.iphone` object in wdio.conf.js
```js
iphone: {
  host: '127.0.0.1',
  port: 4723,
  desiredCapabilities: {
    platformName: "iOS",
    platformVersion: "PLATFORM_VERSION",
    browserName: "Safari",
    automationName: "XCUITest",
    startIWDP: true,
    showXcodeLog: true,
    bootstrapPath: "/usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent",
    agentPath: "/usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent/WebDriverAgent.xcodeproj",
    deviceName: "DEVICE_NAME",
    udid: "UDID"
  }
}
```
wdio-selenium-standalone-service and wdio-appium-service are both used in this project, so you don't need to manually start the Selenium or Appium server, or install any additional drivers.
## Run the test
Go back to the previous terminal window/tab and run the test:
```unix
npm run test
```
