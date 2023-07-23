const request = require("request");
const apicall = (port) => {
  const proxy = `http://isp.smartproxy.com:${port}`;
  const auth =
    "Basic " + Buffer.from("sp32fhzm9w:kqJmvPi5xVp1iTsk59").toString("base64");
  const proxyRequest = request.defaults({ proxy: proxy });
  const testOptions = {
    url: "https://ipinfo.io/json",
    method: "GET",
    timeout: 250,
    headers: {
      "Proxy-Authorization": auth,
      accept: "application/json",
    },
  };

  proxyRequest(testOptions, function (error, response, body) {
    if (!error) {
      //   console.log(response.statusCode);
      //   console.log(body);
      console.log(port);
    }
  });
};

for (i = 10000; i <= 11000; i++) apicall(i);
