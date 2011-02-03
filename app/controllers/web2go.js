/**
 * @class web2go
 * @extends Ext.Controller
 * The web2go controller
 */
Ext.regController("web2go", {

    home: function() {
      if (!this.homePanel) {
        this.homePanel = this.render({
          xtype: 'home-panel'
        });
        
        this.homePanel.query('#modul1Button')[0].on({
          tap: function() {this.modul('Modul 1')},
          scope: this
        });
        this.homePanel.query('#modul2Button')[0].on({
          tap: function() {this.modul('Modul 2')},
          scope: this
        });
        this.homePanel.query('#modul3Button')[0].on({
          tap: function() {this.modul('Modul 3')},
          scope: this
        });
        this.homePanel.query('#modul4Button')[0].on({
          tap: function() {this.modul('Modul 4')},
          scope: this
        });
        this.homePanel.query('#modul5Button')[0].on({
          tap: function() {this.modul('Modul 5')},
          scope: this
        });
        this.homePanel.query('#modul6Button')[0].on({
          tap: function() {this.modul('Modul 6')},
          scope: this
        });

        this.application.viewport.query('#homeButton')[0].on({
          tap: this.home,
          scope: this
        });
      }
      this.application.viewport.query('#homeButton')[0].hide();
      this.application.viewport.setActiveItem(this.homePanel, {
        type: 'slide',
        direction: 'right'
      });
    },

    modul: function(modTitle) {
      if (!this.modulPanel) {
        this.modulPanel = this.render({
          xtype: 'modul-panel',
          modTitle: modTitle
        });
      }
      else {
        this.modulPanel.getDockedItems()[0].setTitle(modTitle);
      }
      this.application.viewport.query('#homeButton')[0].show();
      this.application.viewport.setActiveItem(this.modulPanel, {
        type: 'slide',
        direction: 'left'
      });
    }
});
