<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>DHBW Mosbach - Web2Go</title>

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-icon" href="apple-touch-icon.png" />

    <link rel="stylesheet" href="lib/touch/resources/css/sencha-touch.css" type="text/css">
    <link rel="stylesheet" href="resources/css/application.css" type="text/css">
</head>
<body>
    <!--
        This is your development file. This should load the debug versions of third party library, and load
        your application file by file (the Sencha Command generators help automate this). See deploy/index.html
        for the production version of this file
     -->

    <script type="text/javascript" src="lib/touch/sencha-touch-debug.js"></script>
    <script type="text/javascript" src="lib/touch/pkgs/platform/mvc.js"></script>

    <div id="sencha-app">
        <script type="text/javascript" src="app/routes.js"></script>
        <script type="text/javascript" src="app/app.js"></script>

        <!-- Place your model files here -->
        <div id="sencha-models">
            <script type="text/javascript" src="app/models/web2go.js"></script>
            <script type="text/javascript" src="app/models/vplaene.js"></script>
            <script type="text/javascript" src="app/models/mensa.js"></script>
        </div>

        <!-- Place your view files here -->
        <div id="sencha-views">
            <script type="text/javascript" src="app/views/Viewport.js"></script>
            <script type="text/javascript" src="app/views/HomePanel.js"></script>
            <script type="text/javascript" src="app/views/vplaene/VplaenePanel.js"></script>
            <script type="text/javascript" src="app/views/mensa/MensaCampus.js"></script>
            <script type="text/javascript" src="app/views/mensa/MensaDetail.js"></script>
        </div>

        <!-- Place your controller files here -->
        <div id="sencha-controllers">
            <script type="text/javascript" src="app/controllers/web2go.js"></script>
            <script type="text/javascript" src="app/controllers/vplaene.js"></script>
            <script type="text/javascript" src="app/controllers/mensa.js"></script>
        </div>

    </div>
</body>
</html>