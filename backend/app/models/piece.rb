class Piece < ApplicationRecord
    belongs_to :movement
    belongs_to :artist
    belongs_to :medium

    has_one_attached :img

    # def get_img_url
    #     url_for(self.image) 
    # end
end
