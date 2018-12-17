
var hash = window.location.hash;
var videoPlayer;
var idhash;
var canvas;
var ctx;

$(document).ready(function () { 
    if(hash != "")
    {
        idhash = hash;
        
        setInterval(function(){
            jQuery.ajax({
                url: "ajax.php?f=2",
                type: "POST",
                data: {
                    idhash: idhash
                },
                dataType: "json",
                success: function(result) {
                    var print = '<image id="video" src="'+result+'"/>';
                    $('#ViewPort').html(print);
                    hideLoading();
                }
            });
        }, 1000);
    }
    else
    {
        idhash = '#'+createHash();

        var print = '<div id="text">Link: ip-cam.gise.at/'+idhash+'</div>';
        print += '<video id="video"></video>'; 
        $('#ViewPort').html(print);
        videoPlayer = document.getElementById("video");
        
        
        startMedia();
        
        
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        
        setInterval(function(){
            jQuery.ajax({
                url: "ajax.php?f=1",
                type: "POST",
                data: {
                    image: makeImage(), 
                    idhash: idhash
                },
                dataType: "json"
            });
        }, 1000);
        hideLoading();
    }
});

function startMedia() {
    try {
        //Opera
        if(navigator.getUserMedia)
        {
            navigator.getUserMedia({
                video:true
            }, function(stream) {
                videoPlayer.src = stream;
                videoPlayer.play();
            }, function(err) {
                alert(error1);
            });
        }
        //Firefox
        else if(navigator.mozGetUserMedia)
        {
            navigator.mozGetUserMedia({
                video:true
            }, function(stream) {
                videoPlayer.mozSrcObject = stream;
                videoPlayer.play();
            }, function(err) {
                alert(error1);
            });
        //infoContent += '<br/>Im Firefox muss in "about:config" die Einstellung "media.peerconnection.enabled" auf "true" gesetzt sein!';
        }
        //Chrome
        else if(navigator.webkitGetUserMedia)
        {
            navigator.webkitGetUserMedia({
                video:true
            }, function(stream) {
                videoPlayer.src = window.webkitURL.createObjectURL(stream);
                videoPlayer.play();
            }, function(err) {
                alert(error1);
            });
        }
        else
        {
            alert(error2);
            infoContent = error2;
        }
    } catch(e) {
        alert(e);
    } 
}

function makeImage() {
    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
}

function showLoading()
{
    $('#Dialog').fadeIn('slow');
}

function hideLoading()
{
    $('#Dialog').fadeOut('slow');
}

function createHash()
{
    var r = "";
    for (var i = 0; i < 8; i++)
    {
        var val = Math.floor((Math.random()*26)+97);
        r += String.fromCharCode(val);
    }
    return r;
}