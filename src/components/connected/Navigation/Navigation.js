import React from 'react';
import { NavigationButton } from '../../presentational/NavigationButton';
import { NavigationWrapper } from './Navigation.styled';
import { GiChemicalDrop, GiChemicalTank } from 'react-icons/gi';

const Navigation = () => {
    return (
        <NavigationWrapper>
            <ul>
                <li>
                    <span className='icon'>
                        <GiChemicalDrop />
                    </span>
                    <NavigationButton to='/chemistry'>Chemistry</NavigationButton>
                </li>
                <li>
                    <span className='icon'>
                        <GiChemicalTank />
                    </span>
                    <NavigationButton to='/chemical-structures'>Chemical Structures</NavigationButton>
                </li>
            </ul>
        </NavigationWrapper>
    );
};

export default Navigation;
