-- Revert oak:seedTable_author from pg

BEGIN;

TRUNCATE author, book_has_author;

COMMIT;
