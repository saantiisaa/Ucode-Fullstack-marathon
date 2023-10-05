USE ucode_web;

INSERT INTO races (name) VALUES
    ('Human'),
    ('Kree'),
    ('Asari'),
    ('Skrull');

INSERT INTO powers (name, type, points) VALUES
    ('Bloody Fist', 'attack', 110),
    ('Iron Shield', 'defense', 200),
    ('Fireball', 'attack', 150),
    ('Force Field', 'defense', 250);

INSERT INTO teams (name) VALUES
    ('Avengers'),
    ('Hydra'),
    ('X-Men');

INSERT INTO heroes (name, description, class_role, race_id) VALUES
    ('Spider-Man', 'A web-slinging hero from New York City.', 'dps', 1),
    ('Iron Man', 'A genius inventor in a powered suit of armor.', 'dps', 1),
    ('Captain America', 'A super-soldier with a vibranium shield.', 'tankman', 1),
    ('Thor', 'The god of thunder from Asgard.', 'tankman', 4),
    ('Black Widow', 'A highly skilled spy and assassin.', 'dps', 1),
    ('Hulk', 'A scientist with incredible strength when angered.', 'tankman', 1),
    ('Doctor Strange', 'A master of mystical arts and time manipulation.', 'healer', 3),
    ('Scarlet Witch', 'A mutant with reality-altering powers.', 'healer', 3),
    ('Groot', 'A sentient tree-like creature from Planet X.', 'tankman', 4),
    ('Rocket Raccoon', 'A genetically enhanced raccoon with tech skills.', 'dps', 1);

INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES
    (1, 1, 110),
    (2, 1, 110),
    (3, 2, 200),
    (4, 2, 200),
    (5, 1, 110),
    (6, 2, 200),
    (7, 1, 110),
    (8, 2, 200),
    (9, 2, 200),
    (10, 1, 110);

INSERT INTO heroes_teams (hero_id, team_id) VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1),
    (6, 1),
    (7, 2),
    (8, 2),
    (9, 2),
    (10, 3);