const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
// 375235664597-shar498s5v4ml2tnno0ljkls6vckmcte.apps.googleusercontent.com
// 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