-- Revert oak:seedTable_badge from pg

BEGIN;

TRUNCATE badge, user_has_badge;

COMMIT;
