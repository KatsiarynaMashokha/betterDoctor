import { Doctor } from './../js/doctor.js';

$(function() {
  $('#userInfo').submit(function(event){
    event.preventDefault();
    let issue = $('#symptom').val();
    console.log(issue);

    Doctor.apiRequest(issue, displayDoctors);



    function displayDoctors(array) {
      array.forEach(function(item){
        $('#results').append("<li>" + item.name + '<p>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients + '<br>' + 'Website: ' + item.website);
      });

      $('input').val('');
    }
  });
});
