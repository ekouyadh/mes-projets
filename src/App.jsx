import CarteProjet from "./CarteProjet";
import Encadre from "./Encadre";

function App() {
  return (
    <div>
      <h1>Mes projets</h1>

      <CarteProjet
        titre="Mon site personnel"
        technologies="HTML, CSS"
        description="Un site qui présente mes intérêts et mes réalisations."
      />

      <CarteProjet
        titre="Ma liste de tâches"
        technologies="JavaScript, HTML, CSS"
        description="Une application pour organiser les tâches de la semaine."
      />

      <Encadre>
        Je suis étudiant en informatique.
        Je souhaite développer mes compétences
        en programmation web et en réseaux.
      </Encadre>
    </div>
  );
}

export default App;