import React from 'react';

import Title from './Title';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  from: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  cert: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
});

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';
const locale = currentLanguage === "pt" ? 'pt-br' : 'en';

const Certifications = ({t, certifications}) => {
    return (
        <View>
            <Title>{t('main:resume.section.certifications')}</Title>
            {certifications.map((cert, i) => (
                <View key={`cert-${i}`} style={{marginTop: i === 0 ? 0 : 10}}>
                    <Text style={styles.from}>{cert.from}</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    {cert.tests.map((test, idx) => (
                        <Text key={`test${idx}`} style={styles.cert}>
                            {test.shortName}{(idx < cert.tests.length - 1) ? ', ' : ''}
                        </Text>
                    ))}
                    </View>
                </View>
            ))}
        </View>
    )
};

export default Certifications;
