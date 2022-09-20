Artist.create(name:"Albert Bierstadt", birthday:"January 7, 1830", birthplace:"Solingen, Rhince Province, Germany", deathday: "February 18, 1902", movement_id: 1, bio: "Albert Bierstadt was a German-American painter best known for his lavish, sweeping landscapes of the American West. He joined several journeys of the Westward Expansion to paint the scenes. He was not the first artist to record the sites, but he was the foremost painter of them for the remainder of the 19th century. Bierstadt was born in Prussia, but his family moved to the United States when he was one year old. He returned to study painting for several years in Düsseldorf. He became part of the second generation of the Hudson River School in New York, an informal group of like-minded painters who started painting along the Hudson River. Their style was based on carefully detailed paintings with romantic, almost glowing lighting, sometimes called luminism. Bierstadt was an important interpreter of the western landscape, and he is also grouped with the Rocky Mountain School." )


Movement.create(name:"Hudson River School", time_period:"mid-19th century", description: "The Hudson River School was a mid-19th century American art movement embodied by a group of landscape painters whose aesthetic vision was influenced by Romanticism. The paintings typically depict the Hudson River Valley and the surrounding area, including the Catskill, Adirondack, and White Mountains. Works by the second generation of artists associated with the school expanded to include other locales in New England, the Maritimes, the American West, and South America.")


Piece.create(name:"Among the Sierra Nevada, California", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Bierstadt_-_Among_the_Sierra_Nevada_Mountains_-_1868.jpg", year: 1868, movement_id: 1, artist_id: 1, medium_id: 1)

Medium.create(name: "Oil-on-Canvas")

puts "s33d."