json.partial! 'api/guests/guest'

json.gifts @guest.gifts do |gift|
  json.extract! gift, :title, :description
end
