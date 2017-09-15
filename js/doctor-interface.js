import { Doctor } from './../js/doctor.js';

$(function() {
  $('#userSymptom').submit(function(event){
    event.preventDefault();
    let issue = $('#symptom').val();
    Doctor.apiRequestSymptom(issue, displayDoctors);
  });


  $('#doctorName').submit(function(event){
      event.preventDefault();
      let fName = $('#firstName').val();
      let lName = $('#lastName').val();
      console.log(fName);
      console.log(lName);
      Doctor.apiRequestDoctorSearch(fName, lName, displaySearchedDoctor);
  });

    $('input').val('');

  function displayDoctors(array) {
    array.forEach(function(item){
      $('#results').append("<li>" + item.name + '<p>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients + '<br>' + 'Website: ' + item.website);
    });
  }

  function displaySearchedDoctor(array) {
    array.forEach(function(item){
      $('#results').append("<li>" + item.name + '<p>' + item.address + '<br>' + 'Phone: ' + item.phone + '<br>' + 'Accepts new patients: ' + item.acceptsNewPatients);
    });
  }


});
