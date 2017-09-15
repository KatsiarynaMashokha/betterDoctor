import { Doctor } from './../js/doctor.js';

$(function() {
  $('#userInfo').submit(function(event){
    event.preventDefault();
    let issue = $('#symptom').val();
    console.log(issue);

    Doctor.apiRequest(issue, displayDoctors);



    function displayDoctors(array) {
      array.forEach(function(item){
        $('#results').append("<li>" + item.name + '<p>' + item.address + 'Phone: ' + item.phone + 'Accepts new patients: ' + item.acceptsNewPatients + 'Website: ' + item.website);
      });

      $('input').val('');
    }
  });
});
