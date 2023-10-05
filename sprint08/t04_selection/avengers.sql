USE ucode_web;

SELECT id, name, SUM(points) AS total_power
FROM heroes
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN powers ON heroes_powers.power_id = powers.id
GROUP BY id, name
ORDER BY total_power DESC, id ASC
LIMIT 1;

SELECT id, name, SUM(points) AS total_defense
FROM heroes
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN powers ON heroes_powers.power_id = powers.id
WHERE powers.type = 'defense'
GROUP BY id, name
ORDER BY total_defense ASC, id ASC
LIMIT 1;

SELECT heroes.id, heroes.name, SUM(powers.points) AS total_power
FROM heroes
JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
JOIN teams ON heroes_teams.team_id = teams.id
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN powers ON heroes_powers.power_id = powers.id
WHERE teams.name = 'Avengers' AND heroes.name != 'Double-Agent'
GROUP BY heroes.id, heroes.name
ORDER BY total_power DESC;

SELECT teams.name, SUM(powers.points) AS total_power
FROM teams
JOIN heroes_teams ON teams.id = heroes_teams.team_id
JOIN heroes ON heroes_teams.hero_id = heroes.id
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN powers ON heroes_powers.power_id = powers.id
GROUP BY teams.name
ORDER BY total_power;