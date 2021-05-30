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
        name: '太阳照常升起',
        artist: '久石譲',
        url: 'http://music.163.com/song/media/outer/url?id=441722.mp3',
        cover: 'http://p3.music.126.net/drqGdK7zgW7B7IFl4lWpoQ==/109951163369835547.jpg'
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
        name: '奔赴星空',
        artist: '尹昔眠',
        url: 'https://sharefs.yun.kugou.com/202105300937/5e1c3f9a6e8ed551f097d559537bdeb4/KGTX/CLTX001/5742da79d2d630cd54ecc8f9d94f4d78.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20210402/20210402114314135880.jpg',
        lrc: 'images/奔赴星空-尹昔眠.lrc'
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
      },
      {
        name: '悬崖之上',
        artist: '周深',
        url: 'https://sharefs.yun.kugou.com/202105291906/8af4de3aa1a212331cf653c031971f2b/KGTX/CLTX001/ab256a0c2d6d17ced67ee0fccdf8fd4f.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20210424/20210424114416517267.jpg',
        lrc: 'images/悬崖之上-周深.lrc'
      },
      {
        name: '在此拥抱',
        artist: 'NA',
        url: 'https://sharefs.yun.kugou.com/202105300934/43509ca81fd5488a259912e745f87718/KGTX/CLTX001/48f8c84be99a38043478fcc8785b5d77.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20201215/20201215192102367757.jpg',
        }
    ]
});
