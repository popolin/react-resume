import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';
const locale = currentLanguage === 'pt' ? 'pt-br' : 'en';

const Courses = ({ t, courses }) => {
  const coursesOrdered = courses.sort((a, b) => (dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1));
  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Title>{t('main:resume.section.courses')}</Title>
        <Text style={{ fontSize: 10, marginLeft: 3, marginBottom: 10 }}>
          (
          {t('main:resume.lastThree')}
          )
        </Text>
      </View>
      {coursesOrdered.filter((cor, idx) => idx < 3).map((course, i) => (
        <View key={`course-${i}`} style={{ marginTop: i === 0 ? 0 : 10 }}>
          <Text style={styles.school}>{course.title}</Text>
          <Text style={styles.degree}>{course.school}</Text>
          <Text style={styles.candidate}>
            {dayjs(course.begin).locale(locale).format('MMMM, YYYY')}
            {' '}
            (
            {course.duration}
            h)
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Courses;
