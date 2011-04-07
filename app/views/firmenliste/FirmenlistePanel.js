/**
 * @class web2go.views.FirmenlistePanel
 * @extends Ext.Panel
 */


web2go.views.FirmenlistePanel = Ext.extend(Ext.Panel, {
    layout: 'card',
    
    initComponent: function() {
        
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            scope: this,
            handler: function() {
                var currCard = this.getCardIndex();
                currCard == 0 ? this.switchToHome() : this.setActiveItem(currCard - 1, {type: 'slide', direction: 'right'});
            }
        };
        
        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            handler: this.switchToHome
        };
        
        this.modulMenu = this.createModulMenu('Firmenliste');
        
        this.titleBtn = {
            xtype: 'button',
            text: 'Firmenliste',
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
            items: [this.backBtn, {
                xtype: 'spacer'
            }, this.titleBtn, {
                xtype: 'spacer'
            }, this.homeBtn]
        };

        this.dockedItems = [this.toolBar];
        
        Ext.apply(web2go.views, {
            flCoursesList: new web2go.views.FlCoursesList()
        });
        Ext.apply(this, {
            items: [
                web2go.views.flCoursesList
            ]
        });
        
        web2go.views.FirmenlistePanel.superclass.initComponent.apply(this, arguments);
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
    
    getCardIndex: function() {
        return this.items.indexOf(this.getActiveItem());
    },
    
    switchToHome: function() {
        Ext.dispatch({
            controller: web2go.controllers.web2go,
            action: 'home',
            animation: {
                type: 'slide', 
                direction: 'right'
            }
        });
    }
});