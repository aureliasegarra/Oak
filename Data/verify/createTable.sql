-- Verify oak:createTable on pg

BEGIN;

SELECT * FROM badge;

SELECT * FROM "role";

SELECT * FROM "user";

SELECT * FROM list;

SELECT * FROM book;

SELECT * FROM rating;

SELECT * FROM review;

SELECT * FROM book_position;

SELECT * FROM list_has_book;

SELECT * FROM user_has_badge;

ROLLBACK;
