/**
 * @class web2go.views.MensaCampus
 * @extends Ext.Panel
 * Campus selection for mensa modul.
 * With NestedList the MensaDetail view will be rendered dependent on the selected campus.
 */


web2go.views.MensaCampus = Ext.extend(Ext.NestedList, {
    displayField: 'name',
    useToolbar: false,
    onItemDisclosure: true,
    store: web2go.stores.campus,

    /*
     * Returns the type of detail view.
     * For campus Mosbach the MensaDetail view will be returned.
     * For all other campus a simple Ext.Panel with html content will be returned.
     */
    getDetailCard: function(record, parentRecord) {
        return record.id == 'MOS' ? 
              new web2go.views.MensaDetail()
            : new Ext.Panel({styleHtmlContent: true, scroll: 'vertical'});
    },
    
    initComponent: function() {

        /*
         * The back button
         * If we are on the first card , switch to homescreen,
         * else show the previous card
         */
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            scope: this,
            handler: function() {
                this.getListIndex() == 0 ? this.switchToHome() : this.onBackTap();
            }
        };

        /*
         * The home button, to switch to the homescreen view
         */
        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            handler: this.switchToHome
        };

        /*
         * Initiate the actionsheet modules menu
         */
        this.modulMenu = this.createModulMenu('Mensa');

        /*
         * The modul title with tap handler to show the modules menu
         */
        this.titleBtn = {
            xtype: 'button',
            text: 'Mensapläne',
            iconMask: true,
            ui: 'plain',
            cls: 'title-btn',
            scope: this,
            handler: function(btn) {
                this.modulMenu.show();
            }
        };

        /*
         * The toolbar with back button, home button and the title
         */
        this.toolBar = {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'dark',
            items: [this.backBtn, {xtype: 'spacer'}, this.titleBtn, {xtype: 'spacer'}, this.homeBtn]
        };

        //add the toolbar to this view
        this.dockedItems = [this.toolBar];

        //Event listener for leafitemtap. Dependent on the selected campus the detail card will be rendere.
        this.listeners = {
            leafitemtap: function(subList, subIdx, el, e, detailCard) {
                var ds = subList.getStore(),
                    id = ds.getAt(subIdx).get('id');

                if (id == 'MOS') {
                    detailCard.setCampus(id);
                }
                else if (id == 'HN') {
                    Ext.Ajax.request({
                        method: web2go.Urls.mensa_hn.method,
                        url: web2go.Urls.mensa_hn.url,
                        success: function(response, opts) {
                            detailCard.update(response.responseText);
                        }
                    });
                }
                else if (id == 'MGH') {
                    Ext.Ajax.request({
                        method: web2go.Urls.mensa_mgh.method,
                        url: web2go.Urls.mensa_mgh.url,
                        success: function(response, opts) {
                            detailCard.update(response.responseText);
                        }
                    });
                }
            }
        };
        
        web2go.views.MensaCampus.superclass.initComponent.apply(this, arguments);
    },

    /**
     * Creates and returns the modules menu
     */
    createModulMenu: function(currentModul) {
        var mm = new Ext.ActionSheet({
            hideOnMaskTap: true,
            enter: 'bottom'
        });
        Ext.each(web2go.Modules, function(module) {
            mm.add({
                text: module.name,
                ui: module.name == currentModul ? 'confirm-round' : 'normal',
                dispatchController: eval(module.controller),
                dispatchAction: module.action,
                handler: function() {
                    mm.hide();
                    Ext.dispatch({
                        controller: this.dispatchController,
                        action: this.dispatchAction,
                        animation: {type: 'slide', direction: 'down'}
                    });
                }
            });
        });
        return mm;
    },

    /**
     * Returns the active card index
     */
    getListIndex: function() {
        return this.items.indexOf(this.getActiveItem());
    },

    /**
     * Helper-function to change the active card view.
     */
    switchToList: function(index) {
        if (index >= 0 && index < this.items.getCount()) {
            var list = this.items.getAt(index),
                selModel = list.getSelectionModel();
            Ext.defer(selModel.deselectAll, 1, selModel);
            Ext.defer(this.setActiveItem, 1, this, index);
        }
    },

    /**
     * Calls the index action in the web2go controller, to switch to homescreen
     */
    switchToHome: function() {
        Ext.dispatch({
            controller: web2go.controllers.web2go,
            action: 'home',
            animation: {type: 'slide', direction: 'right'}
        });
    }
});