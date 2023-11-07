import List from '@lib/List';
import {Table, Td} from '@styles';
import type {TWorkExperience} from 'types/data.type';

export function WorkExperienceTable({introduce, role, descriptions, outcome}: TWorkExperience) {
    return (
        <Table>
            <tbody>
                <tr>
                    <Td className="label">소개</Td>
                    <Td>{introduce}</Td>
                </tr>
                <tr>
                    <Td className="label">역할</Td>
                    <Td>{role}</Td>
                </tr>

                <tr>
                    <Td className="label">상세</Td>
                    <Td>
                        <List items={descriptions} mb="0.75rem" />
                    </Td>
                </tr>

                <tr>
                    <Td className="label">성과</Td>
                    <Td>
                        <List items={outcome} mb="0.75rem" />
                    </Td>
                </tr>
            </tbody>
        </Table>
    );
}
