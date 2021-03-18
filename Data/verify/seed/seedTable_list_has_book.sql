-- Verify oak:seedTable_list_has_book on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.list_has_book WHERE list_id = 1;

ROLLBACK;
