import React, { Component } from 'react'
import { Text, View,   StyleSheet, Image} from 'react-native'
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export default function QuestionCard() {
    return (
<View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
          <Text style={[styles.q11, styles.q11Typo]}>Q1.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            당신의 연령대를 알려주세요
          </Text>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <View style={[styles.rectangleParent, styles.rectanglePosition]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  //source={require("../assets/rectangle-2.png")}
                />
                <Text style={[styles.text1, styles.textTypo2]}>20세 이하</Text>
              </View>
              <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  //source={require("../assets/rectangle-211.png")}
                />
                <Text style={[styles.text1, styles.textTypo2]}>30~40세</Text>
              </View>
              <View
                style={[styles.rectangleContainer, styles.rectanglePosition]}
              >
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  //source={require("../assets/rectangle-221.png")}
                />
                <Text style={[styles.text1, styles.textTypo2]}>50~60세</Text>
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  //source={require("../assets/rectangle-231.png")}
                />
                <Text style={[styles.text1, styles.textTypo2]}>20~30세</Text>
              </View>
              <View style={styles.rectangleParent1}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  //source={require("../assets/rectangle-241.png")}
                />
                <Text style={[styles.text1, styles.textTypo2]}>40~50세</Text>
              </View>
              <View style={styles.rectangleParent1}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  //source={require("../assets/rectangle-251.png")}
                />
                <Text style={[styles.text1, styles.textTypo2]}>60세 이상</Text>
              </View>
            </View>
          </View>
        </View>
        </View>
        )
    }


    const styles = StyleSheet.create({
        q1ShadowBox: {
          paddingVertical: Padding.p_smi,
          paddingHorizontal: Padding.p_2xs,
          width: 340,
          shadowOpacity: 1,
          elevation: 4,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: Border.br_xl,
          backgroundColor: Color.colorWhite,
        },
        q11Typo: {
          color: Color.colorSkyblue_200,
          fontWeight: "700",
          fontSize: FontSize.size_21xl,
          textAlign: "left",
          fontFamily: FontFamily.nanumSquareRound,
        },
        textTypo3: {
          color: Color.colorBlack,
          textAlign: "left",
          fontWeight: "700",
        },
        frameParentFlexBox: {
          flexDirection: "row",
          marginTop: 7,
        },
        rectanglePosition: {
          left: 0,
          position: "absolute",
        },
        textTypo2: {
          color: Color.colorWhite,
          fontSize: FontSize.size_mini,
          left: 12,
          textAlign: "left",
          fontFamily: FontFamily.nanumSquareRound,
          fontWeight: "700",
          position: "absolute",
        },
        q2SpaceBlock: {
          marginTop: 25,
          alignItems: "center",
        },
        childFrameLayout: {
          height: 90,
          opacity: 0.8,
          borderRadius: Border.br_3xs,
        },
        textTypo1: {
          top: 133,
          zIndex: 3,
          color: Color.colorWhite,
          fontSize: FontSize.size_mini,
          textAlign: "left",
          fontFamily: FontFamily.nanumSquareRound,
          fontWeight: "700",
          position: "absolute",
        },
        textTypo: {
          left: 23,
          color: Color.colorWhite,
          fontSize: FontSize.size_mini,
          textAlign: "left",
          fontFamily: FontFamily.nanumSquareRound,
          fontWeight: "700",
          position: "absolute",
        },
        findMyTripContainerPosition: {
          top: 19,
          position: "absolute",
        },
        q11: {
          textAlign: "left",
        },
        text: {
          marginTop: 7,
          fontSize: FontSize.size_xl,
          fontFamily: FontFamily.nanumSquareRound,
          color: Color.colorBlack,
        },
        frameChild: {
          height: 57,
          zIndex: 0,
          opacity: 0.8,
          borderRadius: Border.br_3xs,
          width: 155,
        },
        text1: {
          top: 22,
          zIndex: 1,
        },
        rectangleParent: {
          top: 0,
        },
        rectangleGroup: {
          top: 62,
        },
        rectangleContainer: {
          top: 124,
        },
        frameGroup: {
          height: 181,
          width: 155,
        },
        rectangleParent1: {
          marginTop: 5,
        },
        frameContainer: {
          marginLeft: 7,
          justifyContent: "center",
          alignItems: "center",
        },
        frameParent: {
          height: 185,
          paddingHorizontal: 0,
          paddingVertical: 2,
          overflow: "hidden",
          width: 317,
          justifyContent: "center",
          alignItems: "center",
        },
        q1: {
          justifyContent: "center",
          height: 295,
          paddingHorizontal: Padding.p_2xs,
          width: 340,
          shadowOpacity: 1,
          elevation: 4,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: Border.br_xl,
          alignItems: "center",
        },
        frameChild3: {
          zIndex: 0,
          width: 155,
        },
        frameChild4: {
          zIndex: 1,
          width: 155,
          marginTop: 7,
        },
        text8: {
          top: 37,
          zIndex: 2,
        },
        text9: {
          left: 13,
          zIndex: 3,
        },
        text11: {
          zIndex: 3,
          left: 12,
          top: 133,
        },
        rectangleParent4: {
          left: 162,
          top: 0,
          position: "absolute",
        },
        frameParent1: {
          height: 187,
          width: 317,
          marginTop: 7,
        },
        q2: {
          paddingVertical: Padding.p_smi,
          paddingHorizontal: Padding.p_2xs,
          width: 340,
          shadowOpacity: 1,
          elevation: 4,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowColor: "rgba(0, 0, 0, 0.25)",
          borderRadius: Border.br_xl,
          backgroundColor: Color.colorWhite,
          justifyContent: "center",
          marginTop: 25,
        },

      });