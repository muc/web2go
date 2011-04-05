/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

web2go.Modules = [
  {name: 'Vorlesungspläne', controller: 'web2go.controllers.vplaene', action: 'index', icon: 'icon_vorlesungsplaene.png'},
  {name: 'Mensa', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon_mensaplaene.png'},
  {name: 'Who-is-Who', controller: 'web2go.controllers.whoiswho', action: 'index', icon: 'icon_who-is-who.png'},
  {name: 'Zimmerbörse', controller: 'web2go.controllers.zimmerboerse', action: 'index', icon: 'icon_zimmerboerse.png'},
  {name: 'Firmenliste', controller: 'web2go.controllers.firmenliste', action: 'index', icon: 'icon_firmenliste.png'},
  {name: 'Dokumente', controller: 'web2go.controllers.dokumente', action: 'index', icon: 'icon_dokumente.png'},
  {name: 'Studiengänge', controller: 'web2go.controllers.studiengaenge', action: 'index', icon: 'icon_studiengaenge.png'},
];

web2go.Urls = {
    'campus': {url: 'sample_data/campus.json'},

    'vplaene' : {url: 'http://m.dhbw-mosbach.de/complain.html'},

    'mensa': {url: 'sample_data/mensa.php', method: 'POST'},
    'mensa_hn': {url: 'sample_data/mensa_hn.json', method: 'GET'},
    'mensa_mgh': {url: 'sample_data/mensa_mgh.json', method: 'GET'},

//    'wiw_form_data': { url: 'sample_data/wiwformdata.json', method: 'GET' },
    'wiw_form': { url: 'sample_data/wiw_form.php?type=99', method: 'POST'},
//    'wiw_details': { url: 'sample_data/wiw_detail.php', method: 'GET' }
    'wiw_form_data': {url: 'http://m.dhbw-mosbach.de/no_cache/whoiswho.html', method: 'GET'},
//    'wiw_form': {url: 'http://m.dhbw-mosbach.de/no_cache/whoiswho.html', method: 'POST'},
    'wiw_details': {url: 'http://m.dhbw-mosbach.de/no_cache/whoiswho.html', method: 'GET'}
}