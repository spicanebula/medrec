const mongoose = require('../db_conn');
const Schema = mongoose.Schema;

const familyMemberHistorySchema = new Schema({  
  identifier: [
    {
      value: String
    }
  ],
  definition: [
    {
      display: String
    }
  ],
  status: String,
  notDone: Boolean,
  patient: {
    reference: String,
    display: String
  },
  date: String,
  relationship: {
    coding: [
      {
        code: String,
        display: String
      }
    ]
  },
  gender: String,
  condition: [
    {
      code: {
        coding: [
          {
            code: String,
            display: String
          }
        ],
        text: String
      },
      onsetAge: {
        value: String,
        unit: String,
        code: String
      },
      note: [
        {
          text: String
        }
      ]
    }
  ]
});

const family_member_history = mongoose.model('family_member_history', familyMemberHistorySchema);

module.exports = family_member_history;
