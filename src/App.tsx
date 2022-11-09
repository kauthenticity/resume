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
} from "./components"
function App() {
  return (
    <>
      <Header />
      <main>
        <Introduce />
        <Skills />
        <WorkExperience />
        <Strength />
        <Educations />
        <Language />
        <Etc />
      </main>
      <Footer />
    </>
  )
}

export default App
