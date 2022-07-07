class MovementsController < ApplicationController
    def index
        render json: MovementSerializer.new(Movement.all).serializable_hash.to_json
    end
end
