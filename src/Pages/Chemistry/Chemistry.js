import React, { useEffect } from 'react';
import Switch from 'react-switch';
import useStore from '../../hooks/useStore';
import Card from '../../components/presentational/Card';
import Paragraph from '../../components/presentational/Paragraph';

const Chemistry = () => {
    const { exportable, toggleExport, fetchData } = useStore((state) => state);
    useEffect(() => {
        fetchData('/api/parameter/loadBulk');
    }, []);
    return (
        <div>
            <>
                <h2>Options</h2>
                <Card>
                    <Paragraph disabled={!exportable}>
                        <Switch onChange={toggleExport} checked={exportable}></Switch>
                        <h3>Disable V2000 export</h3>
                        <p>
                            Disable the option to export in any of the MDL V2000 formats, and hide the absolute stereo chiral flag from the canvas (for more
                            information please see the documentation)
                        </p>
                    </Paragraph>
                </Card>
            </>
        </div>
    );
};

export default Chemistry;
