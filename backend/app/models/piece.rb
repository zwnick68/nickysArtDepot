class Piece < ApplicationRecord
    belongs_to :movement
    belongs_to :artist
end
