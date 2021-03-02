
-- Deploy oak:createTable to pg


BEGIN;

CREATE TABLE author (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name text NOT NULL
);

CREATE TABLE badge (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL
);

CREATE TABLE "role" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "role" text NOT NULL
);

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL,
    "password" text NOT NULL,
    avatar posint NOT NULL default 0,
    role_id int NOT NULL REFERENCES role(id)
);

CREATE TABLE list (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL,
    "description" text NOT NULL,
    position posint NOT NULL default 0,
    "user_id" int NOT NULL REFERENCES "user"(id)
);

CREATE TABLE book (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    "year" text,
    "page" posint,
    synopsis text
);

CREATE TABLE rating (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    rating posint NOT NULL,
    "user_id" int NOT NULL REFERENCES "user"(id),
    book_id int NOT NULL REFERENCES book(id)
);

CREATE TABLE review (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label text NOT NULL,
    publish_time timestamptz NOT NULL default now(),
    "user_id" int NOT NULL REFERENCES "user"(id),
    book_id int NOT NULL REFERENCES book(id)
);

CREATE TABLE book_position (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    position posint NOT NULL default 0,
    "user_id" int NOT NULL REFERENCES "user"(id),
    book_id int NOT NULL REFERENCES book(id)
);

CREATE TABLE list_has_book (
     id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    list_id int NOT NULL REFERENCES list(id),
    book_id int NOT NULL REFERENCES book(id)
);

CREATE TABLE book_has_author (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_id int NOT NULL REFERENCES book(id),
    author_id int NOT NULL REFERENCES author(id)
);

CREATE TABLE user_has_badge (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" int NOT NULL REFERENCES "user"(id),
    badge_id int NOT NULL REFERENCES badge(id)
);


COMMIT;
