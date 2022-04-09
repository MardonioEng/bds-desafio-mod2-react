import "./styles.css";

const ProfileSearch = () => {
  return (
    <div className="search-container">
      <h1>Encontre um perfil Github</h1>
      <input type="text" placeholder="Usuário Github" />
      <button>Encontrar</button>
    </div>
  )
}

export default ProfileSearch;