import { Doctor } from './../js/doctor.js';

$(function() {
  $('#userSymptom').submit(function(event){
    event.preventDefault();
    let issue = $('#symptom').val();
    $('input').val('');
    Doctor.apiRequestSymptom(issue, displayDoctors);
  });

  $('#doctorName').submit(function(event){
      event.preventDefault();
      let fName = $('#firstName').val();
      $('input').val('');
      Doctor.apiRequestDoctorSearch(fName, displaySearchedDoctor);
  });

  function displayDoctors(array) {
    $('#resultsOne').text('');
    array.forEach(function(item){
      $('#resultsOne').append('<h5>' + item.name + '</h5>' + '<p>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients + '<br>' + 'Website: ' + item.website);
    });
  }

  function displaySearchedDoctor(array) {
    $('#resultsTwo').text('');
    array.forEach(function(item){
      $('#resultsTwo').append('<h5>' + item.name + '</h5>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients);
    });
  }
});
