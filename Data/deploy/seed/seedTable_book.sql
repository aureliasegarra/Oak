-- Deploy oak:seedTable_book to pg

BEGIN;

INSERT INTO public.book (title, public_api_id)
VALUES
('Le Petite Prince'::text, 'JJW0QgAACAAJ'::text),
('La Petite Poule Qui Voulait Voir La Mer'::text, 'nAaVCUiPVvU'::text),
('Qu''y a-t-il dans ta couche ?'::text, 'J_FSPgAACAAJ'::text),
('Le Royaume de Kensuké'::text,'S7fhSgAACAAJ'::text),
('L''Ickabog'::text, '9ykEEAAAQBAJ'::text),
('Je t''aimerai toujours, quoi qu''il arrive... '::text, 'uuCwvQEACAAJ'::text),
('Mes petites émotions'::text,'kexyuQEACAAJ'::text),
('Mon amour'::text, 'lASpDAAAQBAJ'::text),
('T''choupi va sur le pot'::text,'gQF6DCbgJFEC'::text),
('L''enfant, la taupe, le renard et le cheval'::text, 'bJXazQEACAAJ'::text)
returning 'Added book N°' || id || ': '|| title;

COMMIT;
