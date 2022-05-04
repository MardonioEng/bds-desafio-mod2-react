import axios from 'axios';
import ProfileShow from 'components/ProfileShow';
import { useState } from 'react';
import './styles.css';

type FormData = {
	username: string;
}

type Profile = {
	avatar_url: string,
  url: string,
  name: string,
  location: string,
  followers: number,
}

const ProfileSearch = () => {
	const [profile, setProfile] = useState<Profile>();
	const [formData, setFormData] = useState<FormData>({
    username: '',
  });

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setFormData({ ...formData, [name]: value });
		console.log(formData);
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		axios.get(`https://api.github.com/users/${formData.username}`)
			.then(response => setProfile(response.data))
			.catch((error) => setProfile(undefined));
	}

	return (
		<div className="container">
			<div className="search-container">
				<h1>Encontre um perfil Github</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Usuário Github"
						value={formData.username}
						onChange={handleChange}
					/>
					<button>Encontrar</button>
				</form>
			</div>
			<div className="infos-container">
				{	profile &&
					<ProfileShow {...profile} />
				}
			</div>
		</div>
	);
};

export default ProfileSearch;

