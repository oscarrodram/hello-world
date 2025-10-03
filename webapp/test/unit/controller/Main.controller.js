/**
 * @fileoverview This file contains unit tests for the Main controller.
 */
/*global QUnit*/

sap.ui.define([
	"testProject/TestProject/controller/Main.controller"
], function (Controller) {
	"use strict";

	/**
	 * Test module for the Main controller.
	 * @name testProject.TestProject.test.unit.controller.Main
	 */
	QUnit.module("Main Controller");

	/**
	 * Tests that the Main controller can be instantiated and the onInit method can be called.
	 * @param {object} assert - The QUnit assert object.
	 */
	QUnit.test("I should test the Main controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});