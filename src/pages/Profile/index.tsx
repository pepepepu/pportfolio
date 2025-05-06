import { useEffect, useState } from "react";
import { fetchSpotifyData } from "../../api/spotifyAuth";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const hash = window.location.hash;
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    const token = tokenMatch?.[1];

    if (token) {
      fetchSpotifyData("me", token)
        .then((data) => setProfile(data))
        .catch(console.error);
    }
  }, []);

  if (!profile) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Olá, {profile.display_name}</h1>
      <img src={profile.images?.[0]?.url} alt="Avatar" width={100} />
    </div>
  );
};

export default Profile;
