import  React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, Pressable , ScrollView, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import QuestionCard from "./QuestionCard";
export default function RecoQuestion() {
  const navigation = useNavigation();

  
  const [responseList, setResponseList] = useState([[0,0,0,0,0,0],[0,0,0,0],[0,0],[0,0,0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
  [0,0],[0,0],[0,0],])  

  const handleClick = (qNum, answer) => {
    updateResponse(qNum, answer)

  }

  const questionResults = async () => {
    const apiUrl = 'http://143.248.192.155:5000/recommend'; // Replace with your backend API endpoint

    try {


      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responseList),
      });
      

    } catch (error) {
      // Handle network errors or other issues
      console.error('Error sending answers to backend', error);
    }
    navigation.navigate('Result')

  };

  const updateResponse = (qNum, answer) => {
    if(qNum != null){            

      setResponseList(prevList => {
        return prevList.map((question, index) => {
          if (index === qNum - 1) {
            return question.map((value, i) => (i === answer - 1 ? 1 : 0));
          }
          return question;
        });
      });
    }
  }

  // const handleButtonState = qNum => {
  //   const updatedButtonState = buttonState.map((state, index) => index === qNum - 1);
  //   setButtonState(updatedButtonState);
  // };
  //   console.log(responseList)

    
  return (
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    showsVerticalScrollIndicator={false}>


{/* Q1 */}
<View style={styles.question}>
<View style={styles.q1Parent}>
<View style={[styles.q1, styles.q1ShadowBox]}>
          <Text style={[styles.q11, styles.q11Typo]}>Q1.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            당신의 연령대를 알려주세요
          </Text>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <TouchableOpacity onPress = {() => handleClick(1, 1)}  style={[styles.rectangleParent, styles.rectanglePosition]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/q1_1.png")}
                />
                <Text onPress = {() => handleClick(1, 2)}  style={[styles.text1, styles.textTypo2,  {color: responseList[0][0] == 1 ? 'black': 'white'}]}>20세 이하</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.rectangleGroup, styles.rectanglePosition]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/q1_3.png")}
                />
                <Text style={[styles.text1, styles.textTypo2,  {color: responseList[0][1] == 1 ? 'black': 'white'}]}>30~40세</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => handleClick(1, 3)} 
                style={[styles.rectangleContainer, styles.rectanglePosition]}
              >
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/q1_5.png")}
                />
                <Text style={[styles.text1, styles.textTypo2,  {color: responseList[0][2] == 1 ? 'black': 'white'}]}>50~60세</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.frameContainer}>
              <TouchableOpacity onPress = {() => handleClick(1, 4)} >
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/q1_2.png")}
                />
                <Text style={[styles.text1, styles.textTypo2,  {color: responseList[0][3] == 1 ? 'black': 'white'}]}>20~30세</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => handleClick(1, 5)}  style={styles.rectangleParent1}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/q1_4.png")}
                />
                <Text style={[styles.text1, styles.textTypo2,  {color: responseList[0][4] == 1 ? 'black': 'white'}]}>40~50세</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => handleClick(1, 6)}  style={styles.rectangleParent1}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/q1_6.png")}
                />
                <Text style={[styles.text1, styles.textTypo2,  {color: responseList[0][5] == 1 ? 'black': 'white'}]}>60세 이상</Text>

            </TouchableOpacity>
            </View>
            </View>
        </View>
        </View>  

{/* Q2 */}

<View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
          <Text style={[styles.q11, styles.q11Typo]}>Q2.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            1인 예산 계획이 어떻게 되나요?
          </Text>
          <View style={styles.frameParent1}>
            <View style={[styles.rectangleParent, styles.rectanglePosition]}>
              {/* 2-1 */}
              <TouchableOpacity onPress = {() => handleClick(2, 1)} style={{opacity: responseList[1][0] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild3, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q2_1.png")}
              />
              </TouchableOpacity>
              {/* 2-2 */}
              <TouchableOpacity onPress = {() => handleClick(2, 2)} style={{opacity: responseList[1][1] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild4, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q2_2.png")}
              />
              </TouchableOpacity>
              <Text style={[styles.text8, styles.textTypo2,  {color: responseList[1][0] == 1 ? 'black': 'white'}]}>~50만원</Text>
              <Text style={[styles.text9, styles.textTypo1,  {color: responseList[1][1] == 1 ? 'black': 'white'}]}>50~100만원</Text>
            </View>
            <View style={styles.rectangleParent4}>
              {/* 2-3 */}
              <TouchableOpacity onPress = {() => handleClick(2, 3)} style={{opacity: responseList[1][2] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild3, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q2_3.png")}
              />
              </TouchableOpacity>
              {/* 2-4 */}
              <TouchableOpacity onPress = {() => handleClick(2, 4)} style={{opacity: responseList[1][3] == 1 ? 0.5:  1 }}>
              <Image
                style={[styles.frameChild4, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q2_4.png")}
              />
              </TouchableOpacity>
              <Text style={[styles.text8, styles.textTypo2, {color: responseList[1][2] == 1 ? 'black': 'white'}]}>100~150만원</Text>
              <Text style={[styles.text11, styles.textTypo1 , {color: responseList[1][3] == 1 ? 'black': 'white'}]}>150만원~</Text>
            </View>
          </View>
        </View>
        </View>  
{/* Q3 */}

<View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
          <Text style={[styles.q11, styles.q11Typo]}>Q3.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            당신의 성별이 무엇인가요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(3, 1)} style={{opacity: responseList[2][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q3_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(3, 2)} style={{opacity: responseList[2][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q3_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,   {color: responseList[2][0] == 1 ? 'black': 'white'}]}>남자</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[2][1] == 1 ? 'black': 'white'}]}>여자</Text>
        </View>
        </View>  

        {/* Q4 */}
<View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
          <Text style={[styles.q11, styles.q11Typo]}>Q4.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            누구와 가나요?
          </Text>
          <View style={styles.frameParent1}>
            <View style={[styles.rectangleParent, styles.rectanglePosition]}>
              {/* 2-1 */}
              <TouchableOpacity onPress = {() => handleClick(4, 1)} style={{opacity: responseList[3][0] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild3, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q4_1.png")}
              />
              </TouchableOpacity>
              {/* 2-2 */}
              <TouchableOpacity onPress = {() => handleClick(4, 2)} style={{opacity: responseList[3][1] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild4, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q4_2.png")}
              />
              </TouchableOpacity>
              <Text style={[styles.text8, styles.textTypo2, {color: responseList[3][0] == 1 ? 'black': 'white'}]}>혼자</Text>
              <Text style={[styles.text9, styles.textTypo1, {color: responseList[3][1] == 1 ? 'black': 'white'}]}>가족과</Text>
            </View>
            <View style={styles.rectangleParent4}>
              {/* 2-3 */}
              <TouchableOpacity onPress = {() => handleClick(4, 3)} style={{opacity: responseList[3][2] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild3, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q4_3.png")}
              />
              </TouchableOpacity>
              {/* 2-4 */}
              <TouchableOpacity onPress = {() => handleClick(4, 4)} style={{opacity: responseList[3][3] == 1 ? 0.5:  1}}>
              <Image
                style={[styles.frameChild4, styles.childFrameLayout]}
                contentFit="cover"
                source={require("../assets/q4_4.png")}
              />
              </TouchableOpacity>
              <Text style={[styles.text8, styles.textTypo2,  {color: responseList[3][2] == 1 ? 'black': 'white'}]}>친구들과</Text>
              <Text style={[styles.text11, styles.textTypo1,  {color: responseList[3][3] == 1 ? 'black': 'white'}]}>사랑하는 사람과</Text>
            </View>
          </View>
        </View>
        </View>  
        {/* Q5 */}
        <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q5.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            어떤 기후를 선호하나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(5, 1)} style={{opacity: responseList[4][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q5_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(5, 2)} style={{opacity: responseList[4][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q5_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[4][0] == 1 ? 'black': 'white'}]}>따뜻한 기후</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[4][1] == 1 ? 'black': 'white'}]}>시원한 기후</Text>
        </View>
        </View>  

       

         {/* Q6 */}
         <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q6.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            어떤 환경을 선호하나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(6, 1)} style={{opacity: responseList[5][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q6_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(6, 2)} style={{opacity: responseList[5][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q6_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[5][0] == 1 ? 'black': 'white'}]}>활기찬 도시</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[5][1] == 1 ? 'black': 'white'}]}>평화로운 자연</Text>
        </View>
        </View>  
 {/* Q7 */}
 <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q7.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            관광 vs 휴양?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(7, 1)} style={{opacity: responseList[6][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q7_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(7, 2)} style={{opacity: responseList[6][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q7_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[6][0] == 1 ? 'black': 'white'}]}>관광</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[6][1] == 1 ? 'black': 'white'}]}>휴양</Text>
        </View>
        </View>  
         {/* Q8 */}
        <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q8.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            관광객이 많은 곳을 선호하나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(8, 1)} style={{opacity: responseList[7][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q8_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(8, 2)} style={{opacity: responseList[7][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q8_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[7][0] == 1 ? 'black': 'white'}]}>그렇다</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[7][1] == 1 ? 'black': 'white'}]}>아니다</Text>
        </View>
        </View>  

         {/* Q9 */}
         <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q9.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            대중교통을 중요시하나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(9, 1)} style={{opacity: responseList[8][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q9_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(9, 2)} style={{opacity: responseList[8][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q9_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[8][0] == 1 ? 'black': 'white'}]}>그렇다</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[8][1] == 1 ? 'black': 'white'}]}>아니다</Text>
        </View>
        </View>  
         {/* Q10 */}
         <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q10.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            유적지나 문화체험을 선호하나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(10, 1)} style={{opacity: responseList[9][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q10_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(10, 2)} style={{opacity: responseList[9][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q10_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[9][0] == 1 ? 'black': 'white'}]}>그렇다</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[9][1] == 1 ? 'black': 'white'}]}>아니다</Text>
        </View>
        </View> 
         {/* Q11 */}
         <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q11.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            액티비티를 즐기나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(11, 1)} style={{opacity: responseList[10][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q11_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(11, 2)} style={{opacity: responseList[10][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q11_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[10][0] == 1 ? 'black': 'white'}]}>그렇다</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[10][1] == 1 ? 'black': 'white'}]}>아니다</Text>
        </View>
        </View>   
         {/* Q12 */}
         <View style={styles.q1Parent}>
        <View style={[styles.q1, styles.q1ShadowBox]}>
        <Text style={[styles.q11, styles.q11Typo]}>Q12.</Text>
          <Text style={[styles.text, styles.textTypo3]}>
            쇼핑을 즐기나요?
          </Text>
          {/* 3-1 */}
          <TouchableOpacity onPress = {() => handleClick(12, 1)} style={{opacity: responseList[11][0] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Child, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q12_1.png")}
          />
          </TouchableOpacity>
          {/* 3-2 */}
          <TouchableOpacity onPress = {() => handleClick(12, 2)} style={{opacity: responseList[11][1] == 1 ? 0.5:  1}}>
          <Image
            style={[styles.q3Item, styles.childFrameLayout]}
            contentFit="cover"
            source={require("../assets/q12_2.png")}
          />
          </TouchableOpacity>
          <Text style={[styles.text13, styles.textTypo,  {color: responseList[11][0] == 1 ? 'black': 'white'}]}>그렇다</Text>
          <Text style={[styles.text14, styles.textTypo,  {color: responseList[11][1] == 1 ? 'black': 'white'}]}>아니다</Text>
        </View>

        
        </View> 
      {/* This is the result page tab */}
      <TouchableOpacity
                            style={styles.buttonWrapper}
                            onPress={questionResults}>
                            <Text style={styles.buttonText} >여행지 추천 받기!</Text>
                        </TouchableOpacity> 
    </View>
    </ScrollView>

  );
};



const styles = StyleSheet.create({
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  q1Parent: {
    marginTop: 30
  },
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
    },
    textTypo3: {
      color: Color.colorBlack,
      textAlign: "left",
      fontWeight: "700",
    },
    frameParentFlexBox: {
      flexDirection: "row",
      marginTop: 7,
      width: '100%'
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
      textAlign: "left",
      fontWeight: "700",
      position: "absolute",
      color: Color.colorWhite,

    },
    textTypo: {
      left: 23,
      color: Color.colorWhite,
      textAlign: "left",
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
      width: '100%'
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
      width: 400,
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
    q3Child: {
      zIndex: 2,
      width: 317,
      marginTop: 7,
    },
    q3Item: {
      zIndex: 3,
      width: 317,
      marginTop: 10,
    },
    text13: {
      top: 132,
      zIndex: 4,
    },
    text14: {
      top: 228,
      zIndex: 5,
    },


  });