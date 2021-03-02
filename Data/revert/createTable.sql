-- Revert oak:createTable from pg

BEGIN;

DROP TABLE user_has_badge;

DROP TABLE book_has_author;

DROP TABLE list_has_book;

DROP TABLE book_position;

DROP TABLE review;

DROP TABLE rating;

DROP TABLE book;

DROP TABLE list;

DROP TABLE "user";

DROP TABLE "role";

DROP TABLE badge;

DROP TABLE author;

COMMIT;
