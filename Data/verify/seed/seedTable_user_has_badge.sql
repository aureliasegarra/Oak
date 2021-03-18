-- Verify oak:seedTable_user_has_badge on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.user_has_badge WHERE badge_id = 5;

ROLLBACK;
