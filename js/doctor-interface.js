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
      Doctor.apiRequestDoctorSearch(fName, displayDoctors);
  });

  function displayDoctors(array) {
    let resOne = 'resultsOne';
    if (array.length === 0) {
      $('#resultsOne').text('No results found. Check you query please');
    } else {
      $('#resultsOne').text('');
      array.forEach(function(item){
        $('#resultsOne').append('<h5>' + item.name + '</h5>' + '<p>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients + '<br>' + 'Website: ' + item.website);
      });
    }
  }

  function displaySearchedDoctor(array) {
    if (array.length === 0) {
      $('#resultsTwo').text('No results found. Check you query please');
    } else {
    $('#resultsTwo').text('');
    array.forEach(function(item){
      $('#resultsTwo').append('<h5>' + item.name + '</h5>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients);
    });
  }
}
});
