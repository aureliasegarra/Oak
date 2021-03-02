-- Deploy oak:seedTable_book_has_author to pg

BEGIN;

INSERT INTO public.book_has_author (book_id, author_id)
VALUES
('1'::integer, '1'::integer),
('2'::integer, '2'::integer),
('3'::integer, '3'::integer),
('4'::integer, '4'::integer),
('5'::integer, '5'::integer),
('6'::integer, '6'::integer),
('7'::integer, '7'::integer),
('8'::integer, '8'::integer),
('9'::integer, '9'::integer),
('10'::integer, '10'::integer)
returning 'Added book_has_author N°' || id || ' author_id N°'|| author_id || ' linked to book_id N°' || book_id;

COMMIT;
