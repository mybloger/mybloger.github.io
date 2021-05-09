const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    autoplay: false,
    audio: [
      {
        name: "独行",
        artist: 'whtlook',
        url: 'http://music.163.com/song/media/outer/url?id=410710596.mp3',
        cover: 'http://p4.music.126.net/K5y9QBRdn273xRcatRf_6A==/109951164595850950.jpg',
      },
      {
        name: 'Let Her Go',
        artist: 'Passenger',
        url: 'http://music.163.com/song/media/outer/url?id=18161816.mp3',
        cover: 'http://p3.music.126.net/uYgsk7GFZ_C-dFPjN7V_Hg==/109951163450380228.jpg',
        lrc: 'images/Let Her Go-Passenger.lrc'
      },
      {
        name: '保 留',
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
      },
      {
        name: 'Midnight',
        artist: 'Dave Greening',
        url: 'http://music.163.com/song/media/outer/url?id=1294706.mp3',
        cover: 'http://p4.music.126.net/vnBKR01jn8rZlH5M4UHKRQ==/6665239487783748.jpg',
      },
      {
        name: '我喜欢上你时的内心活动',
        artist: '陈绮贞',
        url: 'http://music.163.com/song/media/outer/url?id=471403427.mp3',
        cover: 'http://p4.music.126.net/AyyxC4stCu-Pm5qa8gaqDQ==/18762066418246617.jpg',
        lrc: 'images/我喜欢上你时的内心活动-陈绮贞.lrc'
      },
      {
        name: 'Jocelin',
        artist: 'Leddra Chapman',
        url: 'http://music.163.com/song/media/outer/url?id=16532462.mp3',
        cover: 'http://p4.music.126.net/JiLQ3rs_Owe0iAtNihT2pg==/109951164755115505.jpg',
        lrc: 'images/Jocelin-Leddra Chapman.lrc'
      },
      {
        name: 'Chasing The Wind',
        artist: 'Josiah James',
        url: 'http://music.163.com/song/media/outer/url?id=1596241.mp3',
        cover: 'http://p4.music.126.net/6nthhVQvSEYja3wcNGQ2qw==/1790004930019757.jpg',
        lrc: 'images/Chasing The Wind-Josiah James.lrc'
      },
      {
        name: '坠落星空',
        artist: '小星星Aurora',
        url: 'http://music.163.com/song/media/outer/url?id=1351520305.mp3',
        cover: 'http://p3.music.126.net/-kDO5LiKki3bmeF21MaCuQ==/109951163917806959.jpg',
        lrc: 'images/坠落星空-小星星Aurora.lrc'
      },
        {
        name: '吴哥窟',
        artist: '吴雨霏',
        url: 'http://music.163.com/song/media/outer/url?id=298258.mp3',
        cover: 'http://p4.music.126.net/-U2K8GKlASCSXK0cRre1gA==/109951163188718762.jpg',
        lrc: 'images/吴哥窟-吴雨霏.lrc'
      }
    ]
});
