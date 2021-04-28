const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    autoplay: false,
    audio: [
      {
        name: "保留",
        artist: '黄义达',
        url: 'http://music.163.com/song/media/outer/url?id=26084247.mp3',
        cover: 'http://p4.music.126.net/91x8fsHx6_9wzrlqtcK6qA==/2485995790424429.jpg',
        lrc: 'images/保留-黄义达.lrc'
      },
      {
        name: 'Ship In The Sand',
        artist: 'Marble Sounds',
        url: 'http://music.163.com/song/media/outer/url?id=26511658.mp3',
        cover: 'http://p4.music.126.net/mRPJzDzQlELlfQ6qSlnItA==/4428832836684306.jpg',
        lrc: 'images/Ship In The Sand-Marble Sounds.lrc'
      }
    ]
});
