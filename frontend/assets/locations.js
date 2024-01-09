const locations = [
  {
    id: '1',
    image: 'https://c4.wallpaperflare.com/wallpaper/135/281/121/guam-beaches-hd-wallpaper-wallpaper-preview.jpg',
    title: '괌',
    geo: '미국, 괌',
    selected: true,
    first: {coordinate:{latitude: 13.4443, longitude: 144.7937, latitudeDelta: 0.9, longitudeDelta: 0.9}},
    famous: [{
      title: "괌 프리미어 아울렛",
      image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_830/v1/crm/guam/gpo0-b979276c5056a36_b9792e33-5056-a36a-0c37ad25314835d7.jpg',
      coordinate: {latitude: 13.490060549549591, longitude: 144.78182780991438},
      link: 'https://kr.trip.com/travel-guide/shops/tamuning/guam-premier-outlets-10566981/'
    },
    {
      title: "투몬 해변",
      image: 'https://a.cdn-hotels.com/gdcs/production49/d1519/6f89ae5d-542c-4fee-b333-a35761fe33d1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 13.516916403686462, longitude: 144.80486721118154},
      link: 'https://kr.trip.com/travel-guide/attraction/tamuning/tumon-bay-98719/?locale=ko-KR&curr=KRW'
    },
    {
      title: "차모로 빌리지",
      image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/guam/ThingsToDo_Shopping_ChamorroVillage_c22f2416-b52d-4289-a7b3-4aa6c3d11b36.jpg',
      coordinate: {latitude: 13.477603788197595, longitude: 144.75230975409238},
      link: 'https://kr.trip.com/travel-guide/attraction/hagatna/chamorro-village-18584617/?locale=ko-KR&curr=KRW'
    }]
  },
  {
    id: '2',
    image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000507/img/basic/a2000507_main.jpg',
    title: '오사카',
    geo: '일본, 오사카',
    selected: true,
    first: {coordinate:{latitude: 34.67999660079476, longitude: 135.44107194802177, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "오사카성",
      image: 'https://a.cdn-hotels.com/gdcs/production188/d1049/eda6e352-4711-4542-bc24-fbf43f612931.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 34.686596348100906, longitude: 135.52726384575524},
      link: 'https://kr.trip.com/travel-guide/attraction/osaka/osaka-castle-82415/'
    },
    {
      title: "도톤보리",
      image: 'https://a.cdn-hotels.com/gdcs/production68/d1303/c8fa75d8-6932-459b-9660-8340f097ebd7.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',      
      coordinate: {latitude: 34.66975753624738, longitude: 135.5016328948499},
      link: 'https://kr.trip.com/travel-guide/destination/dotonbori-2134969/'
    },
    {
      title: "유니버셜 스튜디오 재팬",
      image: 'https://a.cdn-hotels.com/gdcs/production137/d1766/cc50b4a1-2ed1-442f-9892-a9233ff9ef8c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 34.66624112243922, longitude: 135.43227553627267},
      link: 'https://www.usj.co.jp/web/ko/kr'
    }]
  },
  {
    id: '3',
    image: 'https://thumb.tidesquare.com/common_cdn/upload/image/theme/2022/11/04/xndjqltm_xpakrlghlrwjs_qkdzhr_20221104171554.jpg',
    title: '방콕',
    geo: '태국, 방콕',
    selected: true,
    first: {coordinate:{latitude: 13.774418802133331, longitude: 100.5120233016331 , latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "왕궁과 왓 프라캐우",
      image: 'https://a.cdn-hotels.com/gdcs/production168/d707/c3156d7b-ce5a-4a5c-9a99-002b0ff57fe8.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 13.750605925141384, longitude: 100.491876851943},
      link: 'https://kr.trip.com/travel-guide/attraction/bangkok/the-grand-palace-77012/'
    },
    {
      title: "아이콘시암",
      image: 'https://cdn.imweb.me/upload/S2019072903e6e4e883f2a/e4f37140ef150.png',
      coordinate: {latitude: 13.727259369235172, longitude: 100.50921741385281},
      link: 'https://kr.trip.com/travel-guide/shops/bangkok/iconsiam-79150813/'
    },
    {
      title: "왓 아룬",
      image: 'https://a.cdn-hotels.com/gdcs/production19/d986/d6a5f7e6-db7c-495e-bc19-599f37c8e72f.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 13.744448598613102, longitude: 100.48857269057032},
      link: 'https://kr.trip.com/travel-guide/attraction/bangkok/wat-arun-ratchawararam-ratchawaramahawihan-77016/'
    },]
  },
  {
    id: '4',
    image: 'https://a.cdn-hotels.com/gdcs/production65/d1454/1e62baa5-5234-4b59-8c0d-83634502f5a1.jpg',
    title: '후쿠오카',
    geo: '일본, 후쿠오카',
    selected: true,
    first: {coordinate:{latitude: 33.58833462131711, longitude: 130.41117960157584, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "후쿠오카 타워",
      image: 'https://a.cdn-hotels.com/gdcs/production85/d230/d4c29d49-b0b0-424e-b618-621af10bb3e0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 33.59378464411972, longitude: 130.35155286642947},
      link: 'https://kr.trip.com/travel-guide/attraction/fukuoka/fukuoka-tower-92677/'},
    {
      title: "오호리 공원",
      image: 'https://a.cdn-hotels.com/gdcs/production36/d1594/710a4d92-7fcd-4c50-8086-70faafb0cf1d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 33.586520080407354, longitude: 130.37641507833976},
      link: 'https://kr.trip.com/travel-guide/attraction/fukuoka/ohori-park-96838/'
    },
    {
      title: "모모치 해변공원",
      image: 'https://a.cdn-hotels.com/gdcs/production124/d1226/938b60c2-ff9b-44b6-ab4c-f0b7051bae6e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 33.59525859217852, longitude: 130.35125539409066},
      link: 'https://kr.trip.com/travel-guide/attraction/fukuoka/momochi-seaside-park-15031484/'
    },]
  },
  {
    id: '5',
    image: 'https://dimgcdn.lottetour.com/TN/8a/8af572bdb6b7c6b8fd51a931d48b63cc.tn.300x200.jpg',
    title: '오키나와',
    geo: '일본, 오키나와',
    selected: true,
    first: {coordinate:{latitude: 26.347652736773323, longitude: 127.8058651978777, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "추라우미 수족관",
      image: 'https://www.ana.co.jp/japan-travel-planner/area/okinawa/0000001/okinawa_0000001_thumbnail.jpg',
      coordinate: {latitude: 26.6948360651868, longitude: 127.87809887878494},
      link: 'https://kr.trip.com/travel-guide/motobu/okinawa-churaumi-aquarium-10559035/'
    },
    {
      title: "아메리칸 빌리지",
      image: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/4hfR/image/Kpsstj8wcadBsLUwalW0y3_Z69o.jpg',
      coordinate: {latitude: 26.69495108836174, longitude: 127.87801304809909},
      link: 'https://kr.trip.com/travel-guide/attraction/chatan/american-village-10559291/?locale=ko-KR&curr=KRW'
    },
    {
      title: "세소코 해변",
      image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA3MjFfMjc2/MDAxNTAwNjI1Mjg5MjE1.7mTcvPdXaBWpyN2OAkLNWVUy7taUOA7BZJZa9h967fEg.Zq2oOhr8fqJ_z3ruDc8hnEHEwTRJ9P3TOQuawyzo9Tkg.JPEG.kbswidelake/IMG_4132.jpg?type=w800',
      coordinate: {latitude: 26.65047411568325, longitude: 127.8560978713676},
      link: 'https://kr.trip.com/travel-guide/attraction/motobu/sesoko-beach-22864770/'
    },]
  },
  {
    id: '6',
    image: 'https://a.cdn-hotels.com/gdcs/production36/d1512/fcb814af-aff9-409d-9641-aeb8d389650a.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    title: '타이베이',
    geo: '타이베이, 대만',
    selected: true,
    first: {coordinate:{latitude: 25.047725063946558, longitude: 121.56144693839876, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "타이베이 101",
      image: 'https://a.cdn-hotels.com/gdcs/production57/d1344/58e63eaa-73ec-48f3-828a-c287ee898ac3.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 25.034609816397246, longitude: 121.56410877474728},
      link: 'https://kr.trip.com/travel-guide/attraction/taipei/taipei-101-observatory-23865324/'
    },
    {
      title: "중정기념당",
      image: 'https://a.cdn-hotels.com/gdcs/production176/d1819/270e9508-cea3-4927-9c75-62d280fb078f.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 25.03644834197278, longitude: 121.52037722926106},
      link: 'https://kr.trip.com/travel-guide/destination/nangang-exhibition-center-2035836/'
    },
    {
      title: "스린 야시장",
      image: 'https://itaiwan.co.kr/files/attach/images/2022/08/26/16f7ba84e54db6c60e1db5dbb5475bef.jpg',
      coordinate: {latitude: 25.088569543871554, longitude: 121.52411651682381},
      link: 'https://kr.trip.com/travel-guide/destination/shilin-night-market-2032530/'
    },]
  },
  {
    id: '7',
    image: 'https://wimg.mk.co.kr/meet/neds/2022/03/image_readtop_2022_252256_16476552624979285.jpg',
    title: '다낭',
    geo: '베트남, 다낭',
    selected: true,
    first: {coordinate:{latitude: 16.06024699200704, longitude: 108.19050108565519,latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "떤딘성당",
      image: 'https://www.expedia.co.kr/stories/wp-content/uploads/2022/05/11-22.jpg',
      coordinate: {latitude: 16.066862620891705, longitude: 108.22322306437609},
      link: 'https://kr.trip.com/travel-guide/attraction/ho-chi-minh-city/tan-dinh-church-28575303/'
    },
    {
      title: "미케 해변",
      image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/03980327-957b-47d1-beea-d3e91e16a9a0.jpeg',
      coordinate: {latitude: 16.04743275269696, longitude: 108.25006437288536},
      link: 'https://www.tripadvisor.co.kr/Attraction_Review-g298085-d7687457-Reviews-My_Khe_Beach-Da_Nang.html'
    },
    {
      title: "바나 힐",
      image: 'https://www.expedia.co.kr/stories/wp-content/uploads/2022/05/16-17.jpg',
      coordinate: {latitude: 15.99811558941786, longitude: 107.99592759299924},
      link: 'https://www.tripadvisor.co.kr/Attraction_Review-g298085-d2255351-Reviews-Ba_Na_Hills-Da_Nang.html'
    },]
  },
  {
    id: '8',
    image: 'https://i0.wp.com/www.blockmedia.co.kr/wp-content/uploads/2021/02/%ED%99%8D%EC%BD%A9.jpg?fit=636%2C370&ssl=1',      
    title: '홍콩',
    geo: '홍콩',
    selected: true,
    first: {coordinate:{latitude: 22.324130429608736, longitude: 114.16505762748126, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "코즈웨이베이",
      image: 'https://a.cdn-hotels.com/gdcs/production187/d798/edf2bf65-a60c-4439-af55-dab3877cd306.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
      coordinate: {latitude: 22.279089547793216, longitude: 114.17867275686386},
      link: 'https://kr.trip.com/travel-guide/destination/wan-chai-and-causeway-bay-2036622/'
    },
    {
      title: "홍콩 디즈니랜드",
      image: 'https://d2mgzmtdeipcjp.cloudfront.net/files/good/2023/07/30/16907012802998.png',
      coordinate: {latitude: 22.31352210327711, longitude: 114.04106726987406},
      link: 'https://www.hongkongdisneyland.com/ko/'
    },
    {
      title: "빅토리아 하버",
      image: 'https://www.discoverhongkong.com/content/dam/dhk/intl/explore/attractions/best-ways-to-marvel-at-iconic-victoria-harbour/best-ways-to-marvel-at-iconic-victoria-harbour-1920x1080.jpg',
      coordinate: {latitude: 22.290604146068308, longitude: 114.17138708520979},
      link: 'https://www.hongkongdisneyland.com/ko/'
    },]
  },
  {
    id: '9',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/458000/458162-Oita.jpg',
    title: '오이타',
    geo: '일본, 오이타',
    selected: true,
    first: {coordinate:{latitude: 33.13617186699323, longitude: 131.35162433293502, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "유후인",
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/458000/458918-Yufuin.jpg',
      coordinate: {latitude: 33.28319007097401, longitude: 131.35925072026586},
      link: 'https://kr.trip.com/travel-guide/destination/yufuin-onsen-2134785/'
    },
    {
      title: "벳푸 온천",
      image: 'http://www.atraveltalk.com/data/editor/2007/20200710050747_205a7207e2c13bec1cf0c6fa992df44b_d1pe.png',
      coordinate: {latitude: 33.29208744859576, longitude: 131.49419870078307},
      link: 'https://kr.trip.com/travel-guide/destination/beppu-57513/'
    },
    {
      title: "우사 신궁",
      image: 'https://www.welcomekyushu.jp/cycle-in-kyushu/files/CourseImage_5bdfd141-c0e0-429e-a06f-181e7dce4083_image.jpg',
      coordinate: {latitude: 33.524297261073485, longitude: 131.37715905105273},
      link: 'https://kr.trip.com/travel-guide/attraction/usa/usa-jingu-142752131/'
    },]
  },    {
    id: '10',
    image: 'https://s3-ap-northeast-1.amazonaws.com/thegate/2020/08/12/14/32/34/tokyotower.jpg',
    title: '도쿄',
    geo: '일본, 도쿄',
    selected: true,
    first: {coordinate:{latitude: 35.671449854458686, longitude: 139.75714014568396, latitudeDelta: 1, longitudeDelta: 1}},
    famous: [{
      title: "도쿄 디즈니랜드",
      image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002465/img/basic/a0002465_main.jpg',
      coordinate: {latitude: 35.63359356349079, longitude: 139.88030842142132},
      link: 'https://www.tokyodisneyresort.jp/kr/tdl/'
    },
    {
      title: "아사쿠사 센소지",
      image: 'https://www.gotokyo.org/kr/see-and-do/attractions/images/img_2502_2.jpg',
      coordinate: {latitude: 35.71525248307753, longitude: 139.7965265061206},
      link: 'https://kr.trip.com/travel-guide/attraction/tokyo/sens-ji-78892/'
    },
    {
      title: "도쿄 타워",
      image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/26975/167529_large_1525761258.jpg?1525761258',
      coordinate: {latitude: 35.659382044965305, longitude: 139.74547576746332},
      link: 'https://kr.trip.com/travel-guide/destination/tokyo-tower-area-2040968/'      
    },]
  },
];

export default locations;