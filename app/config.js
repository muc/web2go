
web2go.Modules = [
  {name: 'Vorlesungspläne', controller: 'web2go.controllers.vplaene', action: 'index', icon: 'icon_vorlesungsplaene.png'},
  {name: 'Mensa', controller: 'web2go.controllers.mensa', action: 'index', icon: 'icon_mensaplaene.png'},
  {name: 'Who-is-Who', controller: 'web2go.controllers.whoiswho', action: 'index', icon: 'icon_who-is-who.png'}
];

web2go.Urls = {
    'campus': {url: 'data/campus.json'},

    'vplaene' : {url: 'http://m.dhbw-mosbach.de/complain.html'},
    'vplaene_times' : {url: 'data/vplaene_times.php'},

    'mensa': {url: 'data/mensa.php', method: 'POST'},
    'mensa_hn': {url: 'data/mensa_hn.json', method: 'GET'},
    'mensa_mgh': {url: 'data/mensa_mgh.json', method: 'GET'},

    'wiw_form_data': {url: 'http://m.dhbw-mosbach.de/no_cache/whoiswho.html', method: 'GET'},
    'wiw_form': {url: 'http://m.dhbw-mosbach.de/no_cache/whoiswho.html', method: 'POST'},
    'wiw_details': {url: 'http://m.dhbw-mosbach.de/no_cache/whoiswho.html', method: 'GET'}
}