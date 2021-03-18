-- Verify oak:seedTable_bookPosition on pg

BEGIN;

SELECT 1/COUNT(*) FROM public.book_position WHERE position = 1;

ROLLBACK;
