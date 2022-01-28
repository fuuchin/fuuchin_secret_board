'use strict';
const fs = require('fs');

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(`
    <!DOCTYPE html>
    <html lang="ja">
    <body style="text-align: center;">
      <h1>ログアウトしました</h1>
      <p>
        <a href="/posts" style="color: #0A6FFF;" text-decoretion="none">ログイン</a>
      </p>
    </body>
    </html>
  `);
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(`
    <!DOCTYPE html>
    <html lang="ja">
    <body style="text-align: center;">
      <h1>ふーちんの秘密の匿名掲示板</h1>
      <p>
        <a href="/posts" style="color: #0A6FFF;" text-decoretion="none">こちら</a>からお入りください
      </p>
    </body>
    </html>
  `);
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(`
    <!DOCTYPE html>
    <html lang="ja">
    <body style="text-align: center;">
      <h1>400 Bad Request</h1>
      <p>未対応のリクエストです</p>
    </body>
    </html>
  `);
}

function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon'
  });
  const favicon = fs.readFileSync('./favicon.ico');
  res.end(favicon);
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest,
  handleFavicon
};
