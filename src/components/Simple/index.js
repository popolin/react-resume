import React from 'react';

import ReactPDF, {
  Document,
  Font,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


import LatoBold from "./fonts/Lato/LatoBold.ttf"
import LatoItalic from "./fonts/Lato/LatoItalic.ttf"
import LatoRegular from "./fonts/Lato/LatoRegular.ttf"
import OpenSansRegular from "./fonts/OpenSans/OpenSansRegular.ttf"

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  
  leftColumn: {
    flexDirection: 'column',
    width: '50%',
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  
  
});

Font.register( {
  family: 'Open Sans',
  src: OpenSansRegular,
});
Font.register( {
  family: 'Lato',
  src: LatoRegular,
});
Font.register( {
  family: 'Lato Italic',
  src: LatoItalic,
});
Font.register( {
  family: 'Lato Bold',
  src: LatoBold,
});

const Resume = (props) => {
    const {resume, t} = props;
    
    return (
    <Page {...props} style={styles.page}>
        <Header resume={props.resume} />
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Education t={t} degrees={resume.degrees} />
            </View>
            <View style={styles.leftColumn}>
                <Skills />
            </View>
        </View>
        <Experience t={t} positions={resume.positions} />
    </Page>
    )
};

export const Output = ({resume, t}) => (
  <Document
    author="Michel Popolin"
    keywords="react, resume, awesome"
    subject="Updated Resume"
    title="Resume"
  >
    <Resume t={t} resume={resume} size="A4" />
  </Document>
);

// ReactPDF.render(<Output />, `${__dirname}/output.pdf`);
