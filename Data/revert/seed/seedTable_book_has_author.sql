-- Revert oak:seedTable_book_has_author from pg

BEGIN;

TRUNCATE book_has_author;

COMMIT;
