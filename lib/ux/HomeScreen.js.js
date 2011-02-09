Ext.ns('web2go.plugins');

web2go.plugins.HomeScreen = Ext.extend(Ext.util.Observable, {
    
    init: function(cmp) {
        this.cmp = cmp;
        cmp.on('render', this.initHomeScreen, this);
    },
    
    initHomeScreen: function() {
        var me = this;
        
        if (me.buttons) {
            var rows = Math.floor(me.buttons.length / 3) + (me.buttons.length % 3 > 0 ? 1 : 0);
            
            var deskPanel = {
                xtpye: 'panel',
                padding: 10,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                }
            };
            
            for (i = 1; i <= rows; i++) {
                deskPanel.add({
                    xtpye: 'panel',
                    padding: 10,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [{
                        xtype: 'panel',
                        id: 'hp_row_' + i.toString(),
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        }
                    }]
                });
            }
            me.cmp.add(deskPanel);
            
            for (i = 0; i < me.buttons.length; i++) {
                var row = Math.floor(i / 3) + 1;
                var rowPanel = Ext.getCmp('hp_row_' + row.toString());
                var currentbutton = me.buttons[i];
                
                if (rowPanel) {
                    if(currentbutton) {
                        rowPanel.add({flex:1, items: [currentbutton, new Ext.Panel({html:'Text'})]});
                    }
                    else {
                        rowPanel.add({flex:1});
                    }
                }
            }
        }
    }
    
});

Ext.preg('homescreen', web2go.plugins.HomeScreen);