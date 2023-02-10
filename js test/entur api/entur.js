fetch('https://api.entur.io/journey-planner/v3/graphql?query={trip(from:{place:"NSR:StopPlace:59872"}to:{coordinates:{latitude:59.96050414081307 longitude:11.040338686322317}}){tripPatterns{duration walkDistance legs{expectedStartTime expectedEndTime mode distance line{id publicCode}}}}}
  .then((response) => response.json())
  .then((data) => console.log(data));