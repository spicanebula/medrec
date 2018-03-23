const mongoose = require('../db_conn');
const Schema = mongoose.Schema;

const allergySchema = new Schema(
{
  clinicalStatus: String, //active,
  verificationStatus: String, //confirmed,
  type: String, //allergy,
  category: [
    String //food
  ],
  criticality: String, //high,
  code: {
    coding: [
      {
        code: Number, //227493005,
        display: String, //Cashew nuts
      }
    ]
  },
  patient: {
    reference: String, //Patient/example
  },
  onsetDateTime: String, //2004,
  assertedDate: String, //2014-10-09T14:58:00+11:00,
  recorder: {
    reference: String, //Practitioner/example
  },
  asserter: {
    reference: String, //Patient/example
  },
  lastOccurrence: String, //2012-06,
  note: [
    {
      text: String //The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.
    }
  ],
  reaction: [
    {
      substance: {
        coding: [
          {
            code: Number, //1160593,
            display: String //cashew nut allergenic extract Injectable Product
          }
        ]
      },
      manifestation: [
        {
          coding: [
            {
              code: Number, // 39579001,
              display: String, //Anaphylactic reaction
            }
          ]
        }
      ],
      description: String, //Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered,
      onset: String, //2012-06-12,
      severity: String, //severe,
      exposureRoute: {
        coding: [
          {
            code: Number, //34206005,
            display: String, //Subcutaneous route
          }
        ]
      }
    },
    {
      manifestation: [
        {
          coding: [
            {
              code: Number, //64305001,
              display: String, //Urticaria
            }
          ]
        }
      ],
      onset: String, //2004,
      severity: String, //moderate,
      note: [
        {
          text: String //The patient reports that the onset of urticaria was within 15 minutes of eating cashews.
        }
      ]
    }
  ]
});

//const allergy = mongoose.model('allergy', allergySchema);

module.exports = mongoose.model('allergy', allergySchema);
