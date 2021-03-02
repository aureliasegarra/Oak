-- Revert oak:seedTable_role from pg

BEGIN;

TRUNCATE "role", "user", list, rating, review, book_position, user_has_badge, list_has_book;

COMMIT;
