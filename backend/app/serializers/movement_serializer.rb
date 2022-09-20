class MovementSerializer
  include JSONAPI::Serializer
  attributes :name, :time_period, :description, :artists, :pieces

  # has_many :artists
  
  # has_many :pieces
end
