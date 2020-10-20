/*
* From https://developers.google.com/youtube/iframe_api_reference#Events
*/

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'cLwk_PMFiAM',
      playerVars: { 'autoplay': 0, 'controls': 0 },
      events: {
        // 'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        // 'onClick': togglePlay
      }
    });
  }

  function onPlayerStateChange(event) {
    let foleyText = document.getElementById("foley-text")
    if(firstTime) foleyText.style.opacity = 0.1;
    if (event.data == YT.PlayerState.PLAYING) {
      // togglePlay(true);
      audiotoload.play();
      firstTime = false;
    } else if (event.data == YT.PlayerState.PAUSED) {
      // togglePlay(false);
      audiotoload.pause();
      firstTime = false;
    }
  }
