import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
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

export default ({ t, degrees }) => {
  const degreesOrdered = degrees.sort((a, b) => (dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1));

  return (
    <View style={styles.container}>
      <Title>{t('main:resume.section.education')}</Title>
      {degreesOrdered.map((degree, idx) => (
        <View key={`degree-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10 }}>
          <Text style={styles.school}>{degree.school}</Text>
          <Text style={styles.degree}>{degree.degree}</Text>
          <Text style={styles.candidate}>
            {degree.begin}
            {degree.end && ` - ${degree.end}`}
          </Text>
        </View>
      ))}
    </View>
  );
};
