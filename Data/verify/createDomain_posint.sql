-- Verify oak:createDomain_posint on pg

BEGIN;

SELECT 1/COUNT(*)
FROM INFORMATION_SCHEMA.domains
WHERE domain_name = 'posint';

ROLLBACK;
