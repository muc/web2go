/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

web2go.controllers.modul1 = new Ext.Controller({
  index: function(options) {
    web2go.views.viewport.setActiveItem(
      web2go.views.modul1Panel, options.animation
    );
  }
});