sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"testProject/TestProject/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	/**
	 * @namespace testProject.TestProject.Component
	 */
	return UIComponent.extend("testProject.TestProject.Component", {

		/**
		 * Component metadata.
		 * @public
		 */
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * This method overrides the base `init` method of `sap.ui.core.UIComponent`.
		 * In this implementation, the device model is set and the router is initialized.
		 * @public
		 * @override
		 * @returns {void}
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});