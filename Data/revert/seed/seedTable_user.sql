-- Revert oak:seedTable_user from pg

BEGIN;

TRUNCATE "user", list, rating, review, book_position, user_has_badge, list_has_book;

COMMIT;
