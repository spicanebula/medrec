const mongoose = require('../db_conn');
const Schema = mongoose.Schema;

const diagnosticReportSchema = new Schema(
{
  contained: [
    {
      resourceType: String, //Observation,
      status: String, //final,
      code: {
        coding: [
          {
            //system: http://loinc.org,
            code: String, //718-7,
            display: String, //Hemoglobin [Mass/volume] in Blood
          }
        ],
        text: String, //Haemoglobin
      },
      subject: {
        reference: String, //Patient/pat2
      },
      performer: [
        {
          reference: String, //Organization/1832473e-2fe0-452d-abe9-3cdb9879522f,
          display: String, //Acme Laboratory, Inc
        }
      ],
      valueQuantity: {
        value: String, //176,
        unit: String, //g/L,
        //system: http://unitsofmeasure.org,
        code: String, //g/L
      },
      referenceRange: [
        {
          low: {
            value: String, //135,
            unit: String, //g/L,
            //system: http://unitsofmeasure.org,
            code: String, //g/L
          },
          high: {
            value: String, //180,
            unit: String, //g/L,
            //system: http://unitsofmeasure.org,
            code: String, //g/L
          }
        }
      ]
    }
  ],
  identifier: [
    {
      system: String, //http://acme.com/lab/reports,
      value: String, //5234342
    }
  ],
  status: String, //final,
  category: String, // HM
  code: {
    coding: [
      {
        //system: http://loinc.org,
        code: String, //58410-2,
        display: String, //Complete blood count (hemogram) panel - Blood by Automated count
      }
    ],
    text: String, //Complete Blood Count
  },
  subject: {
    reference: String, //Patient/pat2
  },
  context: {
    reference: String, //Encounter/example
  },
  effectiveDateTime: String, //2011-03-04T08:30:00+11:00,
  issued: String, //2011-03-04T11:45:33+11:00,
  performer: [
    {
      actor: {
        reference: String, //Organization/1832473e-2fe0-452d-abe9-3cdb9879522f,
        display: String, //Acme Laboratory, Inc
      }
    }
  ],
  presentedForm: [
    {
      contentType: String, //application/pdf,
      language: String, //en-AU,
      data: String, //JVBERi0xLj,
      title: String, //HTML Report
    }
  ]
});


//const diagnostic_report = mongoose.model('diagnostic_report', diagnosticReportSchema);

module.exports = mongoose.model('diagnostic_report', diagnosticReportSchema);