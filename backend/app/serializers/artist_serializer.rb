class ArtistSerializer
  include JSONAPI::Serializer
  attributes :name, :birthday, :deathday, :birthplace, :bio
  
  has_many :pieces
  
  belongs_to :movement
end
