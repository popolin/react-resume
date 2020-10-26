import React from 'react';

import Title from './Title';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  about: {
    fontFamily: 'Lato',
    fontSize: 10,
    padding: 1,
    marginBottom: 0.4,
    textAlign: 'justify',
  },
});

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';
const locale = currentLanguage === "pt" ? 'pt-br' : 'en';

const AboutMe = ({t, resume}) => {
    const degreesOrdered = resume.degrees.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    const lastDegree = degreesOrdered[0];

    const positionsOrdered = resume.positions.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    const lastPosition = positionsOrdered[0];
    const penultPosition = positionsOrdered[1];
    const antPenultPosition = positionsOrdered[2];
    const firstPosition = positionsOrdered[positionsOrdered.length-1];
    const yearsExperience = dayjs().year() - dayjs(firstPosition.begin).year();

    const aboutDesc = (description) => {
        const content = t(description, {
            firstName: resume.header.name.split(' ')[0],
            yearsExperience,
            lastGraduation: lastDegree.degree,
            lastGraduationSchool: lastDegree.school,
            latCompanyPosition: lastPosition.position,
            latCompany: lastPosition.company,
            penultCompany: penultPosition.company,
            beforePenultCompany: antPenultPosition.company,
            escapeInterpolation: true
        });
        return content.replace(/(<([^>]+)>)/gi, "");
    }

    const desc1 = aboutDesc('main:nav.description1');
    const desc2 = aboutDesc('main:nav.description2');

    
    return (
        <View>
            <Title>{t('main:about.title')}</Title>
            <Text style={styles.about}>
                {desc1}
            </Text>
            <Text style={styles.about}>
                {desc2}
            </Text>
        </View>
    )
};

export default AboutMe;
