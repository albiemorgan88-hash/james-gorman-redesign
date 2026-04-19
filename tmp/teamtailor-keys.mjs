const urls = process.argv.slice(2);
for (const u of urls) {
  const res = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } });
  const text = await res.text();
  const match = text.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  const obj = JSON.parse(match[1]);
  console.log('\nURL', u);
  console.log(JSON.stringify({employmentType: obj.employmentType, datePosted: obj.datePosted, identifier: obj.identifier, baseSalary: obj.baseSalary, jobLocationType: obj.jobLocationType, applicantLocationRequirements: obj.applicantLocationRequirements, jobLocation: obj.jobLocation}, null, 2));
}
