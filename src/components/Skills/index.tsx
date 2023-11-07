import {SKILLS_DATA} from '@constants/skills';
import Divider from '@lib/Divider';
import List from '@lib/List';
import Title from '@lib/Title';

function Skills() {
    return (
        <section>
            <Title text="Skills" />
            {SKILLS_DATA.map(({title, descriptions}) => (
                <div className="sub__container" key={title}>
                    <h2>{title}</h2>

                    <List items={descriptions} mt="0.5rem" className="text__grey__700" />
                </div>
            ))}
            <Divider />
        </section>
    );
}

export default Skills;
