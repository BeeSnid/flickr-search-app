$(document).ready(funtion (){
  $('form').submit(function(evt) {
    evt.preventDefault();
    var $searchField = $('#search');
    var $submitButton = $('#submit');

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching...");

    var flickerAPI= "http://api/flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal =$searchField.val();
    var flickrOptions= {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML =<'ul'>;
      $.each(data.items, function (i, photo){
        photoHTML += '<li class="gris-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" <class= "image">';
        photoHTML += '<img src="' + photo.media.n + '"><la></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickerOptions, displayPhotos);
  });
});
