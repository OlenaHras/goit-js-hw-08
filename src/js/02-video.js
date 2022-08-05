import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);

    

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", `${data.seconds}`);
  console.log(data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
