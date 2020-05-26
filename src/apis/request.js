// eslint-disable-next-line no-unused-vars
export default function request(method, url, data, headers) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
      console.log(req.responseText, req, JSON.parse(req.responseText));
      resolve({ body: JSON.parse(req.responseText) });
    });
    req.open(method, url);
    req.send();
  });
}
