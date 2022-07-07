class PieceSerializer
  include JSONAPI::Serializer
  belongs_to :artist
  belongs_to :movement
  attributes :name, :medium, :img, :year
end
