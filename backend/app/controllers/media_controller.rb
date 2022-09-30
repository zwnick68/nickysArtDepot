class MediaController < ApplicationController
    def index
        render json: Medium.all, adapter: :json_api
    end
end
