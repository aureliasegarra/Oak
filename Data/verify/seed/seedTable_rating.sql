-- Verify oak:seedTable_rating on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.rating WHERE rating = 3;

ROLLBACK;
