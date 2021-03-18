-- Verify oak:seedTable_role on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.role WHERE "role" = 'user';

ROLLBACK;
