class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthday, :deathday, :birthplace
end
