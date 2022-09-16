class ArtistsController < ApplicationController
    def index
        # artists = Artist.all
        render json: ArtistSerializer.new(Artist.all, include: [:movement, :pieces] ).serializable_hash.to_json
    end
end
