import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const NavigationButton = styled(NavLink).attrs({ activeClassName })`
    &.${activeClassName} {
        color: white;
        font-weight: bold;
    }
    color: #ccc;
    text-decoration: none;
`;
