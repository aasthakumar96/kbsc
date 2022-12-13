import React from 'react';
import DECH from './DECH';
import DEDE from './DEDE';
import FRBE from './FRBE';
import FRCA from './FRCA';
import FRFR from './FRFR';
import JAJP from './JAJP';
import ENUS from './ENUS';

export default function Map(props) {

    switch (props.code) {
        case "en-US":
            return <ENUS />

        case "de-DE":
            return <DEDE />

        case "de-CH":
            return <DECH />

        case "fr-BE":
            return <FRBE />

        case "fr-CA":
            return <FRCA />

        case "fr-FR":
            return <FRFR />

        case "ja-JP":
            return <JAJP />

        default:
            // code block
            return null
    }
    }













