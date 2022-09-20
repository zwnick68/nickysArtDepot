class MediumSerializer
  include JSONAPI::Serializer
  attributes :name, :pieces
  # has_many :pieces
end
