import React from 'react';

import dayjs from 'dayjs';
import { Link, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import {getSocialImage} from '../../util/iconUtil';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  image: {
    height: 12,
    width: 12
  },
  footerText: {
    fontSize: 10,
  },
  viewFooter: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    alignItems: 'center',
    maxHeight: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
  footer: {
    fontSize: 10,
    fontFamily: 'Lato Bold',
    textAlign: 'left',
  },
  linkSocial: {
    flex: 1, 
    flexDirection: 'row', 
    textDecoration: 'none', 
    justifyContent: 'center'
  },
});

export default ({resume}) => {
    const contactsWithShort = resume.contacts.map(contact => {
        const {link, label} = contact;
        const fromIndex = link.lastIndexOf('/');
        let short = null;
        if(fromIndex > 0){
            short = link.substr(fromIndex+1);
        }
        return {
            link, label, short
        };
    });
    const positionsOrdered = resume.positions.sort((a, b) => dayjs(a.begin).isBefore(dayjs(b.begin)) ? 1 : -1);
    const lastPosition = positionsOrdered[0];
    return (
        <View style={{flexDirection: 'column'}}>
            <View style={styles.container}>
                <View style={styles.detailColumn}>
                    <Text style={styles.name}>{resume.header.name}</Text>
                <Text style={styles.subtitle}>{lastPosition.position}</Text>
                </View>
                <View style={styles.linkColumn}>
                    <Link style={styles.link}>{resume.header.email}</Link>
                    <Link style={styles.link}>{resume.header.phone}</Link>
                    <Link style={styles.link}>{`${resume.header.city}, ${resume.header.state} - ${resume.header.country}`}</Link>
                </View>
            </View>
            <View style={styles.viewFooter}>
                {contactsWithShort.filter(x => x.short).map((contact, idx) => (
                    <Link src={contact.link} key={`contact-${idx}`} style={styles.linkSocial}>
                        <>
                        <Image
                            src={`${process.env.PUBLIC_URL}${getSocialImage(contact.label)}`}
                            style={styles.image} />
                        <Text style={styles.footer}>{contact.short}</Text>
                        </>
                    </Link>
                ))}
                <Link src={resume.header.website} style={styles.linkSocial}>
                    <>
                    <Image
                        src={`${process.env.PUBLIC_URL}${getSocialImage('Website')}`}
                        style={styles.image} />
                    <Text style={[styles.footer, {marginLeft: 2}]}>{resume.header.website}</Text>
                    </>
                </Link>
            </View>
        </View>
    )
};
