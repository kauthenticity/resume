import React from "react";
import {
  Header,
  Introduce,
  WorkExperience,
  Strength,
  Skills,
  Educations,
  Etc,
  Footer,
} from "./components";
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
        <Etc />
      </main>
      <Footer />
    </>
  );
}

export default App;
