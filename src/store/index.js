import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postList: [
    {
      "userId": 1,
      "userName": "Captain America",
      "userIcon": "https://64.media.tumblr.com/3956a5fb5563f14f6b060dc98c3a2dda/tumblr_nogjowrCWK1t7cmmpo1_1280.png",
      "userPostImage": "https://i.hurimg.com/i/hdn/75/0x0/59c6efcd45d2a027e839d5cf.jpg",
      "userPostContent": "with the gang #avengersassemble",
      "userPostTime": "Oct 24, 2021 13:00",
      "likes": 0
    },
    {
      "userId": 2,
      "userName": "Ironman",
      "userIcon": "https://www.looper.com/img/gallery/biggest-robert-downey-jr-moments-that-transformed-his-life/l-intro-1629919156.jpg",
      "userPostImage": "https://cdn.vox-cdn.com/thumbor/0_asqtMj_p4qHF4L-mX-jKdx298=/0x0:3000x1779/1200x800/filters:focal(1212x167:1692x647)/cdn.vox-cdn.com/uploads/chorus_image/image/55400215/ktokatitmir0.0.jpg",
      "userPostContent": "God i am so great #blessed",
      "userPostTime": "Oct 24, 2021 13:30",
      "likes": 0
    },
    {
      "userId": 3,
      "userName": "Hulk",
      "userIcon": "https://i.ytimg.com/vi/EcLfyxzV4lI/maxresdefault.jpg",
      "userPostImage": "",
      "userPostContent": "They say 'HULK SMASH', but they don't ask 'why hulk smash?'",
      "userPostTime": "Oct 24, 2021 14:00",
      "likes": 0
    },
    {
      "userId": 4,
      "userName": "Black Widow",
      "userIcon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjduf4LwKvjat5ipbhAmv7932UD6FeNrQvQ&usqp=CAU",
      "userPostImage": "",
      "userPostContent": "When can we get a girls night 👀👀",
      "userPostTime": "Oct 24, 2021 14:30",
      "likes": 0
    },
    {
      "userId": 5,
      "userName": "Black Panther",
      "userIcon": "https://s2.dmcdn.net/v/NQtDl1QrGd3NMjejE/x240",
      "userPostImage": "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/shutterstock_87872359.jpg",
      "userPostContent": "Wakanda has entered crippling depression",
      "userPostTime": "Oct 24, 2021 15:00",
      "likes": 0
    },
    {
      "userId": 6,
      "userName": "Thor",
      "userIcon": "http://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/39/19839/thor.jpg",
      "userPostImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/timcphzlniwcp8yl_1598445289.jpeg",
      "userPostContent": "Mondays",
      "userPostTime": "Oct 24, 2021 15:30",
      "likes": 0
    },
    {
      "userId": 7,
      "userName": "Spiderman",
      "userIcon": "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG",
      "userPostImage": "https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg",
      "userPostContent": "Me figuring out who is ruining my life",
      "userPostTime": "Oct 24, 2021 16:00",
      "likes": 0
    },
    {
      "userId": 8,
      "userName": "Doctor Strange",
      "userIcon": "https://media.vanityfair.com/photos/580a0b41ceb79a6c5ca4c5ef/2:3/w_640,h_960,c_limit/benedict-cumberbatch-doctor-strange.jpg",
      "userPostImage": "https://ichef.bbci.co.uk/news/976/cpsprodpb/98F4/production/_120365193_sbt-25882_r.jpg",
      "userPostContent": "Yo who this Shang-Chi dude",
      "userPostTime": "Oct 24, 2021 16:30",
      "likes": 0
    },
    {
      "userId": 9,
      "userName": "Hawkeye",
      "userIcon": "https://pyxis.nymag.com/v1/imgs/158/437/92090f1cf4447527910a035d5aedf239e3-hawkeye-jeremy-renner.rsquare.w1200.jpg",
      "userPostImage": "",
      "userPostContent": "Out of arrows 😭",
      "userPostTime": "Oct 24, 2021 17:00",
      "likes": 0
    },
    {
      "userId": 10,
      "userName": "Thanos",
      "userIcon": "https://cdn.vox-cdn.com/thumbor/JBJzwCXmTJs0NgnFtSPm_f5SMyw=/0x0:2000x1000/1200x800/filters:focal(654x138:974x458)/cdn.vox-cdn.com/uploads/chorus_image/image/59408999/Thanos_MCU.0.jpg",
      "userPostImage": "https://i.pinimg.com/736x/f6/36/c5/f636c584c3ef183b0a6f4b4754d4fcce.jpg",
      "userPostContent": "I have acquired Admin status, i will delete half of the users on this app",
      "userPostTime": "Oct 24, 2021 17:30",
      "likes": 0
    }

    ],
    testString: 'testing, testing, 123',
  },
  getters: {
    post: state => {
      var post = state.post.map(post=> {
        return{
        userId: post.userId
      }
    });
    return post
  },
    postsList: state => {
      var postsList = state.postList.map(post => {
        return{
          userName: post.userName,
          userIcon: post.userIcon,
          userPostImage: post.userPostImage,
          userPostContent: post.userPostContent,
          userPostTime: post.userPostTime
        }
      });
     return postsList
    },
  },
  mutations: {
    IncreaseLikes: state => {
     state.post.forEach(post => {
     post.likes += 1;
     })
  }
}})
