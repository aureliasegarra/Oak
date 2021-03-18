-- Verify oak:seedTable_review on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.review WHERE "user_id" = 1;

ROLLBACK;
