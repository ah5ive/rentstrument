CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS items(
  id SERIAL PRIMARY KEY,
  username_id INTEGER,
  catergory TEXT,
  itemname VARCHAR (50),
  itemdesc TEXT,
  rent_id INTEGER
);