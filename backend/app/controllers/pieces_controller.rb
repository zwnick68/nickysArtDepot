class PiecesController < ApplicationController
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: PieceSerializer.new(Piece.all).serializable_hash.to_json 
    end

    def show
        piece = find_piece
        render json: piece
    end

    def create
       piece = Piece.create!(piece_params)
        render json: PieceSerializer.new(piece).serializable_hash.to_json, status: :created
    end

    def piece_params
        params.permit(:name, :img, :year, :artist_id, :movement_id, :medium_id)
    end

    def find_piece
        Piece.find_by(params[:id])
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    def render_not_found_response
        render json: { error: "not found" }, status: :not_found
    end
end
