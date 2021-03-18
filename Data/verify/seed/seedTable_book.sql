-- Verify oak:seedTable_book on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.book WHERE title = 'Je t''aimerai toujours, quoi qu''il arrive... ' ;

ROLLBACK;
