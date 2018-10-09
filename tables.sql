CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT,
  password TEXT
);

-- CREATE TABLE IF NOT EXISTS tweets(
--   id SERIAL PRIMARY KEY,
--   post TEXT,
--   user_id INTEGER
-- );