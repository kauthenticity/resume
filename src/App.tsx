import {
  Header,
  Introduce,
  WorkExperience,
  Strength,
  Skills,
  Educations,
  Language,
  Etc,
  Footer,
  Projects,
} from "./components";
function App() {
  return (
    <>
      <Header />
      <main>
        <Introduce />
        {/* <Skills /> */}
        <WorkExperience />
        <Projects />
        <Strength />
        <Educations />
        <Language />
        <Etc />
      </main>
      <Footer />
    </>
  );
}

export default App;
