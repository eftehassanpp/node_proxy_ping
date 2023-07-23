const request = require("request");
const proxy = "http://isp.smartproxy.com:21577";
const auth =
  "Basic " + Buffer.from("sp32fhzm9w:kqJmvPi5xVp1iTsk59").toString("base64");
const proxyRequest = request.defaults({ proxy: proxy });
const testOptions = {
  url: "https://ipinfo.io/json",
  method: "GET",
  headers: {
    "Proxy-Authorization": auth,
    accept: "application/json",
  },
};
const dom = "";
const options = {
  url: "https://ticketing.liverpoolfc.com/usercontent/splash.html",
  method: "GET",
  headers: {
    "Proxy-Authorization": auth,
    accept: "application/json, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    cookie: `ASPNET_SessionId_=wupz4wyi2sm5wjcraawfqhtx; datadome=${dom};QueueITAccepted-SDFrts345E-V3_lfchospseason111022=EventId%3Dlfchospseason111022%26RedirectType%3Dsafetynet%26IssueTime%3D1689940092%26Hash%3Dg966ddcbffa8467ff0b7345bad49975b5f18b4320d7754d2040a2bdfae277e75;`,
    origin: "https://ticketing.liverpoolfc.com",
    referer: "https://ticketing.liverpoolfc.com",
    "sec-ch-device-memory": "8",
    "sec-ch-ua":
      '"Chromium";v="112", "Not A(Brand";v="99", "Google Chrome";v="112"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-full-version-list":
      '"Chromium";v="112.0.5615.49", "Not A(Brand";v="99.0.0.0", "Google Chrome";v="112.0.5615.49"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: 'eventId=846d4159-3e09-ee11-8445-9de277294f9a&priceLevels=[]&seatsToSet=[{"SeatCount":1,"PriceTypeGuid":"c0c5859d-4138-ea11-a9d3-e64027f944ee"}]&promoData=&areas=[]',
};
proxyRequest(testOptions, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.statusCode);
    console.log(body);
  }
});

proxyRequest(options, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.statusCode);
    console.log(body);
  }
});
