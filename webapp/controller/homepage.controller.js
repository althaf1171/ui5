sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sampleCoreElements.sampleCoreElements.controller.homepage", {
		goToOverview:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("materialoverview");
		}
		
	});
});