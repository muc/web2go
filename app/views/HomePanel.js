/**
 * @class web2go.views.HomePanel
 * @extends Ext.Panel
 * @plugin web2go.plugins.HomeScreen
 * This panel is the web2go home screen.
 */

web2go.views.HomePanel = Ext.extend(Ext.Panel, {
    //config options
    scroll: 'vertical',
    cls: 'HomeScreenBg',

    initComponent: function() {

        //the title bar
        this.dockedItems = [{
            xtype: 'toolbar',
            dock : 'top',
            title: '<span class="dhbw-red">DH</span>BW Mosbach'
        }];

        //loading all modules to the homescreen panel
        var buttons = [];

        //creating a button with tap handler for each module
        for (i = 0; i < web2go.Modules.length; i++) {
            buttons.push({
                xtype: 'button',
                text: web2go.Modules[i].name,
                label: web2go.Modules[i].name,
                plugins: [new web2go.plugins.HomeScreenButton({image: web2go.Modules[i].icon})],
                dispatchController: eval(web2go.Modules[i].controller),
                dispatchAction: web2go.Modules[i].action,
                handler: function() {
                    Ext.dispatch({
                        controller: this.dispatchController,
                        action: this.dispatchAction,
                        animation: {type: 'slide', direction: 'left'}
                    });
                }
            });
        }

        this.plugins = [new web2go.plugins.HomeScreen({buttons: buttons})];

    web2go.views.HomePanel.superclass.initComponent.apply(this, arguments);
  }
});
