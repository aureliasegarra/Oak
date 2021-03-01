-- Deploy oak:createDomain_posint to pg

BEGIN;

--- this domain allows only positive integer
CREATE DOMAIN posint AS int CHECK (value >= 0);

COMMIT;
