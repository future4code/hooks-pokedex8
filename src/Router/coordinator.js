//========================== Vai para HomePage
export const goToHomePage = (navigate) => {
  navigate("/");
};

//========================== Vai para DetalhesPage
export const goToDetalhesPage = (navigate, id) => {
  navigate(`/detalhes/${id}`);
};

//========================== Vai para PokedexPage
export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};

//========================== Volta uma página
export const goBack = (navigate) => {
  navigate(-1);
};
