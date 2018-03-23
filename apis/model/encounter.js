const mongoose = require('../db_conn');
const Schema = mongoose.Schema;

const encounterSchema = new Schema({
  identifier: [
    {
      use: String,
      value: String
    }
  ],
  status: String,
  class: {
    code: String,
    display: String
  },
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
  priority: {
    coding: [
      {
        code: String,
        display: String
      }
    ]
  },
  subject: {
    reference: String,
    display: String
  },
  participant: [
    {
      individual: {
        reference: String
      }
    }
  ],
  reason: [
    {
      text: String
    }
  ],
  serviceProvider: {
    reference: String
  }
});

const encounter = mongoose.model('encounter', encounterSchema);

module.exports = encounter;
