/**
 * @fileoverview This file is the entry point for all unit tests. It disables QUnit's autostart,
 * waits for the SAPUI5 framework to initialize, and then loads and starts the actual tests.
 */
/* global QUnit */
QUnit.config.autostart = false;

// Wait for the UI5 core to initialize before loading and running tests.
sap.ui.getCore().attachInit(function () {
	"use strict";
	// This function is called once the SAPUI5 core has been initialized.
	// It loads the unit test suite and starts the QUnit tests.

	// Require the main test suite file and start the tests.
	sap.ui.require([
		"testProject/TestProject/test/unit/AllTests"
	], function () {
		// This function is called after the AllTests module has been loaded.
		// It starts the QUnit test runner.
		QUnit.start();
	});
});