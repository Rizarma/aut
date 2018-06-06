exports.config = {
    specs: ["./test/specs/**/*.js"],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
            chromeOptions: {
                args: ["start-fullscreen"]
            }
        }
    ],
    sync: true,
    logLevel: "silent",
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: "./snapshot/",
    baseUrl: "http://localhost",
    waitforTimeout: 30000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    services: ["chromedriver"],
    port: "9515",
    path: "/",
    framework: "mocha",
    reporters: ["dot", "mochawesome", "junit", "tap"],
    mochawesomeOpts: {
        includeScreenshots: true,
        screenshotUseRelativePath: true
    },
    reporterOptions: {
        outputDir: "./output",
        mochawesome_filename: "WDIO.mochawesome.json"
    },
    mochaOpts: {
        ui: "bdd",
        timeout: 30000
    },
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },

    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function(capabilities, specs) {
        require("dotenv").config();

        const fs = require("fs");
        const path = require("path");

        browser.addCommand("jepret", filename => {
            const screenshot = browser.saveScreenshot(filename);
            fs.writeFileSync(path.join("./output/mochawesome/snapshot/", filename), screenshot);
            fs.unlinkSync(filename);
        });

        browser.addCommand("setDate", (selector, time) => {
            browser.execute(
                (selector, time) => {
                    const event = new Event("input", { bubbles: true });
                    const element = document.querySelector(selector);

                    element.removeAttribute("readonly");
                    element.value = time;
                    element.dispatchEvent(event);
                },
                selector,
                time
            );
        });

        browser.addCommand("strToInt", value => {
            return value.match(/\d+/g).join("");
        });

        browser.addCommand("waitForUrl", function(value, timeout, revert) {
            let url, actual;

            try {
                return browser.waitUntil(
                    () => {
                        url = browser.getUrl();
                        actual = value === url;

                        // This slash is added by Selenium
                        if (typeof value === "string" && !value.endsWith("/")) {
                            url = url.replace(/\/$/, "");
                        }

                        if (typeof value === "function") {
                            actual = value(url);
                        } else if (value[Symbol.match]) {
                            actual = value.test(url);
                        }

                        if (revert) {
                            actual = !actual;
                        }

                        return value && actual;
                    },
                    timeout,
                    ""
                );
            } catch (error) {
                let message = "Could not wait for required url:";
                message += `\n\tActual: ${url}`;
                message += `\n\tExpected: ${value}`;

                throw new Error(message);
            }
        });
    }

    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },

    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },

    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    // beforeTest: function (test) {
    // },

    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function() {
    // }

    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },

    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    // afterTest: function (test) {
    // },

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },

    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },

    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },

    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }
};
