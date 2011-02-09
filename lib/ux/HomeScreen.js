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
            
            for (i = 1; i <= rows; i++) {
                me.cmp.add({
                    xtype: 'panel',
                    padding: '30 10',
                    id: 'hp_row_' + i.toString(),
                    height: 100,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    }
                });
            }

            for (i = 0; i < rows * 3; i++) {
                var row = Math.floor(i / 3) + 1;
                var rowPanel = Ext.getCmp('hp_row_' + row.toString());
                var currentbutton = me.buttons[i];
                
                if (rowPanel) {
                    if(currentbutton) {
                        rowPanel.add({
                            flex:1,
                            items: [
                                currentbutton,
                                new Ext.Panel({
                                    baseCls: 'homeScreenButton',
                                    styleHtmlContent: true,
                                    html: '<div class="buttonlabel"><span>' + currentbutton.label + '</span></div>'
                                })
                            ]
                        });
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