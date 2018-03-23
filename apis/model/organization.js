const mongoose = require('../db_conn');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  identifier: [
    {
      use: String,
      value: String
    }
  ],
  active: Boolean,
  type: [
    {
      coding: [
        {
          code: String,
          display: String
        }
      ]
    }
  ],
  name: String,
  telecom: [
    {
      system: String,
      value: String,
      use: String
    }
  ],
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
  contact: [
    {
      name: {
        use: String,
        text: String,
        family: String,
        given: [
          String
        ],
        prefix: [
          String
        ]
      },
      telecom: [
        {
          system: String,
          value: String,
          use: String
        }
      ],
      address: {
        line: [
          String
        ],
        city: String,
        postalCode: String,
        country: String
      }
    }
  ]
});

const organization = mongoose.model('organization', organizationSchema);

module.exports = organization;
