-- Revert oak:createDomain_posint from pg

BEGIN;

-- CREATE DOMAIN posint AS int CHECK (value >= 0);
DROP DOMAIN posint;

COMMIT;
