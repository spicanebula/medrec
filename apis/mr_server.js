const app = require('express')();
const patients = require('./router/router_patient');
const allergies = require('./router/router_allergy');
const diagnostic_report = require('./router/router_diagnostic_report');
const organization = require('./router/router_org');
const encounter = require('./router/router_encounter');
const family_member_history = require('./router/router_fam_mem_hist');

app.use('/', patients);
app.use('/', allergies);
app.use('/', diagnostic_report);
app.use('/', organization);
app.use('/', encounter);
app.use('/', family_member_history);

app.listen(3000, function () {
  console.log('MedRec app listening on port 3000!')
})