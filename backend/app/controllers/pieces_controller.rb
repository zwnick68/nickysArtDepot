class PiecesController < ApplicationController
    def index
        render json: PieceSerializer.new(Piece.all, include: [:artist, :movement]).serializable_hash.to_json 
    end
end
