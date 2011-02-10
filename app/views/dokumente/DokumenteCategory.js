/**
 * @class web2go.views.DokumenteCategory
 * @extends Ext.Panel
 * Campus selection for dokumente
 */


web2go.views.DokumenteCategory = Ext.extend(Ext.Panel, {
    layout: Ext.isPhone ? 'fit' : {
        type:'vbox',
        align: 'stretch'
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
            itemTpl : '<p>{title}</p><p style="font-size: 11px;">{teaser}</p>',
            store: web2go.stores.dokumentCategories,
            onItemDisclosure: true,
            disableSelection: true
//            listeners: {
//                itemtap: function(dataView, index) {
//                    Ext.dispatch({
//                        controller: web2go.controllers.dokumente,
//                        action: 'list',
//                        animation: {type: 'slide', direction: 'left'},
//                        category: this.store.getAt(index).get('id')
//                    });
//                }
//            }
            
        });
        
        this.items = [this.list];
        
        web2go.views.DokumenteCategory.superclass.initComponent.apply(this, arguments);
    }
    
});