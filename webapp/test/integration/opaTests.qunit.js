/**
 * @fileoverview This file is the entry point for all integration tests. It disables QUnit's autostart,
 * waits for the SAPUI5 framework to initialize, and then loads and starts the actual OPA tests.
 */
/* global QUnit */
QUnit.config.autostart = false;

// Wait for the UI5 core to initialize before loading and running tests.
sap.ui.getCore().attachInit(function () {
	"use strict";
	// This function is called once the SAPUI5 core has been initialized.
	// It loads the OPA test journey and starts the QUnit tests.

	// Require the main OPA journey file and start the tests.
	sap.ui.require([
		"testProject/TestProject/test/integration/AllJourneys"
	], function () {
		// This function is called after the AllJourneys module has been loaded.
		// It starts the QUnit test runner.
		QUnit.start();
	});
});