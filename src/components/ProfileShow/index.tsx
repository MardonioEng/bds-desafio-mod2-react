import "./styles.css";

interface ProfileShowProps {
	avatar_url: string,
  url: string,
  name: string,
  location: string,
  followers: number,
}

const ProfileShow = ({ avatar_url, url, name, location, followers }: ProfileShowProps) => {
	return (
		<div className="profile-show-container">
			<div className="avatar">
				<img src={avatar_url} alt="Imagem do perfil" />
			</div>
			<div className="info">
				<h2>Informações</h2>
				<div className="info-items">
					<p><span>Perfil: </span><a href="/">{url}</a></p>
					<p><span>Seguidores: </span>{followers}</p>
					<p><span>Localidade: </span>{location}</p>
					<p><span>Nome: </span>{name}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileShow;
