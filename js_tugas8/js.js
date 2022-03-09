//script tugas1
$('document').ready(function () {
  $('#beruang').mouseover(function () {
    $(this).css({
      background: "url('fotoBinatang/bear.jpg')",
    });
    $('#bear').css({
      opacity: 0,
    });
  });
  $('#beruang').click(function () {
    $('<audio></audio>')
      .attr({
        src: 'suaraBinatang/bear.mp3',
        volume: 0.4,
        autoplay: 'autoplay',
      })
      .appendTo('body');
  });
  $('#beruang').mouseout(function () {
    $(this).css({
      background: 'wheat',
    });
    $('#bear').css({
      opacity: 100,
    });
  });

  $('#sapi').mouseover(function () {
    $(this).css({
      background: "url('fotoBinatang/sapi.jpg')",
    });
    $('#cow').css({
      opacity: 0,
    });
  });
  $('#sapi').click(function () {
    $('<audio></audio>')
      .attr({
        src: 'suaraBinatang/cow.mp3',
        volume: 0.4,
        autoplay: 'autoplay',
      })
      .appendTo('body');
  });
  $('#sapi').mouseout(function () {
    $(this).css({
      background: 'wheat',
    });
    $('#cow').css({
      opacity: 100,
    });
  });

  $('#kucing').mouseover(function () {
    $(this).css({
      background: "url('fotoBinatang/cat.jpg')",
    });
    $('#cat').css({
      opacity: 0,
    });
  });
  $('#kucing').click(function () {
    $('<audio></audio>')
      .attr({
        src: 'suaraBinatang/cat.mp3',
        volume: 0.4,
        autoplay: 'autoplay',
      })
      .appendTo('body');
  });
  $('#kucing').mouseout(function () {
    $(this).css({
      background: 'wheat',
    });
    $('#cat').css({
      opacity: 100,
    });
  });

  $('#ayam').mouseover(function () {
    $(this).css({
      background: "url('fotoBinatang/ayam.jpg')",
    });
    $('#chicken').css({
      opacity: 0,
    });
  });
  $('#ayam').click(function () {
    $('<audio></audio>')
      .attr({
        src: 'suaraBinatang/ayam.mp3',
        volume: 0.4,
        autoplay: 'autoplay',
      })
      .appendTo('body');
  });
  $('#ayam').mouseout(function () {
    $(this).css({
      background: 'wheat',
    });
    $('#chicken').css({
      opacity: 100,
    });
  });

  $('#burung').mouseover(function () {
    $(this).css({
      background: "url('fotoBinatang/bird.jpg')",
    });
    $('#bird').css({
      opacity: 0,
    });
  });
  $('#burung').click(function () {
    $('<audio></audio>')
      .attr({
        src: 'suaraBinatang/bird.mp3',
        volume: 0.4,
        autoplay: 'autoplay',
      })
      .appendTo('body');
  });
  $('#burung').mouseout(function () {
    $(this).css({
      background: 'wheat',
    });
    $('#bird').css({
      opacity: 100,
    });
  });
});
//akhir script tugas 1

//script tugas 2
$('document').ready(function () {
  $('.flip').click(function () {
    $('#compprof').slideToggle('fast');
  });
  $('.visi').click(function () {
    $('#visi').slideToggle('fast');
  });
  $('.desc').click(function () {
    $('#desc').slideToggle('fast');
  });
});
//akhir script tugas 2
