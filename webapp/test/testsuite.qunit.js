/**
 * @fileoverview This file defines the main test suite for the application.
 * It creates a new test suite and adds pages for both unit and integration tests,
 * which is then used by the `testsuite.qunit.html` page to run all tests.
 */
// eslint-disable-next-line sap-no-global-define
/**
 * Defines the test suite for the application.
 * This function is called by the `testsuite.qunit.html` page.
 * @returns {parent.jsUnitTestSuite} The test suite.
 */
window.suite = function () {
	"use strict";
	/* eslint-disable new-cap */

	/**
	 * The test suite.
	 * @type {parent.jsUnitTestSuite}
	 */
	var oSuite = new parent.jsUnitTestSuite(),
		/**
		 * The context path for the test pages.
		 * @type {string}
		 */
		sContextPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);

	// Add the unit test page to the suite.
	oSuite.addTestPage(sContextPath + "unit/unitTests.qunit.html");
	// Add the integration test page to the suite.
	oSuite.addTestPage(sContextPath + "integration/opaTests.qunit.html");

	return oSuite;
};