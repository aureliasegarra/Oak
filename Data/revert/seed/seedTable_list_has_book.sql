-- Revert oak:seedTable_list_has_book from pg

BEGIN;

TRUNCATE list_has_book;

COMMIT;
