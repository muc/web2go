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
            '<tpl if="image != null">',
                '<div class="wiw_detail_image clearfix">',
                    '<img src="{image.src}" />',
                '</div>',
            '</tpl>',
            '<h3>{gender} {fullname}</h3>',
            '<div class="wiw_detail_box clearfix">',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Position</div>',
                    '<div class="wiw_detail_content">',
                        '<tpl for="positions">',
                            '<p>{name}</p>',
                        '</tpl>',
                    '</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">E-Mail</div>',
                    '<div class="wiw_detail_content"><a href="mailto:{mail}">{mail}</a></div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Campus</div>',
                    '<div class="wiw_detail_content">{campus}</div>',
                '</div>',
                '<div class="wiw_detail_row clearfix">',
                    '<div class="wiw_detail_label">Telefon</div>',
                    '<div class="wiw_detail_content"><a href="tel:{phone}">{phone}</a></div>',
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