// Update with your config settings.

module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/survey.db'      //from DB Browser Sqlite3
      },
      useNullAsDefault: true
    },

    
  };