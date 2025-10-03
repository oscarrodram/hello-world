/**
 * @fileoverview This file defines a page object for the Main view of the application.
 * It contains actions and assertions that can be performed on the Main view.
 */
sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";

	var sViewName = "Main";

	/**
	 * Creates a page object for the Main view.
	 * @name testProject.TestProject.test.integration.pages.Main
	 */
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				/**
				 * Asserts that the Main view is displayed.
				 * @returns {Promise} A promise that is resolved when the assertion is complete.
				 */
				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The Main view is displayed");
						},
						errorMessage: "Did not find the Main view"
					});
				}
			}
		}
	});

});