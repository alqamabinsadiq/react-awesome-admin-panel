import db from './db.json';

export const login = (email) => {
  for (const user of db) {
    if (email === user.email) {
      return Promise.resolve(user);
    }
    else {
      return Promise.reject();
    }
  }
}