import http from "k6/http";
import { check, group } from "k6";
import { Rate, Trend } from "k6/metrics";

export let errorRate = new Rate("errors");
let groupDuration = new Trend("groupDuration");
let getApiTrend = new Trend("getApiTrend");

export const options = {
  vus: 10,
  duration: "20s",
  thresholds: {
    'http_req_duration{type:GETAPITAG}': ["p(95)<200"],
  },
  cloud: {
    projectID: 3706456, // Project: k6testing
    name: "K6 1st Test", // Test runs with the same name group test runs together.
  },
};

export default function () {
  groupWithMetrics("group1", function () {
    let response = http.get(
      "https://run.mocky.io/v3/11098057-437f-48c7-9981-c34db6053fa6",
      { tags: { type: "GETAPITAG" } }
    );
    check(response, {
      "Success! response is 200.": (r) => r.status === 200,
    });
    errorRate.add(response.status !== 200, { type: "GETAPITAG" });
    getApiTrend.add(response.timings.duration, { type: "GETAPITAG" });
  });

  groupWithMetrics("group2", function () {
    let response2 = http.get(
      "https://run.mocky.io/v3/dc05f812-d545-4aab-a08d-ba4e7649bb9b"
    );
    check(response2, {
      "Success! response is 200.": (r) => r.status === 200,
    });
    errorRate.add(response2.status !== 200, { type: "GETAPITAG" });
  });
}

function groupWithMetrics(nameOfGroup, groupFunction) {
  let start = Date.now();
  group(nameOfGroup, groupFunction);
  let end = Date.now();

  groupDuration.add(end - start, { groupName: nameOfGroup });
}
