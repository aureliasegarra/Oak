-- Deploy oak:seedTable_badge to pg

BEGIN;

INSERT INTO public.badge (label)
VALUES
('Soldat'::text),
('Caporal'::text),
('Sergent'::text),
('Adjudant'::text),
('Major'::text),
('Aspirant'::text),
('Lieutenant'::text),
('Capitaine'::text),
('Commandant'::text),
('Colonel'::text),
('Général'::text)
returning 'Added badge N°' || id || ': '|| label;

COMMIT;
