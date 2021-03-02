-- Deploy oak:seedTable_book to pg

BEGIN;

INSERT INTO public.book (title, year, page, synopsis)
VALUES
('Le Petite Prince'::text, '1943'::text, '93'::integer, 'Le narrateur est un aviateur qui, à la suite d''une panne de moteur, a dû se poser en catastrophe dans le désert du Sahara et tente seul de réparer son avion (Antoine de Saint-Exupéry se met en scène lui-même dans son œuvre). ... Jour après jour, le petit prince raconte son histoire au narrateur.'::text),
('La Petite Poule Qui Voulait Voir La Mer'::text, '2000'::text, null, 'Pondre, toujours pondre! Il n''y a pas que ça dans la vie! Moi, je veux voir la mer!" s''écrie Carméla, la petite poule blanche. Son père, le coq, n''a jamais rien entendu d''aussi fou. "File au nid", ordonne-t-il à la poulette. Mais Carméla n''arrive pas à s''endormir.'::text),
('Qu''y a-t-il dans ta couche ?'::text, '2009'::text, '25'::integer, 'Bébé Souris est terriblement curieuse. Elle veut toujours tout savoir, mème ce qu''il y a dans la couche de ses amis ! Mais toi, bébé Souris, où as-tu fait ta crotte ?'::text),
('Le Royaume de Kensuké'::text, '1999'::text, '161'::integer, 'Le 10 septembre 1987, Michael embarque avec ses parents et leur chienne, Stella, sur un voilier pour faire le tour du monde. Ils s''arrêtent, parfois, pour de fabuleuses escales, Afrique, Amérique, Australie, jusqu''au jour où survient un terrible accident. Le jeune garçon se retrouve échoué, avec sa chienne, sur un île déserte perdue au milieu du Pacifique. Va-t-il pouvoir survivre, affamé, menacé par toutes sortes de dangers ? Reverra-t-il jamais ses parents ?'::text),
('L''Ickabog'::text, '2020'::text, '391'::integer, 'Haut comme deux chevaux. Des boules de feu étincelantes à la place des yeux. De longues griffes acérées telles des lames. L’Ickabog arrive... '::text),
('Je t''aimerai toujours, quoi qu''il arrive... '::text, '2018'::text, '28'::integer, 'Petit Renard est inquiet car il craint de ne plus être aimé de sa maman s''il fait trop de bêtises. Mais sa maman lui explique que leur amour durera toujours. quoi qu''il arrive !'::text),
('Mes petites émotions'::text, '2018'::text, '16'::integer, 'Ce livre cartonné propose des petites scènes du quotidien pour aider les tout-petits à nommer leurs émotions'::text),
('Mon amour'::text, '2015'::text, '48'::integer, '" Dis, maman, est-ce que tu m’aimeras toute la vie ? demande Archibald, un soir avant de s’endormir. - Hum, eh bien, je vais te dire un secret…, répond sa maman. Ainsi commence le tendre inventaire des moments de vies partagés entre une mère et son enfant, où tout devient prétexte à s’aimer. Sur chaque double page, Astrid Desbordes a choisi d’opposer en vis-à-vis des situations contraires, qui jouent avec aisance sur les registres du quotidien'::text),
('T''choupi va sur le pot'::text, '2017'::text, '161'::integer, 'Dans cette histoire, T''choupi a très envie de faire pipi, et cette fois papa lui propose d''aller sur le pot...'::text),
('L''enfant, la taupe, le renard et le cheval'::text, '2019'::text, '128'::integer, 'Cette fable universelle et bienfaisante s''adresse à toutes les générations. Elle raconte une histoire d''amitié entre un enfant, une taupe gourmande et pleine de vie, un renard que les épreuves ont rendu méfiant et un cheval sage et serein. Tous les quatre explorent le vaste monde. Ils se posent des questions. Ils traversent des tempêtes. Ils apprennent à s''aimer. Cette ode à l''innocence et à la bienveillance transmet des leçons de vie qui ont touché le cœur de plus d''un million de lecteurs.'::text)
returning 'Added book N°' || id || ': '|| title;

COMMIT;
