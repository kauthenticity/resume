import {ETC_DATA} from '@constants/etc';
import {Duration} from '@lib/Duration';
import Title from '@lib/Title';
import {Table, Td} from '@styles';

function Etc() {
    return (
        <section className="container">
            <Title text="ETC." />
            {ETC_DATA.map(({title, duration, descriptions}, index) => (
                <section className="sub__container" key={index}>
                    <h2>{title}</h2>
                    <Duration duration={duration} />
                    <Table>
                        <tbody>
                            <tr>
                                <Td className="label">상세</Td>
                                <Td>
                                    <ul className="list__decoration" style={{margin: 0}}>
                                        {descriptions.map((desc, idx) => (
                                            <li className="list__decoration text__grey__900" key={idx}>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </Td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            ))}
        </section>
    );
}

export default Etc;
