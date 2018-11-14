import db from './db.json';

export const login = (email, password) => {
  for (const user of db) {
    if (email === user.email && password === user.password) {
      delete user.password;
      return Promise.resolve(user);
    }
    else {
      return Promise.reject('Username or password may be incorrect.');
    }
  }
}

export const getUsers = () => {
  const data = db.map((user) => {
    delete user.password;
    return user;
  });
  setTimeout(() => Promise.resolve(data), 1000);
}