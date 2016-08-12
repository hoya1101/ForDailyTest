sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("sap.ui.hoya.dummy.view.App", {
		onOpenDialog : function(){
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
   });
});