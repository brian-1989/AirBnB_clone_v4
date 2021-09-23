$(document).ready(function(){
    const dictAmenity = {};  
    if ($('div.amenities li').is(':checked')){
        dictAmenity[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
        delete dictAmenity[$(this).attr('data-id')]
    }
    $('div.amenities h4').map(dictAmenity, function(key, value) {
        return value;
    })
    /* $('div.amenities h4').text(dictAmenity.$(this).data('id')); */
})
