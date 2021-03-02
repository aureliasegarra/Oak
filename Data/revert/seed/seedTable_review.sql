-- Revert oak:seedTable_review from pg

BEGIN;

TRUNCATE review;

COMMIT;
