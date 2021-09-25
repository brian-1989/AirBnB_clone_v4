/* This script validates the checkbox, if the checkbox is checked display the name
of the article. Otherwise, remove the name of the article. And the api_status checker */
document.addEventListener('DOMContentLoaded', function () {
    const dictAmenity = {};
    $('input[type=checkbox]').change(
      function () {
        if ($(this).is(':checked')) {
          dictAmenity[$(this).attr('data-id')] = $(this).attr('data-name');
          console.log($(this).attr('data-id'));
        } else {
          delete dictAmenity[$(this).attr('data-id')];
        }
        console.log(dictAmenity);
        $('.amenities h4').text(Object.values(dictAmenity).join(', '));
      }
    );
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({}),
      contentType: 'application/json',
      dataType: 'json',
      success: function (data) {
        $.each(data, function (values) {
          $('.places').append(`<article>
                    <div class="title_box">
                    <h2>` + data[values].name + `</h2>
                    <div class="price_by_night">` + data[values].price_by_night + `</div>
                    </div>
                    <div class="information">
                      <div class="max_guest">` + data[values].max_guest + (data[values].max_guest !== 1 ? 'Guests' : 'Guest') + `</div>
                      <div class="number_rooms">` + data[values].number_rooms + (data[values].number_rooms !== 1 ? 'Bedrooms' : 'Bedroom') + `</div>
                      <div class="number_rooms">` + data[values].number_bathrooms + (data[values].number_bathrooms !== 1 ? 'Bathrooms' : 'Bathroom') + `</div>
                    </div>
                    <div class="user">
                      <b>Owner:</b>
                    </div>
                    <div class="description">` + data[values].description + `</div>
                  </article>`);
        });
      }
    });
    $('button').click();
  });
  