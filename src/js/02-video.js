import Player from '@vimeo/player';

  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);

    

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", `${data.seconds}`);
  // console.log(data.seconds)
};
const update = function () {
  
};
player.on('timeupdate', onPlay);
    // player.getVideoTitle().then(function (title) {
    //   console.log('title:', title)
    // });
  