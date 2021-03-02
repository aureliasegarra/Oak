-- Revert oak:seedTable_user_has_badge from pg

BEGIN;

TRUNCATE user_has_badge;

COMMIT;
