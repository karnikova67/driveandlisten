window.onload = function() {
  document.getElementById('button1').onclick = reply_click;
  document.getElementById('button2').onclick = reply_click;
  document.getElementById('R1_0').onclick = alterPlaybackRate;
  document.getElementById('R1_5').onclick = alterPlaybackRate;
  document.getElementById('R2_0').onclick = alterPlaybackRate;
  document.getElementById('VOLUME').onclick = alterVolume;
}

function alterPlaybackRate() {
  var rate = parseFloat(this.id.substr(1).replace("_", "."));
  console.log('rate: ' + rate);
  player.setPlaybackRate(rate);
}

function alterVolume() {
  console.log('VOLUME: ' + this.value);
  if (this.value === 'ON'){
    player.setVolume(0);
    this.value = 'OFF';
  } else {
    player.setVolume(100);
    this.value = 'ON';
  }
}

var reply_click = function()
{
  if (this.id === 'button1') {
    player.loadVideoById({'videoId': '4NQfxrQVoFk',
                 'startSeconds': 5});
  }
  else {
    player.loadVideoById({'videoId': 'k5tqDgCosx0',
                 'startSeconds': 5});
  }


}
