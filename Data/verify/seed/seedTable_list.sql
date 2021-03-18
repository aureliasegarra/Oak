-- Verify oak:seedTable_list on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.list WHERE label = 'À lire';

ROLLBACK;
