$(function(){
  $('#submit-btn').on('click', function(event) {
    event.preventDefault();
    var city = $('#city-type').val();
    if(city === 'New York' || city === 'New York City'){
      $('body').attr('class', 'nyc')
    }
  })
});

