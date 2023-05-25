$(document).ready(function(){
  console.log('i am ready');

  const victory = function($clickedTD){

    let rowVictory = true;

    $parentRow = $clickedTD.parent();
    const player = $('#player').html();
    $parentRow.children().each(function(){
      console.log('testing player', player, $(this).hasClass(player));
      if (!$(this).hasClass(player)) {
        rowVictory = false;
      }
    });
    return rowVictory;
  };

  $('td').click(function(){
    console.log('a td was clicked!');
    const player = $('#player').html();
    console.log('player', player);
    $(this).addClass(player);

    if (victory($(this))){
      console.log('the game has been won!');
      $('td').off('click');

      const $newElement = $(`<p>${player} has won! <a href="">Play again</a>!</p>`);

      $('body').append($newElement);
    }

    if (player === 'X') {
      $('#player').html('O');
    } else {
      $('#player').html('X');
    }
    $(this).off('click');

  });

});
