import http from 'k6/http';

const query = `
  query GetLocation {
    ipApi_location(ip: “8.8.8.8”) {
      id
      city
      country
    }
  }
`;

const headers = {
  'Content-Type': 'application/json',
};

export default function () {
  http.post(
      'https://graphqldd.stepzen.net/api/dd1cf47f51ac830fe21dc00ec80cee65/__graphql',
      JSON.stringify({ query }),
      { headers },
  );
}