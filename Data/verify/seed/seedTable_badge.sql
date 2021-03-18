-- Verify oak:seedTable_badge on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.badge WHERE label = 'Soldat' ;

ROLLBACK;
