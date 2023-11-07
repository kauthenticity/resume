import {WORK_EXPERIENCES_DATA} from '@constants/workExerience';
import Chip from '@lib/Chip';
import Divider from '@lib/Divider';
import {Duration} from '@lib/Duration';
import FlexBox from '@lib/FlexBox';
import Title from '@lib/Title';
import {WorkExperienceTable} from './WorkExperienceTable';

function WorkExperience() {
    return (
        <section>
            <Title text="Work Experiences" />
            {WORK_EXPERIENCES_DATA.map((data) => (
                <div className="sub__container" key={data.title}>
                    <h2>{data.title}</h2>
                    <Duration duration={data.duration} />

                    <FlexBox alignItems="center" gap="8px" mt="12px" flexWrap="wrap">
                        {data.techStacks.map(({text}) => (
                            <Chip key={text} text={text} />
                        ))}
                    </FlexBox>

                    <WorkExperienceTable key={data.title} {...data} />
                </div>
            ))}

            <Divider />
        </section>
    );
}

export default WorkExperience;
