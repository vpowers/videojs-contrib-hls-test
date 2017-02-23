import videojs from 'video.js';
import 'videojs-contrib-hls';

function createPlayer(id, options) {

    var sources = [{src: 'http://wowza-1646319330.us-east-1.elb.amazonaws.com/123-Live/Alex-Demo-Prep/manifest.m3u8', type: 'application/x-mpegURL'}];

    var player = videojs(id, options);
    player.src(sources);
}

export default createPlayer;
