<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>IP Cam</title>
        <meta name="description" content="Mit diesem einzigartigen Tool können Sie über ihren Browser die Webcam eines Computers oder Smartphones als Überwachungskamera nutzen.">
        <meta name="keywords" content="WebRTC, SpyCam, Free, Valentin Giselbrecht, gise, Überwachung, Browser, webcam, ip cam">
        <meta name="author" content="Valentin Giselbrecht">
        <meta property="og:title" content="SpyCam - The Browser IP Cam" />
        <meta property="og:description" content="Mit diesem einzigartigen Tool können Sie über ihren Browser die Webcam eines Computers oder Smartphones als Überwachungskamera nutzen." />
        <meta property="og:url" content="http://spy.gise.at/" />
        <meta property="og:image" content="http://spy.gise.at/images/spycam.png" />
        <meta content='True' name='HandheldFriendly' />
        <meta name="viewport" content="width=430px" />  
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
        <link media="screen and (min-width: 700px)" rel="stylesheet" href="style.css" type="text/css"/>
        <script src='https://cdn.firebase.com/v0/firebase.js'></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script> 
        <script src="script.js"></script> 
    </head>
    <body>
        <header>
            <ul class="headerTextReihe">
                <li class="headerText headerTextSmall"><a target="_blank" href="http://www.gise.at">Entwickler</a></li>
                <li class="headerText headerTextLarge">IP Cam</li>
                <li class="headerText headerTextSmall"><a target="_blank"  href="http://www.gise.at/de/impressum.html">Impressum</a></li>
            </ul>
        </header>
        <div id="content">
            <div id="ViewPort">
                
            </div>
            <div id="Dialog">
                <div id="DialogBackground"></div>
                <div id="DialogFront">
                    <img src="images/loader.gif" class="loading" alt="loading"/>
                    <div class="loadingText">
                        Daten werder geladen...
                    </div>
                </div>
            </div>
        </div>
        <footer>

        </footer>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-42918844-1', 'gise.at');
            ga('send', 'pageview');

        </script>
    </body>
</html>