/**
 * @class web2go.views.WhoiswhoPanel
 * @extends Ext.Panel
 * Whoiswho card-container. Contains all the other whoiswho modul views.
 */


web2go.views.WhoiswhoPanel = Ext.extend(Ext.Panel, {
    layout: 'card',
    
    initComponent: function() {
        /*
         * The back button.
         * If we are on the first card , switch to homescreen,
         * else show the previous card
         */
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
        this.modulMenu = this.createModulMenu('Who-is-Who');

        /*
         * The modul title with tap handler to show the modules menu
         */
        this.titleBtn = {
            xtype: 'button',
            text: 'Who is Who',
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

        //put instances of cards into web2go.views namespace
        Ext.apply(web2go.views, {
            whoiswhoForm: new web2go.views.WhoiswhoForm(),
            whoiswhoList: new web2go.views.WhoiswhoList(),
            whoiswhoDetail: new web2go.views.WhoiswhoDetail()
        });

        //put instances of cards into WhoiswhoPanel
        Ext.apply(this, {
            items: [
                web2go.views.whoiswhoForm,
                web2go.views.whoiswhoList,
                web2go.views.whoiswhoDetail
            ]
        });
        
        web2go.views.WhoiswhoPanel.superclass.initComponent.apply(this, arguments);
    },

    /**
     * Creates and returns the modules menu
     */
    createModulMenu: function(currentModul) {
        var mm = new Ext.ActionSheet({
            hideOnMaskTap: true,
            enter: 'bottom'
        });
        
        //add all modules to the actionsheet menu
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
    getCardIndex: function() {
        return this.items.indexOf(this.getActiveItem());
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