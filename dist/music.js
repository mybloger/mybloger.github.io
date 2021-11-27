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
        name: "Remember Our Summer",
        artist: 'FrogMonster',
        url: 'http://music.163.com/song/media/outer/url?id=1384450197.mp3',
        cover: 'https://p2.music.126.net/nRKx-2GTCaO4X_tcdE-_bQ==/109951164296813169.jpg?param=130y130',
        lrc: 'images/Remember Our Summer.lrc',
      },
      {
        name: "Memories of You",
        artist: 'Approaching Nirvana',
        url: 'http://music.163.com/song/media/outer/url?id=29349792.mp3',
        cover: 'https://p2.music.126.net/moCH4T0kxyRgpbBVvZ0aVQ==/109951164852363788.jpg?param=130y130',
      },
      {
        name: "Ruhe",
        artist: 'Schiller',
        url: 'http://music.163.com/song/media/outer/url?id=3547937.mp3',
        cover: 'https://p1.music.126.net/KTH_YKLBLJ-lgZ3UiKtcXg==/620124558108745.jpg?param=130y130',
      },
      {
        name: "Count on Me",
        artist: 'Connie Talbot',
        url: 'http://music.163.com/song/media/outer/url?id=25714146.mp3',
        cover: 'https://p1.music.126.net/i6Fp9KR3weENV0KJ93L4RA==/1817492720735649.jpg?param=130y130',
        lrc: 'images/Count on Me.lrc',
      },
      {
        name: "Dragonfly Keeper",
        artist: 'Phildel',
        url: 'http://music.163.com/song/media/outer/url?id=31789196.mp3',
        cover: 'https://p2.music.126.net/EbHCV3eETDGbgzWy7pSOEQ==/109951164854444310.jpg?param=130y130',
      },
      {
        name: "有些爱情放不下",
        artist: '唐伯虎Annie',
        url: 'http://music.163.com/song/media/outer/url?id=545350530.mp3',
        cover: 'https://p2.music.126.net/jJYYkon6zBj381R02z5odQ==/109951163190140549.jpg?param=130y130',
        lrc: 'images/有些爱情放不下.lrc',
      },
      {
        name: "Trouble I'm In",
        artist: 'Twinbed',
        url: 'http://music.163.com/song/media/outer/url?id=29758362.mp3',
        cover: 'https://p1.music.126.net/Wr2o8c5t1XfJyu0QcuDA_Q==/109951165319856288.jpg?param=130y130',
        lrc: 'images/Trouble I am In.lrc',
      },
      {
        name: "Fire",
        artist: 'Gavin DeGraw',
        url: 'http://music.163.com/song/media/outer/url?id=28923579.mp3',
        cover: 'https://p1.music.126.net/LhP8grCPiS1AMY9fXV8xHA==/109951166158577644.jpg?param=130y130',
        lrc: 'images/Fire.lrc',
      },
      {
        name: "The World Retreats",
        artist: 'David ODowda',
        url: 'http://music.163.com/song/media/outer/url?id=1453024326.mp3',
        cover: 'https://p2.music.126.net/QPJoHojjPwWRPXKFBKo_zQ==/109951165037443847.jpg?param=130y130',
        lrc: 'images/The World Retreats.lrc',
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
      }
    ]
});
