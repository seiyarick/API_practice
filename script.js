const API_KEY = "9ee5f50afbbf0784320a23e4b18be786";
// API_KEY定数には取得したAPIキーを代入

$(function(){
  $('#btn').on('click',function(){
  // btnをクリックしたときに↓
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      // urlではAPIにリクエストするURLを指定。$('#cityname').val()でcitynameの値("Tokyo"など)を取得。API_KEYは取得しているので異常を結合。
      // 例  https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=9ee5f50afbbf0784320a23??????????
      dataType:'jsonp',
      // レスポンスとして取得するデータの型を指定。今回はJSONで受け取るのでdateType:'jsonp'
    }).done(function (data){
      // 通信成功
      // 「通信成功」とは今回だとAPIが正常に呼び出せるという意味
      // 引数内(data)に取得した結果が入る


      // $('#id名').text(JSONから欲しい値)
      $('#place').text(data.name);
      // 位置（Tokyoなど）
      // htmlでのid="place"の取得した結果のnameを取得。nameはAPI内のnameから
      $('#temp_max').text(data.main.temp_max);
      // 最高気温
      $('#temp_min').text(data.main.temp_min);
      // 最低気温
      $('#humidity').text(data.main.humidity);
      // 湿度
      $('#speed').text(data.wind.speed);
      // 風速
      $('#weather').text(data.weather[0].main);
      // 天気
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    }).fail(function (data){
      // 通信失敗
      alert('通信に失敗しました');
    });
  });
});