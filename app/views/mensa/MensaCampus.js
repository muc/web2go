/**
 * @class web2go.views.MensaCampus
 * @extends Ext.Panel
 * Campus selection for mensa
 */


web2go.views.MensaCampus = Ext.extend(Ext.NestedList, {
    displayField: 'name',
    useToolbar: false,
    onItemDisclosure: true,
    store: web2go.stores.campus,
    getDetailCard: function(record, parentRecord) {
        return record.id == 'MOS' ? 
              new web2go.views.MensaDetail()
            : new Ext.Panel({styleHtmlContent: true, scroll: 'vertical'});
    },
    
    initComponent: function() {
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            scope: this,
            handler: function() {
                this.getListIndex() == 0 ? this.switchToHome() : this.onBackTap();
            }
        };
        
        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            handler: this.switchToHome
        };
        
        this.modulMenu = this.createModulMenu('Mensa');
        
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
        
        this.toolBar = {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'dark',
            items: [this.backBtn, {xtype: 'spacer'}, this.titleBtn, {xtype: 'spacer'}, this.homeBtn]
        };
        
        this.dockedItems = [this.toolBar];
    
        this.listeners = {
            leafitemtap: function(subList, subIdx, el, e, detailCard) {
                var ds = subList.getStore(),
                    id = ds.getAt(subIdx).get('id'),
                    campus = ds.getAt(subIdx).get('name');

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

    getListIndex: function() {
        return this.items.indexOf(this.getActiveItem());
    },

    switchToList: function(index) {
        if (index >= 0 && index < this.items.getCount()) {
            var list = this.items.getAt(index),
                selModel = list.getSelectionModel();
            Ext.defer(selModel.deselectAll, 1, selModel);
            Ext.defer(this.setActiveItem, 1, this, index);
        }
    },

    switchToHome: function() {
        Ext.dispatch({
            controller: web2go.controllers.web2go,
            action: 'home',
            animation: {type: 'slide', direction: 'right'}
        });
    }
});