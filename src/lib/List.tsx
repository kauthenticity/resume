import styled from 'styled-components';
import type {TMarginProps} from 'types/style.type';

type TLineProps = {
    items: string[];
} & TMarginProps;

function List({items, mt, mb}: TLineProps) {
    return (
        <StyledList className="list__decoration text__grey__800" mt={mt} mb={mb}>
            {items.map((item, idx) => (
                <li className="list__decoration" key={idx}>
                    {item}
                </li>
            ))}
        </StyledList>
    );
}

export default List;

const StyledList = styled.ul<TMarginProps>`
    margin-block-start: ${({mt}) => mt};
    margin-block-end: ${({mb}) => mb};
`;
