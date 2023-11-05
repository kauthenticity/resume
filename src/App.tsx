//import Components from "./components";
import Components from "@components";

function App() {
  return (
    <>
      <Components.Header />
      <main>
        <Components.Introduce />
        <Components.Skills />
        <Components.WorkExperience />
        <Components.SideProjects />
        <Components.Educations />
        <Components.Languages />
        <Components.Etc />
      </main>
    </>
  );
}

export default App;
