/**
 * @fileoverview This file is the entry point for all OPA5 journey tests.
 * It configures OPA5 to use a startup arrangement and sets the view namespace.
 */
sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	/**
	 * Extends the OPA5 configuration.
	 * @property {object} arrangements - The startup arrangement for the tests.
	 * @property {string} viewNamespace - The namespace of the views under test.
	 * @property {boolean} autoWait - Whether OPA5 should automatically wait for UI5 to finish rendering.
	 */
	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "testProject.TestProject.view.",
		autoWait: true
	});
});