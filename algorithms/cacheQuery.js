// Problem: Cache Queries

// Youneed to implement a prototype for a cache query handler. Here's the breakdown:

// Cache Entries:

// Each entry is given in the form {timestamp, key, value}.
// timestamp: Represents the time when the entry was stored in the cache.
// key: Represents the ID assigned to the cache entry.
// value: Represents the data value of the entry.
// Queries:

// You are given a list of queries where each query is in the form {key, timestamp}.
// For each query, you need to fetch the value corresponding to the key and timestamp.
// Constraints:

// The cache may have duplicate keys, so the key+timestamp combination uniquely identifies an entry.
// You need to process multiple queries efficiently.
// Goal:

// Return the results of the queries as an array of values corresponding to the provided keys and timestamps.

const cache_entries = [
  ["09:07:47", "io09ju56", "341"],
  ["12:30:22", "a2er5i80", "125"],
  ["01:23:09", "a2er5i80", "764"]
];

const queries = [
  ["a2er5i80", "01:23:09"], // Query for key "a2er5i80" at timestamp "01:23:09"
  ["io09ju56", "09:07:47"]  // Query for key "io09ju56" at timestamp "09:07:47"
];

// expected output = [ "764", "341" ]

const cacheQuery = (cache_entries, queries) => {
  // step one create the cache using map,
  let referenceMap = new Map();
  cache_entries.forEach(element => {
    let timeStamp = element[0];
    let key = element[1];
    let value = element[2];
    let mapKey = timeStamp+key;
    if(!referenceMap.get(mapKey)){
      referenceMap.set(mapKey, value);
    }
  });
  // step two query the map and give the output;
  let output = [];
  queries.forEach((element) => {
    let queryKey = element[0];
    let queryTimeStamp = element[1];
    let searchKey = queryTimeStamp + queryKey;
    output.push(referenceMap.get(searchKey));
  })
  return output;
}

console.log(cacheQuery(cache_entries, queries));
