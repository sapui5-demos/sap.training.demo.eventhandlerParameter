sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.demo.eventhandlerParameter.controller.Main", {

		onInit: function() {
			this.getView().setModel(new JSONModel());
		},

		onPress: function(para1, para2, para3) {
			MessageBox.show(
				para1 + " " + para2 + " " + para3
			);
		}

	});
});