type Method = 'GET' | 'POST';

export default function request(method: Method, url: string, data?: any, headers?: any) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.addEventListener("load", () => {
      resolve({ body: JSON.parse(req.responseText) });
    });
    req.open(method, url);
    req.send();
  });
}
