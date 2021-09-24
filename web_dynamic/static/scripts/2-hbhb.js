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
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data){
		if (data.status === 'OK'){
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	})
});
