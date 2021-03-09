-- Deploy oak:seedTable_user to pg

BEGIN;

INSERT INTO public."user" (username, email, "password", avatar, role_id)
VALUES
('aurelia'::text, 'aurelia@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('marina'::text, 'marina@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('nicolas'::text, 'nicolas@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('anthony'::text, 'anthony@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('charlotte'::text, 'charlotte@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('cesar'::text, 'cesar@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('joseph'::text, 'joseph@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '1'::integer),
('marc'::text, 'marc@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '2'::integer),
('medhi'::text, 'medhi@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '2'::integer),
('jean'::text, 'jean@oak.fr'::text, '$2b$10$8PjgbfnY6sfjTGZBllAmS.Sbf9Ayp.vAfXWcdbv36nDuN2K6d.Gb6'::text, '1'::integer, '2'::integer)
returning 'Added user N°' || id || ': '|| username;

COMMIT;
