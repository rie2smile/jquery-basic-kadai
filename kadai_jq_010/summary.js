$(function () {

    $('#change-color').on({
        'click': () => {
          // 文字を赤 
          $('#target').css('color','red');
        }
    });

    $('#change-text').on({
        'click': () => {
          // 文字をHelloにする 
          $('#target').text('Hello');
        }
    });

    $('#fade-out').on('click', function() {
      // フェードアウトする
      $('#target').fadeOut(2000, function(){
        alert('fade-out完了');
    });

   $('#fade-in').on('click', function() {
    // フェードインする
      $('#target').fadeIn(2000, function(){
        alert('fade-in完了');
  });
});
})
})