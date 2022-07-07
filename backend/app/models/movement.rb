class Movement < ApplicationRecord
    has_many :artists
    has_many :pieces
end
