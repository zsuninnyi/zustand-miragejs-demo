import styled from 'styled-components';

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: grey;
    width: 20%;
    padding: 25px 15px;
    & > ul {
        list-style-type: none;
        & > li {
            padding: 8px 0;
            position: relative;
            & .icon {
                position: absolute;
                left: -20%;
                top: 12px;
                color: white;
            }
        }
    }
`;
