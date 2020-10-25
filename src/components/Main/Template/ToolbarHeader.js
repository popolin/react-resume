import React from 'react';
import {useTranslation} from "react-i18next";

const ToolbarHeader = () => {
    const {t} = useTranslation('edit');

    return (
        <div
            style={{
            textAlign: 'center',
            }}
        >
            <h1
            style={{
                marginBottom: 0,
                textAlign: 'center',
            }} >💼 {t('toolbar.options')}
            </h1>
            <em
            style={{
                fontFamily: 'Cutive Mono, monospace',
                fontWeight: 100,
            }}
            >
            {t('toolbar.construction')}
            </em>
        </div>
    )
};

export default ToolbarHeader;
