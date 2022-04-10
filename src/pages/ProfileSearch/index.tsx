import ProfileShow from "components/ProfileShow";
import "./styles.css";

const ProfileSearch = () => {
	return (
		<div className="container">
			<div className="search-container">
				<h1>Encontre um perfil Github</h1>
				<input type="text" placeholder="Usuário Github" />
				<button>Encontrar</button>
			</div>
			<div className="infos-container">
				<ProfileShow />
			</div>
		</div>
	);
};

export default ProfileSearch;
