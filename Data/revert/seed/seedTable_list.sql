-- Revert oak:seedTable_list from pg

BEGIN;

TRUNCATE list, list_has_book;

COMMIT;
