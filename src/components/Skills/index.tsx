import {SKILLS_DATA} from '@constants/skills';
import Title from '@lib/Title';

function Skills() {
    return (
        <section className="container">
            <Title text="Skills" />
            {SKILLS_DATA.map(({name, descriptions}) => (
                <section className="sub__container" key={name}>
                    <h2>{name}</h2>
                    <ul className="list__decoration">
                        {descriptions.map((desc, index) => (
                            <li className="list__decoration" key={index}>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </section>
    );
}

export default Skills;
