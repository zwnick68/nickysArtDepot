class MovementsController < ApplicationController
    def index
        render json: Movement.all, adapter: :json_api
    end
end
