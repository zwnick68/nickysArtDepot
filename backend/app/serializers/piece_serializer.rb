class PieceSerializer
  include JSONAPI::Serializer
  # belongs_to :artist
  # belongs_to :movement
  # belongs_to :medium
  attributes :name, :medium, :img, :year, :artist, :movement
end
