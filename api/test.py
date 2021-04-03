from nba_api.stats.static import players

player_dict = players.get_players()

bron = [player for player in player_dict if player['full_name'] == 'LeBron James'][0]
bron_id = bron['id']

# print(player_dict)

print(tuple(player_dict))














