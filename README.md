# Better Doctor Finder
####  Better Doctor Finder is written in JavaScript with the help of the following tools: HTML, CSS, Bootstrap, jQuery, Node. Published on 09/15/2017.
#### By **Katsiaryna Mashokha**
## Description
The app uses the api of BetterDoctor (https://betterdoctor.com)
There are two different api requests are made in this app:
1) Searches for doctors on Portland area (within 50 miles) bases on the symptom:
https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.5231%2C%20-122.6765%2C50&skip=0&limit=20&user_key=${apiKey}

2) Searches for doctors based on the first and/or last name:
https://api.betterdoctor.com/2016-03-01/practices?name=${firstName}%20&location=45.5231%2C%20-122.6765%2C50&skip=0&limit=10&user_key=${apiKey}

## Development Specifications
| Behavior      | Example Input         | Example Output        |
| ------------- | ------------- | ------------- |
| App can display list of doctors based on the symptom | headache  |Cara Rozell 10100 SE Sunnyside Rd, Clackamas, OR, 97015 Phone: 5035712880 Accepts new patients: Yes Website: No Website, ....  |
| App can execute a search base on the doctor's first and/or last name  | Cara Rozell   |Cara Rozell, DO 10180 SE Sunnyside Rd, Clackamas, OR, 97015 Phone: 9713445233 Accepts new patients: Yes|


## Setup/Installation Requirements
Download the following project from the gitHub by tapping "Download" or using 'git clone' from the terminal. Run $npm install and $bower install commands through the terminal

## Support and contact details
For any concerns or questions email to: katsiarynamashokha@gmail.com

### License
Copyright (c) 2017 **_Katsiaryna Mashokha_**
