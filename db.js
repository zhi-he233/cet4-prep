const Datastore = require('nedb-promises');
const path = require('path');

const dataDir = path.join(__dirname, 'data');

const db = {
  users: Datastore.create({ filename: path.join(dataDir, 'users.db'), autoload: true }),
  papers: Datastore.create({ filename: path.join(dataDir, 'papers.db'), autoload: true }),
  userData: Datastore.create({ filename: path.join(dataDir, 'userData.db'), autoload: true })
};

// Ensure indexes
db.users.ensureIndex({ fieldName: 'username', unique: true });
db.papers.ensureIndex({ fieldName: 'level' });
db.userData.ensureIndex({ fieldName: 'userId' });

module.exports = db;
