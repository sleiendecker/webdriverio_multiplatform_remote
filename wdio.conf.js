const chai = require('chai');

exports.config = {
  specs: ['./test/specs/*.spec.js'],
  capabilities: {
    chrome: {
      host: '127.0.0.1',
      port: 4444,
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
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
  },
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  services: ['selenium-standalone', 'appium'],
  mochaOpts: {
    ui: 'bdd'
  },
  before: function (capabilities, specs) {
    global.expect = chai.expect;
    global.assert = chai.assert;
  }
}
