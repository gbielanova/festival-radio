import spotipy
from spotipy.oauth2 import SpotifyOAuth
import random

OAUTH_AUTHORIZE_URL = "https://accounts.spotify.com/authorize"
OAUTH_TOKEN_URL = "https://accounts.spotify.com/api/token"

scope = "playlist-modify-private"


def generate_playlist(name, *artists_list):

    print("******start")

    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

    print("******auth passed")

    user_id = sp.current_user()["id"]
    print(f"******user_id - {user_id}")

    artists = list(artists_list)

    print(f"******artists - {artists}")

    song_urls = []
    for artist in artists:
        artist_id = sp.search(artist, type="artist")["artists"]["items"][0]["id"]
        top_songs = sp.artist_top_tracks(artist_id)
        for song in top_songs["tracks"]:
            song_urls.append(song["uri"])

    playlist = sp.user_playlist_create(user_id, name, False)
    playlist_id = playlist["id"]

    random.shuffle(song_urls)

    sp.playlist_add_items(playlist_id, song_urls)

    return playlist_id

generate_playlist('my playlist', 'tnmk', 'louna')