Ext.ns('web2go.plugins');

web2go.plugins.HomeScreenButton = Ext.extend(Ext.util.Observable, {
    
    HomeScreenButtonCss: 'HomeScreenButton',
    
    init: function(cmp){
        this.cmp = cmp;
        cmp.on('render', this.initButton, this);
        cmp.startEdit = this.startEdit;
        cmp.endEdit = this.endEdit;
    },
    
    initButton: function() {
        var me = this;
        
        me.cmp.el.addCls(me.HomeScreenButtonCss);
        
         if (!me.imgEl && me.image) {
	    me.imgEl = me.cmp.el.createChild({
                tag: 'img',
                src: me.image
            });
	}
        if (!me.imgShineEl) {
	    me.imgShineEl = me.cmp.el.createChild({
                tag: 'img',
                src: 'bg.png'
            });
	}
        
    }
});

Ext.preg('homescreenbutton', web2go.plugins.HomeScreenButton);