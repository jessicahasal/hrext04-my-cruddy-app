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


  $("#happy-button").on("click", function() {
     $("body").first().css("background-image", "url(https://wallpaperlayer.com/img/2015/10/sunshine-wallpaper-7471-7760-hd-wallpapers.jpg"); 
     $("body").first().css("width","100%")
     $("body").first().css("height", "100vh") 
     $(".container").first().css("font-family", "Papyrus, cursive");
     $(".header").first().css("font-family", "Papyrus, cursive");
     $(".user-input-message").first().css("font-family", "Papyrus, cursive");
  });
  $("#sad-button").on("click", function() {
     $("body").first().css("background-image", "url(http://www.freeimageslive.com/galleries/sports/moods%20emotions/pics/wet_weather_beachP1013462.jpg"); 
     $("body").first().css("width","100%")
     $("body").first().css("height", "100%") 
     $(".container").first().css("font-family", "Brush Script MT, cursive");
     $(".header").first().css("font-family", "Brush Script MT, cursive");
     $(".user-input-message").first().css("font-family", "Brush Script MT, cursive");
     
  });
  $("#mad-button").on("click", function() {
     $("body").first().css("background-image", "url(https://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg"); 
     $("body").first().css("width","100%")
     $("body").first().css("height", "100%")
     $(".container").first().css("font-family", "Party LET, fantasy");
     $(".header").first().css("font-family", "Party LET, fantasy");
     $(".user-input-message").first().css("font-family", "Party LET, fantasy");
     $(".header").first().css("color", "white")
  });

  $(".footer").on("click", function() {
     $("body").first().css("background-image", "url(https://www.101dogbreeds.com/wp-content/uploads/2014/10/Pembroke-Welsh-Corgi-Puppies.jpg"); 
     $("body").first().css("width","100%")
     $("body").first().css("height", "100%")

  })


});






  //opponent, date, points, assists, steals, rebounds, blocks
