class ArtistsController < ApplicationController
    def index
        # artists = Artist.all
        render json: Artist.all, adapter: :json_api
    end
end
