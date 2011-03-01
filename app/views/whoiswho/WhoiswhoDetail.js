/**
 * @class web2go.views.WhoiswhoDetail
 * @extends Ext.Panel
 * Who-is-who person detail view
 */

web2go.views.WhoiswhoDetail = Ext.extend(Ext.Panel, {
    styleHtmlContent: true,
    initComponent: function() {
        this.tpl = new Ext.XTemplate(
            '<h3>Name: {fullname}</h3>',
            '<p>{mail}</p>'
        );
        web2go.views.WhoiswhoDetail.superclass.initComponent.apply(this, arguments);
    }
});