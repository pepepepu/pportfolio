// src/utils/spotifyAuth.ts
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "user-top-read",
];

export const getSpotifyAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "token",
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};

// src/utils/spotifyApi.ts
export const fetchSpotifyData = async (endpoint: string, token: string) => {
  const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao acessar Spotify: ${response.statusText}`);
  }

  return response.json();
};
