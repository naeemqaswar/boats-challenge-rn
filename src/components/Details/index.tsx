import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Animated, {FadeInUp, FadeOutDown} from 'react-native-reanimated';

import {Spacing} from '../../constants/values';
import DisplayContext from '../../context';
import DetailsContent from '../../../assets/data/DetailsContent';
import Spec from './Spec';
import Gallery from './Gallery';

export default function Details() {
  const {title, creator, description, specs, gallery} = DetailsContent;
  const {displayStatus} = useContext(DisplayContext);

  if (displayStatus === false) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.horizontalSpace}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>
            By <Text style={styles.creator}>{creator}</Text>
          </Text>
        </View>
        <Animated.View
          style={styles.horizontalSpace}
          entering={FadeInUp.duration(500)}
          exiting={FadeOutDown}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.sectionTitle}>Spec</Text>
          <View style={styles.specWrapper}>
            {specs.map(({title, value}, i) => (
              <Spec key={i} details={{title, value}} />
            ))}
          </View>
          <Text style={styles.sectionTitle}>Gallery</Text>
        </Animated.View>
        <Animated.View
          style={styles.galleryContainer}
          entering={FadeInUp.duration(500)}
          exiting={FadeOutDown}>
          <ScrollView
            contentContainerStyle={styles.galleryWrapper}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {gallery.map((img, i) => (
              <Gallery key={i} src={img} />
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    paddingTop: Spacing.screenTop,
  },
  horizontalSpace: {
    paddingHorizontal: Spacing.screenHorizontal,
  },
  wrapper: {
    marginTop: 230,
    marginBottom: 25,
  },
  title: {
    color: '#0d0b0c',
    fontSize: 30,
    letterSpacing: 0.5,
  },
  subTitle: {
    color: '#636363',
    fontSize: 14,
    marginBottom: 12,
  },
  creator: {
    color: '#0d0b0c',
  },
  description: {
    color: '#636363',
    fontSize: 14,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#636363',
    fontSize: 26,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  specWrapper: {
    marginBottom: 15,
  },
  galleryContainer: {
    paddingLeft: Spacing.screenHorizontal,
  },
  galleryWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
