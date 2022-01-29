'use strict';
const http = require('http'); //  HTTPのモジュールを読み込む
const auth = require('http-auth'); // Basic認証をするためのモジュールを読み込む
const router = require('./lib/router'); // リクエストの振り分け処理を行うrouterモジュールを読み込む

const basic = auth.basic({ // Basic認証の設定
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

const server = http.createServer(basic.check((req, res) => { // Basic認証を実現
  router.route(req, res);
})).on('error', (e) => { // サーバーエラーが発生した際のエラーログ
  console.error('Server Error', e);
}).on('clientError', (e) => { // クライアントエラーが発生した際のエラーログ
  console.error('Client Error', e);
});

const port = process.env.PORT || 8000; // Herokuの環境変数が指定するポートの利用
server.listen(port, () => {
  console.info('Listening on ' + port);
});