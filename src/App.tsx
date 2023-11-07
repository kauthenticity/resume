//import Components from "./components";
import Components from '@components';

function App() {
    return (
        <>
            <Components.Header />
            <main>
                <Components.Introduce />
                <Components.WorkExperience />
                <Components.SideProjects />
                <Components.Skills />
                <Components.Educations />
                <Components.Languages />
                <Components.Etc />
            </main>
        </>
    );
}

export default App;
