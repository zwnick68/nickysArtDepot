class MediumSerializer
  include JSONAPI::Serializer
  attributes :name
  has_many :pieces
end
