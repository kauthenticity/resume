import {WORK_EXPERIENCES_DATA} from '@constants/workExerience';
import Divider from '@lib/Divider';
import Title from '@lib/Title';
import {WorkExperienceTable} from './WorkExperienceTable';

function WorkExperience() {
    return (
        <section>
            <Title text="Work Experiences" />
            {WORK_EXPERIENCES_DATA.map((data) => (
                <WorkExperienceTable key={data.name} {...data} />
            ))}

            <Divider />
        </section>
    );
}

export default WorkExperience;
