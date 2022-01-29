'use strict';
const postsHandler = require('./posts-handler'); // handle関数, handleDelete関数を読み込む
const util = require('./handler-util'); // handleLogout関数, handleNotFound関数, handleBadRequest関数, handleFavicon関数を読み込む

function route(req, res) {
  if (process.env.DATABASE_URL
    && req.headers['x-forwarded-proto'] === 'http') {
    util.handleNotFound(req, res);
  }
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res); // post-handlerモジュールのhandle関数に行ってもらう
      break;
    case '/posts?delete=1':
      postsHandler.handleDelete(req, res); // post-handlerモジュールのhandleDelete関数に行ってもらう
      break;
    case '/logout':
      util.handleLogout(req, res); // handler-utilモジュールのhandleLogout関数に行ってもらう
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res); // handler-utilモジュールのhandleFavicon関数に行ってもらう
      break;
    default:
      util.handleNotFound(req, res); // handler-utilモジュールのhandleNotFound関数に行ってもらう
      break;
  }
}

module.exports = {
  route
};
