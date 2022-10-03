import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Pieces from '../../components/Pieces'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    getPieces: builder.query({
      query: () => '/pieces'
    }),
    getMovements: builder.query({
      query: () => '/movements'
    }), 
    getMedia: builder.query({
      query: () => '/media'
    }), 
    getArtists: builder.query({
      query: () => '/artists'
    }),
    addPiece: builder.mutation({
      query: (piece) => ({
        url: '/pieces', 
        method: 'POST',
        body: piece
      })
    }), 
    addMovement: builder.mutation({
      query: (movement) => ({
        url: '/movements', 
        method: 'POST',
        body: movement
      })
    }), 
    addArtist: builder.mutation({
      query: (artist) => ({
        url: '/artists', 
        method: 'POST',
        body: artist
      })
    }), 
    addMedium: builder.mutation({
      query: (medium) => ({
        url: '/media', 
        method: 'POST',
        body: medium
      })
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPiecesQuery, useGetMovementsQuery, useGetMediaQuery, useAddArtistMutation, useAddMediumMutation, useAddPieceMutation, useAddMovementMutation } = apiSlice