let apiKey = require('./../.env').apiKey;

export let Doctor = {
  apiRequestSymptom: function(issue, displayFunction) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.5231%2C%20-122.6765%2C50&skip=0&limit=20&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        this.saveDoctorsToArray(response, displayFunction);
      },
      error: function() {
        $('#results').text('No doctors found');
      }
    });
  },

  apiRequestDoctorSearch: function(firstName, displayFunction) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/practices?name=${firstName}%20&location=45.5231%2C%20-122.6765%2C50&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        this.getSearchedDoctorInfo(response, displayFunction);
      },
      error: function() {
        $('#results').text('No doctors found');
      }
    });
  },

  saveDoctorsToArray: function(response, displayFunction) {
    let that = this;
    let doctorsArray = [];
    response.data.forEach(function(doctor){
      doctorsArray.push(
        {
          name: doctor.profile.first_name + " " + doctor.profile.last_name,
          address:  doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + ", " + doctor.practices[0].visit_address.zip,
          phone: doctor.practices[0].phones[0].number,
          website: that.formatWebsite(doctor.practices[0].website),
          acceptsNewPatients: that.acceptsPatients(doctor.practices[0].accepts_new_patients)
        });
    });
      console.log(doctorsArray);
      displayFunction(doctorsArray);
    },

    getSearchedDoctorInfo: function(response, displayFunction) {
      // if (response.length === 0) {
      //   return 'Please check your query';
      // }
      let doctorsArray = [];
      let that = this;
      response.data.forEach(function(doctor) {
        doctorsArray.push(
          {
            name: doctor.name,
            address: doctor.visit_address.street + ", " + doctor.visit_address.city + ", " + doctor.visit_address.state + ", " + doctor.visit_address.zip,
            phone: doctor.phones[0].number,
            acceptsNewPatients: that.acceptsPatients(doctor.accepts_new_patients)
          });
      });
      console.log(doctorsArray);
      displayFunction(doctorsArray);
    },


    acceptsPatients(value) {
      if (value === true) {
        return 'Yes';
      } else {
        return 'No';
      }
    },

    formatWebsite(value) {
      if (value == null) {
        return 'No Website';
      } else {
        return value;
      }
    }
  };
