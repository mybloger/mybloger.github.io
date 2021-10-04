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
        name: 'Natalie',
        artist: 'Milk & Bone',
        url: 'http://music.163.com/song/media/outer/url?id=426852405.mp3',
        cover: 'https://p2.music.126.net/_k93ENwnpVdDMzREnFy0wQ==/109951163109566356.jpg?param=130y130',
        lrc: 'images/Let Her Go-Passenger.lrc'
      },
      {
         name: 'Carry You',
         artist: 'Ruelle / Fleurie',
         url: 'http://music.163.com/song/media/outer/url?id=549941712.mp3',
         cover: 'https://p2.music.126.net/v1Uk3MbeZ2dlF-Og9FclEQ==/109951163237368778.jpg?param=130y130',
         lrc: 'images/Ruelle-Carry You.lrc'
      },
      {
         name: 'If You Love Her',
         artist: 'To Be Frank',
         url: 'http://music.163.com/song/media/outer/url?id=26284002.mp3',
         cover: 'https://p1.music.126.net/stofV9C6pRJpw57kYVufDQ==/109951163373915782.jpg?param=130y130',
         lrc: 'images/To Be Frank-If You Love Her.lrc'
      },
    ]
});
