class MediaController < ApplicationController
    def index
        render json: MediumSerializer.new(Medium.all).serializable_hash.to_json
    end
end
