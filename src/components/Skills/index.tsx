import {SKILLS_DATA} from '@constants/skills';
import Divider from '@lib/Divider';
import Title from '@lib/Title';

function Skills() {
    return (
        <section>
            <Title text="Skills" />
            {SKILLS_DATA.map(({title, descriptions}) => (
                <section className="sub__container" key={title}>
                    <h2>{title}</h2>
                    <ul className="list__decoration">
                        {descriptions.map((desc, index) => (
                            <li className="list__decoration" key={index}>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <Divider />
        </section>
    );
}

export default Skills;
