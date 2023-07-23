const request = require("request");
const fs = require("fs");
const apicall = (port) => {
  const proxy = `http://isp.smartproxy.com:${port}`;
  const auth =
    "Basic " + Buffer.from("sp32fhzm9w:kqJmvPi5xVp1iTsk59").toString("base64");
  const proxyRequest = request.defaults({ proxy: proxy });
  const testOptions = {
    url: "https://ipinfo.io/json",
    method: "GET",
    timeout:200,
    headers: {
      "Proxy-Authorization": auth,
      accept: "application/json",
    },
  };
  const dom = "";
  const options = {
    url: "https://ticketing.liverpoolfc.com/usercontent/splash.html",
    method: "GET",
    timeout:350,
    headers: {
      "Proxy-Authorization": auth,
      accept: "application/json, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: ``,
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
  };

  proxyRequest(testOptions, function (error, response, body) {
    if (error) {
      //console.log(error);
    } else {
      //console.log(response.statusCode);
      console.log(port);
      //   console.log(body);
      fs.appendFile("ports/200pingport.txt", `${port} \n`, (err) => {
        if (err) console.log(err);
      });
    }
  });
};

for (let i = 40001; i < 49001; i++) {
  apicall(i);
}
