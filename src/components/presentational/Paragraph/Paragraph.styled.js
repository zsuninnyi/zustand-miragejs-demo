import styled from 'styled-components';

const Paragraph = styled.div`
    color: ${(props) => (props.disabled ? 'grey' : 'black')};
    p {
        font-size: 0.8em;
    }
`;

export default Paragraph;
