class MediaController < ApplicationController
    def index
        render json: MediumSerializer.new(Medium.all, include: [:pieces]).serializable_hash.to_json
    end
end
