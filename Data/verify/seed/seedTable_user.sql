-- Verify oak:seedTable_user on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.user WHERE username = 'aurelia';

ROLLBACK;
