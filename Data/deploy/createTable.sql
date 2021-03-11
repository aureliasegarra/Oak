
-- Deploy oak:createTable to pg


BEGIN;

CREATE TABLE badge (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL UNIQUE
);

CREATE TABLE "role" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "role" text NOT NULL UNIQUE
);

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username text NOT NULL,
    email text UNIQUE NOT NULL,
    "password" text NOT NULL,
    avatar posint NOT NULL default 0,
    role_id int NOT NULL REFERENCES role(id)
);

CREATE TABLE list (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL,
    "description" text NOT NULL,
    position posint NOT NULL default 0,
    "user_id" int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
);

CREATE TABLE book (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    public_api_id text UNIQUE NOT NULL
);

CREATE TABLE rating (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    rating posint NOT NULL,
    "user_id" int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    book_id int NOT NULL REFERENCES book(id) ON DELETE CASCADE,
    UNIQUE ("user_id", book_id)
);

CREATE TABLE review (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL,
    publish_time timestamptz NOT NULL default now(),
    "user_id" int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    book_id int NOT NULL REFERENCES book(id) ON DELETE CASCADE,
    UNiQUE("user_id", book_id)
);

CREATE TABLE book_position (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    position posint NOT NULL default 0,
    "user_id" int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    book_id int NOT NULL REFERENCES book(id) ON DELETE CASCADE
);

CREATE TABLE list_has_book (
     id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    list_id int NOT NULL REFERENCES list(id),
    book_id int NOT NULL REFERENCES book(id) ON DELETE CASCADE,
    UNIQUE(list_id, book_id)
);

CREATE TABLE user_has_badge (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    badge_id int NOT NULL REFERENCES badge(id),
    UNIQUE("user_id", badge_id)
);


COMMIT;
