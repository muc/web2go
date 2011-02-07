/**
 * @class web2go.views.MensaDetail
 * @extends Ext.Panel
 * Mensa informations and pdf plans
 */

web2go.views.MensaDetail = Ext.extend(Ext.Panel, {
    centered: true,
    layout: 'card',
//    tabBar: {
//        layout: {pack: 'center'}
//    },

    initComponent: function() {
        this.backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Zurück',
            listeners: {
                'tap': function() {
                    Ext.dispatch({
                        controller: web2go.controllers.mensa,
                        action: 'index',
                        animation: {type: 'slide',direction: 'right'}
                    });
                }
            }
        };

        this.homeBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'home',
            listeners: {
                'tap': function() {
                    Ext.dispatch({
                        controller: web2go.controllers.web2go,
                        action: 'home',
                        animation: {type: 'slide',direction: 'right'}
                    });
                }
            }
        };
        
        this.wwwBtn = {
            xtype: 'button',
            iconMask: true,
            ui: 'plain',
            iconCls: 'action',
            listeners: {
                'tap': function() {
                    Ext.Msg.alert('Redirect to dhbw-mosbach.de');
                }
            }
        };
        
        this.tabBtns = {
          xtype: 'segmentedbutton',
          items: [{
              text: 'Info',
              pressed: true,
              scope: this,
              handler: function() {
                  this.setActiveItem(0, {type: 'slide',direction: 'right'});
              }
          }, {
              text: 'Pläne',
              scope: this,
              handler: function() {
                  this.setActiveItem(1, {type: 'slide',direction: 'left'});
              }
          }]
        };
        
        this.titleBar = {
            xtype: 'toolbar',
            dock : 'top',
            title: 'Mensa',
            items: [this.homeBtn, {xtype: 'spacer'}, this.wwwBtn]
        };
        
        this.toolBar = {
            xtype: 'toolbar',
            dock : 'top',
            items: [this.backBtn, {xtype: 'spacer'}, this.tabBtns, {xtype: 'spacer'}]
        };

        this.dockedItems = [this.titleBar, this.toolBar];

        this.infoPanel = {
            title: 'Info',
            scroll: 'vertical',
            styleHtmlContent: true,
            html: [
            '<h3>Mensa und Cafeteria</h3>',
            '<p><b>Essen und Trinken hält Leib und Seele zusammen, heißt es bekanntlich. Direkt am Campus besteht die Möglichkeit, sich mittags zu stärken. Die DHBW Mosbach betreibt die Restauration allerdings nicht selber, sondern greift auf die Unterstützung externer Dienstleister zurück.</b></p>',
            '<p>Der große Hunger kann mittags in der Mensa von 11.30 - 14.00 Uhr gestillt werden. Die Mensa der DHBW Mosbach ist das öffentliche Restaurant der Alten Mälzerei in der "Alten Bergsteige 7". Dieses Gebäude befindet sich direkt neben den Hauptgebäuden der DHBW Mosbach (Lohrtalweg). </p>',
            '<p>Die DHBW Mosbach ist an das Studentenwerk Heidelberg angeschlossen, wodurch die Essenspreise mit 2,50 EUR für zwei Wahlgerichte sehr moderat gehalten werden können. Als Zahlungsmittel in der Mensa kann eine wiederaufwertbare Chipkarte verwendet werden, die auch als Kopierkarte dient. Aufwerteautomaten für Chipkarten sind an den Standorten der DHBW Mosbach angebracht. Im Bereich der Mensa sind aus eigentumsrechtlichen Gründen keine Aufwerteautomaten vorhanden.</p>',
            '<h3>Erweitertes Essens-Angebot</h3>',
            '<p>Zusätzlich zur Mensa in der Alten Mälzerei können Sie auch in folgenden Mosbacher Gaststätten zum Mensa-Preis essen gehen:</p>',
            '<ul><li>Gaststätte Lamm, Hauptstraße 59</li><li>Mosbacher Brauhaus, Eisenbahnstraße 18</li></ul>',
            '<p>Die Essensmarken erhalten Sie im 4-er Block für 10 Euro, d. h. ein Essen kostet wie gewohnt 2,50 \u20ac. Kaufen können Sie die Essensmarken bei Frau Birgit Herhoff (Lohrtalweg 10, Gebäude A, Raum 1.19, Tel. 06261-939-457,<br/>E-Mail: <a href="mailto:herhoff@dhbw-mosbach.de">herhoff[at] dhbw-mosbach.de</a>)</p>',
            '<ul><li><b>täglich</b> von 9.30 \u2013 10.30 Uhr.</li></ul>',
            '<p><b>Wichtig</b>: Die Essensmarken können nicht bar bezahlt werden, sondern werden vom Guthaben auf Ihrem Studierendenausweis abgebucht.</p>',
            '<p>Das Besondere: Die Essensmarken können Sie nicht nur mittags, sondern auch abends zum Essen à la Carte einsetzen (keine Getränke). Der Wert einer Essensmarke beträgt 4,50 \u20ac, der vom Essenspreis abgezogen wird.</p>'
            ]
        };

        this.listPanel = {
            xtype: 'list',
            title: 'Pläne',
            store: web2go.stores.mensa,
            itemTpl: '{name}',
            onItemDisclosure: function(record) {
                Ext.Msg.alert('Tap', 'PDF for ' + record.get('name') + ' here...');
            }
        };

        this.items = [this.infoPanel, this.listPanel];
        
        //    web2go.stores.campus.load();
        web2go.views.MensaDetail.superclass.initComponent.apply(this, arguments);
    }
});