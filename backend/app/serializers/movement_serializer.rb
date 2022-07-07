class MovementSerializer
  include JSONAPI::Serializer
  attributes :name, :time_period, :description

  has_many :artists
  
  has_many :pieces
end
