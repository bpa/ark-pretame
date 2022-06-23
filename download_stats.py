import requests
import json

# headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:101.0) Gecko/20100101 Firefox/101.0',
#            'Accept': 'application/json',
#            'Accept-Encoding': 'gzip, deflate, br',
#            'Pragma': 'no-cache',
#            'Cache-Control': 'no-cache'}
# r = requests.get('https://www.dododex.com/api/data.json?2')
# print(r)
# data = r.json()
with open('data.json') as f:
    data = json.load(f)
creatures = []
for c in data['CREATURES'].values():
    try:
        if 'bs' in c:
            health = c['bs']['h']
            melee = c['bs']['d']
            damage = melee.get('a', [{'b': 0}])[0]['b']
            creatures.append({
                'label': c['name'],
                'health': {'base': health['b'], 'wild': health['w']},
                'melee':  {'base': melee['b'], 'wild': melee['w']},
                'damage': damage
            })
    except Exception as e:
        print(c['name'])
        print(e)
        break
with open('src/creatures.json', 'w') as f:
    json.dump(creatures, f)
