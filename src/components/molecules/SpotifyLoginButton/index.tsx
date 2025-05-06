// src/components/molecules/LoginButton.tsx
import { getSpotifyAuthUrl } from "../../../api/spotifyAuth";
import { Button } from "../../atoms";

const LoginButton = () => {
  const handleLogin = () => {
    const url = getSpotifyAuthUrl();
    if (url) {
      window.location.href = url;
    } else {
      console.error("URL de autenticação inválida.");
    }
  };

  console.log("Auth URL:", getSpotifyAuthUrl());
  return <Button onClick={handleLogin}>Login com Spotify</Button>;
};

export default LoginButton;
