export default function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send("Token não informado.");
  }

  const redirectUrl = `http://wifi.portal/wifi/liberar.php?token=${token}`;
  
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
