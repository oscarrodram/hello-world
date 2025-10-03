sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	/**
	 * @namespace testProject.TestProject.model.models
	 * @name testProject.TestProject.model.models
	 * @description Holds helper functions for creating and configuring models.
	 */
	return {

		/**
		 * Creates a new JSONModel with device-specific information.
		 * The binding mode is set to "OneWay" by default.
		 * @public
		 * @returns {sap.ui.model.json.JSONModel} The device model.
		 */
		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});