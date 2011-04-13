/**
 * @class whoiswho
 * @extends Ext.Controller
 * The whoiswho modul controller
 */

web2go.controllers.whoiswho = new Ext.Controller({
    // Whoiswho search formular
    index: function(options) {
        //show loading mask
        web2go.views.viewport.setLoading(true);

        //ajax request to get the dropdown field datas
        Ext.Ajax.request({
            method: web2go.Urls.wiw_form_data.method,
            url: web2go.Urls.wiw_form_data.url,
            success: function(response, opts) {
                var data = Ext.decode(response.responseText);

                //load the dropdown datas into the stores
                web2go.stores.WiwFormLocations.loadData(data.wiw.locations);
                web2go.stores.WiwFormDepartments.loadData(data.wiw.departments);
                web2go.stores.WiwFormCourses.loadData(data.wiw.courses);

                //reset card view for WhoiswhoPanel
                Ext.defer(web2go.views.whoiswhoPanel.setActiveItem, 1, web2go.views.whoiswhoPanel, 0);

                //who whoiswhoPanel in the viewport
                web2go.views.viewport.setActiveItem(
                    web2go.views.whoiswhoPanel, options.animation
                );

                //hide the loading mask
                web2go.views.viewport.setLoading(false);
            }
        });
    },

    //search result list
    list: function(options) {

        //scroll list to top
        var listScroller = web2go.views.whoiswhoList.scroller;
        if (listScroller != undefined) {
            web2go.views.whoiswhoList.scroller.scrollTo({x:0, y:0});
        }
        //show the list
        web2go.views.whoiswhoPanel.setActiveItem(
            web2go.views.whoiswhoList, options.animation
        );
        //and do a refresh to show actual data only
        web2go.views.whoiswhoList.refresh();
    },

    //person detail view
    detail: function(options) {
        
        //show loading mask
        web2go.views.whoiswhoPanel.setLoading(true);

        //get all details for the submitted person id
        Ext.Ajax.request({
            method: web2go.Urls.wiw_details.method,
            url: web2go.Urls.wiw_details.url,
            params: {
                'tx_dhbwcontactsmobile_pi1[person]': options.person,
                'tx_dhbwcontactsmobile_pi1[action]': 'index',
                'tx_dhbwcontactsmobile_pi1[controller]': 'Mobile'
            },
            success: function(response) {
                var obj  = Ext.decode(response.responseText),
                data = obj.wiwdetails;

                //add the image uri to the person storage, so we can access it with XTemplate
                Ext.apply(data.person, {
                    image: data.image
                });

                //load the person details into the store
                web2go.stores.WiwDetail.loadData(data);

                //apply the person record from store to the html XTemplate
                var html = web2go.views.whoiswhoDetail.tpl.apply(web2go.stores.WiwDetail.first());
                web2go.views.whoiswhoDetail.update(html);

                //show the detail panel
                web2go.views.whoiswhoPanel.setActiveItem(
                    web2go.views.whoiswhoDetail, options.animation
                );
                //hide the loading mask
                web2go.views.whoiswhoPanel.setLoading(false);
            }
        });
    }
});
