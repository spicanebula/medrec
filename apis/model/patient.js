const mongoose = require('../db_conn');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  active: Boolean,
  name:
    {
      use: String,
      family: String,
      given: String,
      suffix: String
    },
  telecom: [
    {
      system: String,
      value: String,
      use: String
    }
  ],
  gender: String,
  birthDate: Date,
  deceasedBoolean: Boolean,
  address: [
    {
      use: String,
      line: [
        String
      ],
      city: String,
      postalCode: String,
      country: String
    }
  ],
  maritalStatus: String,
  multipleBirthBoolean: Boolean,
  contact: [
    {
      relationship: String,
      name: {
        family: String,
        given: String
      },
      telecom: [
        {
          system: String,
          value: String,
          use: String
        }
      ]
    }
  ],
  communication: [
    {
      language: {
        code: String,
        display: String,
        text: String
      },
      preferred: Boolean
    }
  ],
  managingOrganization: {
    reference: String,
    display: String
  }
});

const patient = mongoose.model('patient', patientSchema);

module.exports = patient;
