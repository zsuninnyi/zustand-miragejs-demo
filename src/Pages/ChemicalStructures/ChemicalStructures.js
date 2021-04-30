import React, { useEffect } from 'react';
import useStore from '../../hooks/useStore';
import Card from '../../components/presentational/Card';

const ChemicalStructures = () => {
    const { exportable } = useStore((state) => state);
    return (
        <div>
            <h2>Options</h2>
            <Card>SWITCH STATE: {exportable ? <>true</> : <>false</>}</Card>
        </div>
    );
};

export default ChemicalStructures;
