-- Revert oak:seedTable_rating from pg

BEGIN;

TRUNCATE rating;

COMMIT;
