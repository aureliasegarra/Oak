-- Revert oak:seedTable_book from pg

BEGIN;

TRUNCATE book, rating, review, book_position, list_has_book;

COMMIT;
