/**
 * @class web2go.views.StudiengaengeNav1
 * @extends Ext.Panel
 * Campus selection for studiengaenge
 */


web2go.views.StudiengaengeNav1 = Ext.extend(Ext.Panel, {
//    scroll:'none',
    layout: Ext.isPhone ? 'fit' : {
        type:'vbox',
        align: 'center',
        pack: 'center'
    },
    
    initComponent: function() {
        
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            listeners: {
                'tap': function() {
                    Ext.dispatch({
                        controller: web2go.controllers.web2go,
                        action: 'home',
                        animation: {type: 'slide', direction: 'right'}
                    });
                }
            }
        };
        
        this.toolBar = {
            xtype: 'toolbar',
            dock : 'top',
            items: [this.backBtn]
        };
        
        this.dockedItems = [this.toolBar];
        
        this.list = new Ext.List({
            flex: 1,
            scroll: 'vertical',
            itemTpl : '{title}',
            store: web2go.stores.sgnav,
            onItemDisclosure: true,
            disableSelection: true,
            listeners: {
                itemtap: function(dataView, index) {
                    Ext.dispatch({
                        controller: web2go.controllers.studiengaenge,
                        action: 'list',
                        animation: {type: 'slide', direction: 'left'},
                        filter: this.store.getAt(index).get('id')
                    });
                }
            }
            
        });
        
        this.items = [this.list];
        
        web2go.views.StudiengaengeNav1.superclass.initComponent.apply(this, arguments);
    }
    
});