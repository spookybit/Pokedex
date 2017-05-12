json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
json.image_url asset_path(@pokemon.image_url)

json.items @pokemon.items do |item|
  json.extract! item, :image_url, :id, :name, :happiness, :price, :pokemon_id
end
