import http from 'k6/http';
import { check } from 'k6';

// Define your InfluxDB URL
const influxDBUrl = 'http://localhost:8086/write';

// Define your organization and bucket
const org = 'k6_testing';
const bucket = 'first_bucket';

// Define your data payload
const payload = `measurement,tag1=value1,tag2=value2 field1=10,field2=20`;

export default function () {
  const res = http.post(
    `${influxDBUrl}?org=${org}&bucket=${bucket}`,
    payload,
    {
      headers: {
        'Authorization': `Token your_influxdb_token`, // Replace with your InfluxDB token
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  check(res, {
    'is status 204': (r) => r.status === 204,
  });
}
