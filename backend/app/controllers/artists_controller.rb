class ArtistsController < ApplicationController
    def index
        artists = Artist.all
        render json: ArtistSerializer.new(artists).serializable_hash.to_json
    end
end
