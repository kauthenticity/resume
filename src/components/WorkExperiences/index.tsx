import {WORK_EXPERIENCES_DATA} from '@constants/workExerience';
import Title from '@lib/Title';
import {WorkExperienceTable} from './WorkExperienceTable';

function WorkExperience() {
    return (
        <section className="container">
            <Title text="Work Experiences" />
            {WORK_EXPERIENCES_DATA.map((data) => (
                <WorkExperienceTable key={data.name} {...data} />
            ))}
        </section>
    );
}

export default WorkExperience;
