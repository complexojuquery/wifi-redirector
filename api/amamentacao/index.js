export default function handler(req, res) {
  res.writeHead(302, {
    Location: 'http://191.241.236.102:8080/amamentacao'
  });
  res.end();
}
