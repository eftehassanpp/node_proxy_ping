const request = require("request");
const fs = require("fs");
const apicall = (port, dd) => {
  const proxy = `http://isp.smartproxy.com:${port}`;
  const auth =
    "Basic " + Buffer.from("sp32fhzm9w:kqJmvPi5xVp1iTsk59").toString("base64");
  const proxyRequest = request.defaults({ proxy: proxy });
  const testOptions = {
    url: "https://ticketing.liverpoolfc.com/usercontent/splash.html",
    method: "GET",
    timeout: 1500,
    headers: {
      "Proxy-Authorization": auth,
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      origin: "https://ticketing.liverpoolfc.com",
      referer: "https://ticketing.liverpoolfc.com/",
      cookie: `datadome=${dd};QueueITAccepted-SDFrts345E-V3_lfchospseason111022=EventId%3Dlfchospseason111022%26RedirectType%3Dsafetynet%26IssueTime%3D1689940092%26Hash%3Dg966ddcbffa8467ff0b7345bad49975b5f18b4320d7754d2040a2bdfae277e75;`,
      "cache-control": "max-age=0",
      "sec-ch-device-memory": "8",
      "sec-ch-ua":
        '"Chromium";v="115", "Not A(Brand";v="99", "Google Chrome";v="115"',
      "sec-ch-ua-arch": '"x86"',
      "sec-ch-ua-full-version-list":
        '"Chromium";v="115.0.5790.98", "Not A(Brand";v="99.0.0.0", "Google Chrome";v="115.0.5790.98"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": '""',
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  };

  proxyRequest(testOptions, function (error, response, body) {
    if (!error) {
      console.log(response.statusCode);
      //   console.log(body);
      console.log(port);
      fs.appendFile("ports/ports.txt", `${port} \n`, (err) => {
        if (err) console.log(err);
      });
    } else if (error) {
      console.log(error);
    }
  });
};

for (i = 20955; i < 20956; i++) apicall(i, "");
