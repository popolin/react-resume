import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import dayjs from 'dayjs';

const currentLanguage = localStorage.getItem('@react-resume/language') || 'en';
const locale = currentLanguage === "pt" ? 'pt-br' : 'en';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

const ExperienceEntry = ({t, experience}) => {
    const {company, position, begin, end, points} = experience;
    const beginLocale = dayjs(begin).locale(locale);
    const beginFormatted = beginLocale.format("MMMM, YYYY");
    var endFormatted = t('main:resume.experience.present');
    if(end){
        const endLocale = dayjs(end).locale(locale);
        endFormatted = endLocale.format("MMMM, YYYY");
    }

  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{`${beginFormatted} - ${endFormatted}`}</Text>
        </View>
      </View>
      <List>
        {points.map((detail, i) => (
          <Item key={`point-${i}`} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Experience = ({t, positions}) => {
    const positionsOrdered = positions.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Title>{t('main:resume.section.experience')}</Title>
                <Text style={{fontSize: 10, marginLeft: 3, marginBottom: 10}}>({t('main:resume.lastThree')})</Text>
            </View>
            {positionsOrdered.filter((pos, idx) => idx < 3).map((position, idx) => (
            <ExperienceEntry
                t={t}
                experience={position}
                key={`experience-${idx}`}
            />
            ))}
        </View>
    )
};

export default Experience;
