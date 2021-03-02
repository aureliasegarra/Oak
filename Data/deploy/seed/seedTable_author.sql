-- Deploy oak:seedTable_author to pg

BEGIN;

INSERT INTO public.author (full_name)
VALUES
('Antoine de Saint-Exupéry'::text),
('Christian Jolibois'::text),
('Guido Van Genechten'::text),
('Michael Morpurgo'::text),
('J. K. Rowling'::text),
('Debi Gliori'::text),
('Daniel Roode'::text),
('Astrid Desbordes'::text),
('Thierry Courtin'::text),
('Charlie Mackesy'::text)
returning 'Added author N°' || id || ': '|| full_name;

COMMIT;
