class PieceSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :img, :medium, :movement, :year, :artist

  def img
    if object.img.attached?
      {
        url: rails_blob_url(object.img, only_path: true)
      }
    end
  end
end
