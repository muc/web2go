/**
 * @class web2go.views.WhoiswhoDetail
 * @extends Ext.Panel
 * Who-is-who person detail view
 */

web2go.views.WhoiswhoDetail = Ext.extend(Ext.Panel, {
    styleHtmlContent: true,
    scroll: 'vertical',
    
    initComponent: function() {
        this.tpl = new Ext.XTemplate(
            '<div class="wiw_detail_image clearfix">',
                '<img src="http://www.dhbw-mosbach.de/{image}" />',
            '</div>',
            '<h3>{gender} {fullname}</h3>',
            '<div class="wiw_detail_box clearfix">',
                '<tpl for="positions">',
                    '<div class="wiw_detail_row clearfix">',
                        '<div class="wiw_detail_label">Position</div>',
                        '<div class="wiw_detail_content">',
                            '<p>{name}</p>',
                        '</div>',
                    '</div>',
                '</tpl>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">E-Mail</div>',
                    '<div class="wiw_detail_content">{mail}</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Campus</div>',
                    '<div class="wiw_detail_content">{campus}</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Telefon</div>',
                    '<div class="wiw_detail_content">{phone}</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Telefax</div>',
                    '<div class="wiw_detail_content">{fax}</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Adresse</div>',
                    '<div class="wiw_detail_content">{address}<br />{zip} {city}</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Raum</div>',
                    '<div class="wiw_detail_content">{room}</div>',
                '</div>',
             '</div>'
        );
        web2go.views.WhoiswhoDetail.superclass.initComponent.apply(this, arguments);
    }
});