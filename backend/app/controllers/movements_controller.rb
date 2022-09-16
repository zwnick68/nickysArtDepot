class MovementsController < ApplicationController
    def index
        render json: MovementSerializer.new(Movement.all, include: [:artists, :pieces]).serializable_hash.to_json
    end
end
