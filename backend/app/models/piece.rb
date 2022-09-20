class Piece < ApplicationRecord
    belongs_to :movement
    belongs_to :artist
    belongs_to :medium
end
