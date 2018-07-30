# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
1.times do |requests|
   Request.create!(
      title: "Need help",
      description: "am stacked on the road ant it is so cold i need some jackets",
      address: "norrtullsgatan 29",
      latitude: 61.31,
      longitude: 17.02,
      request_type: "materiel",
      status: 0,
      answers_count: 0,
      user_id: 1

  
    )
  end