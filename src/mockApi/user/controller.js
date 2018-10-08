import db from './db.json';

export const login = (email, password) => {
  for (const user of db) {
    if (email === user.email && password === user.password) {
      return Promise.resolve(user);
    }
    else {
      return Promise.reject('Username or password may be incorrect.');
    }
  }
}