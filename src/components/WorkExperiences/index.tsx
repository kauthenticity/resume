import { WorkExperienceTable } from "./WorkExperienceTable";
import { WORK_EXPERIENCES_DATA } from "@constants/workExerience";

function WorkExperience() {
  return (
    <section className="container">
      <h1>
        <img className="icon" src="/images/WorkExperience.png" alt="" /> Work
        Experiences
      </h1>
      {WORK_EXPERIENCES_DATA.map((data) => (
        <WorkExperienceTable key={data.name} {...data} />
      ))}
    </section>
  );
}

export default WorkExperience;
