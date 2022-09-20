class PiecesController < ApplicationController
    def index
        render json: PieceSerializer.new(Piece.all).serializable_hash.to_json 
    end

    def create
       piece = Piece.create!(params[:name, :img, :year, :artist_id, :movement_id, :medium_id])
       render json: PieceSerializer.new(piece).serializable_hash.to_json
    end
end
