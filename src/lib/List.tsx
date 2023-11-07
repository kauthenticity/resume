import classnames from 'classnames';
import styled from 'styled-components';
import type {TMarginProps} from 'types/style.type';

type TLineProps = {
    items: string[];
    className?: string;
} & TMarginProps;

function List({items, mt, mb, className}: TLineProps) {
    return (
        <StyledList className={classnames('list__decoration__text', className)} mt={mt} mb={mb}>
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
