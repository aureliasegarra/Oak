-- Deploy oak:seedTable_user_has_badge to pg

BEGIN;

INSERT INTO public.user_has_badge ("user_id", badge_id)
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
returning 'Added user_has_badge N°' || id || ' user_id N°'|| "user_id" || ' won badge_id N°' || badge_id;

COMMIT;
