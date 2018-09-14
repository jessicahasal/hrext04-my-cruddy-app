$(document).ready(function() {

  var displayEntries = function(){
    var keys = Object.keys(localStorage)
    var $entries = $('.entries');
    $entries.html('')

    for(var i = 0; i < keys.length; i++){
    
      var $box = $('<div class="box"></div>');
      var $entry = $('<div class="entry"></div>');
      var $journalMessage = $('<div class="journalMessage"></div>');
    
      var journalObj = JSON.parse(localStorage[keys[i]]) ;
      var message = journalObj.message ;
      $entry.text(keys[i])
      $entry.prependTo($box);
      $journalMessage.text(message);
      $journalMessage.appendTo($box);
      $box.appendTo($entries);  
    }
  }
  displayEntries()  
  //end of refresh page button

  $(".add-text-btn").on("click", function(){
   
    var journalObj = {}
    
    let title = $(".user-input-title").val();
    let message = $(".user-input-message").val();
    

    if(title === ''){
      alert("Cannot submit empty form")
    } else {
      $(".user-input-title").val("");
      $(".user-input-message").val("");


      journalObj['message'] = message;


      localStorage.setItem(title, JSON.stringify(journalObj));
    
      var localStorageKeys = Object.keys(localStorage)
      var $entries = $('.entries');
      $entries.html('')

      displayEntries() 
    }  
  });
  //end of click 'add text button'
  
  $(".entries").on("click", ".entry", function(e){
    var journalObj = JSON.parse(localStorage.getItem(e.target.innerText))
    
    $(".user-input-title").val(e.target.innerText);
    $(".user-input-message").val(journalObj.message);

  });

  $(".del-text-btn").on("click", function() {
    alert('ITEM DELETED');
    localStorage.removeItem( $('.user-input-title').val() );
    $(".user-input-title").val("");
    $(".user-input-message").val("");


    displayEntries();
  });

   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys

  //opponent, date, points, assists, steals, rebounds, blocks
  $("#happy-button").on("click", function() {
     $("body").first().css("background-color", "#ffff66");
  });
  $("#sad-button").on("click", function() {
     $("body").first().css("background-color", "#0099cc");
  });
  $("#mad-button").on("click", function() {
     $("body").first().css("background-color", "#ff3300");

  });


});






  //opponent, date, points, assists, steals, rebounds, blocks
