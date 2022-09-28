var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
//위의 외부에서 가져온 유튜브를 제어헤어주는 자바라이브러리가 자체적으로 'onYouTubeIframeAPIReady'라는 함수 이름을 찾는 것이기 때문에 함수이름을 바꾸면 안됨
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="palyer"></div>  //'palyer'앞에 #붙이는 거 아님!!
  new YT.Player('player', {
    videoId: 'EJF919p_hb0', //최초재생할 유튜브 영상 ID
    playerVars: {
      autoplay: 1, //자동 재생 유무
      loop: 1, //반복 재생 유무
      playlist: 'EJF919p_hb0' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}