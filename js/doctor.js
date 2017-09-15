let apiKey = require('./../env').apiKey;

export let Doctor = {
  apiRequest: function(issue) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.5231%2C%20-122.6765%2C20&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        this.saveDoctorsToArray(response);
      },
      error: function() {
        $('#results').text('No doctors found');
      }
    });
  },

  saveDoctorsToArray: function(response) {
    let doctorsArray = [];
    response.data.practices[0].forEach(function(doctor){
      doctorsArray.push(
        {
          name: doctor.name,
          address: doctor.visit_address.street + ", " + doctor.visit_address.city + ", " + doctor.visit_address.zip,
          phone: doctor.phones[0].number,
          website: doctor.website,
          acceptsNewPatients: doctor.accepts_new_patients
        });
      });
    }
  };
