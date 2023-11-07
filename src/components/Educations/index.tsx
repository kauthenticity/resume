import {Table, Td} from '@styles';
import styled from 'styled-components';

function Educations() {
    return (
        <section className="container">
            <h1>
                <img className="icon" src="images/Educations.png" alt="" /> Educations
            </h1>
            <section className="subContainer">
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
        </section>
    );
}

export default Educations;

const Duration = styled.div`
    color: var(--gray600);
    margin-top: 0.75rem;
`;
