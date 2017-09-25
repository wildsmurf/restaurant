30.times do
  Menu.create(
    item: Faker::Pokemon.name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f
  )
end

puts "Menu seeded"
