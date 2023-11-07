import {SKILLS_DATA} from '@constants/skills';

function Skills() {
    return (
        <section className="container">
            <h1>
                <img className="icon" src="images/Strength.png" alt="skill" />
                Skills
            </h1>
            {SKILLS_DATA.map(({name, descriptions}) => (
                <section className="subContainer" key={name}>
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
