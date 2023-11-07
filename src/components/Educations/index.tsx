import Divider from '@lib/Divider';
import Title from '@lib/Title';
import {Table, Td} from '@styles';
import styled from 'styled-components';

function Educations() {
    return (
        <section>
            <Title text="Educations" />
            <section className="sub__container">
                <h2>서강대학교 컴퓨터공학과</h2>
                <Duration>2018.02 - 2023.02</Duration>
                <Table>
                    <thead />
                    <tbody>
                        <tr>
                            <Td className="label" style={{width: '6rem'}}>
                                CGPA
                            </Td>
                            <Td>4.02/4.5</Td>
                        </tr>
                    </tbody>
                </Table>
            </section>

            <Divider />
        </section>
    );
}

export default Educations;

const Duration = styled.div`
    color: var(--gray600);
    margin-top: 0.75rem;
`;
