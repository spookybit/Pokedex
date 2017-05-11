# json.array! @parties do |party|
#   json.name party.name
#   json.guests party.guests do |guest|
#     json.name guest.name
#     json.gifts guest.gifts do |gift|
#       json.title gift.title
#     end
#   end
# end

json.array! @parties, :name, :guests
