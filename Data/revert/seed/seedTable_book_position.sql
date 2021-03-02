-- Revert oak:seedTable_bookPosition from pg

BEGIN;

TRUNCATE book_position;

COMMIT;
