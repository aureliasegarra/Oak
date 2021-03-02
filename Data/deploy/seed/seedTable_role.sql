-- Deploy oak:seedTable_role to pg

BEGIN;

INSERT INTO public.role ("role")
VALUES
('user'::text),
('admin'::text)
 returning 'Added role N°' || id || ': '|| "role";

COMMIT;
