-- Deploy oak:seedTable_list to pg

BEGIN;

INSERT INTO public.list (label, description, "position", "user_id")
VALUES
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '1'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '1'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '2'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '2'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '3'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '3'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '4'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '4'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '5'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '5'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '6'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '6'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '7'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '7'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '8'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '8'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '9'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '9'::integer),
('Lus'::text, 'Les livres que j''ai lu'::text, '0'::integer, '10'::integer),
('A lire'::text, 'Les livres que je veux lire'::text, '1'::integer, '10'::integer)
returning 'Added list N°' || id || ': '|| label || ' on user_id N°' || "user_id";

COMMIT;
