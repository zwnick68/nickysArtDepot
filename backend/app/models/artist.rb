class Artist < ApplicationRecord
    has_many :pieces
    belongs_to :movement
    
end
