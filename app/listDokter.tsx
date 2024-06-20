import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "./GlobalStyles";

const listDokter = () => {
  return (
    <View style={styles.listdokter}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.groupItem} />
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.component1Wrapper, styles.wrapperSpaceBlock]}>
          <View style={[styles.component1, styles.component1FlexBox]}>
            <Image
              style={styles.layer1Icon}  
            />
            <Text style={[styles.healthbot, styles.healthbotFlexBox]}>
              HEALTHBOT
            </Text>
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.component1FlexBox]}>
          <Image
            style={[styles.groupIcon, styles.iconLayout1]}
            
          
          />
        </View>
      </View>
      <Text style={[styles.layananPelanggan, styles.parentPosition]}>
        Layanan Pelanggan
      </Text>
      <Text style={[styles.allRightsReserved, styles.dokterTypo1]}>
        All RIghts Reserved
      </Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>021-777-9782</Text>
        <Image
          style={styles.vectorIcon}
          
          
        />
      </View>
      <View style={[styles.healthbotgmailcomParent, styles.parentPosition]}>
        <Text style={[styles.healthbotgmailcom, styles.textTypo1]}>
          HealthBot@gmail.com
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          
          
        />
      </View>
      <View
        style={[styles.jalanApaajadehKelKejambonParent, styles.parentPosition]}
      >
        
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          
        />
      </View>
      <Text style={[styles.filterBerdasarkan, styles.dokterFlexBox]}>
        Filter Berdasarkan
      </Text>
      <Text style={[styles.dokter, styles.hargaTypo]}>Dokter</Text>
      <Text style={[styles.hapusFilter, styles.hargaTypo]}>Hapus Filter</Text>
      <Image
        style={styles.search1Icon}
        
        source={require("../assets/images/search_1.png")}
      />
      <Image
        style={[styles.angleLeft1Icon, styles.iconLayout1]}
        
        source={require("../assets/images/angleleft-1.png")}
      />
      <View style={[styles.listdokterChild, styles.listdokterLayout]} />
      <Image
        style={[styles.caretDown1Icon, styles.caretIconPosition]}
        
        source={require("../assets/images/caretdown-1.png")}
      />
      <Text style={[styles.jenisKelamin, styles.caretIconPosition]}>
        Jenis Kelamin
      </Text>
      <View style={[styles.listdokterItem, styles.listdokterLayout]} />
      <Image
        style={[styles.caretDown2Icon, styles.caretIconPosition]}
        
        source={require("../assets/images/caretdown-1.png")}
      />
      <Text style={[styles.harga, styles.caretIconPosition]}>Harga</Text>
      <View style={[styles.listdokterInner, styles.childIconLayout]} />
      <Text style={[styles.drramaDaniPutra, styles.listdokterInnerPosition]}>
        Dr.Rama Dani Putra
      </Text>
      <Text style={[styles.dokterUmum, styles.dokterFlexBox]}>Dokter Umum</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.shoppingBag1Icon, styles.iconLayout]}
        source={require("../assets/images/shoppingbag-1.png")}
      />
      <Text style={[styles.tahun, styles.tahunTypo]}>8 Tahun</Text>
      <View
        style={[styles.listdokterChild1, styles.listdokterChildPosition2]}
      />
      <Text style={[styles.text1, styles.textTypo]}>97%</Text>
      <Image
        style={[styles.thumbsUp1Icon, styles.thumbsIconPosition]}
        source={require("../assets/images/thumbsup-1.png")}
      />
      <Text style={[styles.rp30000, styles.chat2Typo]}>Rp30.000</Text>
      <View style={[styles.listdokterChild2, styles.childLayout]} />
      <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
      <Image
        style={[styles.otongRemovebgPreview1Icon, styles.childIconLayout]}

        source={require("../assets/images/otongremovebgpreview-1.png")}
      />
      <View
        style={[styles.listdokterChild3, styles.listdokterChild3Position]}
      />
      <Text style={[styles.drramaDaniPutra1, styles.listdokterChild3Position]}>
        Dr.Rama Dani Putra
      </Text>
      <Text style={[styles.dokterUmum1, styles.dokterFlexBox]}>
        Dokter Umum
      </Text>
      <View style={[styles.listdokterChild4, styles.listdokterChildPosition]} />
      <Image
        style={[styles.shoppingBag1Icon1, styles.text2Position]}
        source={require("../assets/images/shoppingbag-1.png")}
      />
      <Text style={[styles.tahun1, styles.tahunTypo]}>8 Tahun</Text>
      <View style={[styles.listdokterChild5, styles.listdokterChildPosition]} />
      <Text style={[styles.text2, styles.text2Position]}>97%</Text>
      <Image
        style={[styles.thumbsUp1Icon1, styles.thumbsIconPosition]}

        source={require("../assets/images/thumbsup-1.png")}
      />
      <Text style={[styles.rp300001, styles.chat2Typo]}>Rp30.000</Text>
      <View style={[styles.listdokterChild6, styles.childLayout]} />
      <Text style={[styles.chat1, styles.chatTypo]}>Chat</Text>
      <Image
        style={[styles.otongRemovebgPreview1Icon1, styles.childIconLayout]}

        source={require("../assets/images/otongremovebgpreview-1.png")}
      />
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupChild1, styles.childIconLayout]} />
        <Text style={[styles.drramaDaniPutra2, styles.dokterFlexBox]}>
          Dr.Rama Dani Putra
        </Text>
        <Text style={[styles.dokterUmum2, styles.dokterFlexBox]}>
          Dokter Umum
        </Text>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Image
          style={[styles.shoppingBag1Icon2, styles.text3Position]}

          source={require("../assets/images/shoppingbag-1.png")}
        />
        <Text style={[styles.tahun2, styles.tahunTypo]}>8 Tahun</Text>
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text style={[styles.text3, styles.text3Position]}>97%</Text>
        <Image
          style={[styles.thumbsUp1Icon2, styles.iconLayout]}

          source={require("../assets/images/thumbsup-1.png")}
        />
        <Text style={[styles.rp300002, styles.chat2Typo]}>Rp30.000</Text>
        <View style={[styles.groupChild4, styles.childLayout]} />
        <Text style={[styles.chat2, styles.chat2Typo]}>Chat</Text>
        <Image
          style={[styles.otongRemovebgPreview1Icon2, styles.childIconLayout]}

          source={require("../assets/images/otongremovebgpreview-1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.rectangleLayout]}>
        <View style={[styles.groupChild1, styles.childIconLayout]} />
        <Text style={[styles.drramaDaniPutra2, styles.dokterFlexBox]}>
          Dr.Rama Dani Putra
        </Text>
        <Text style={[styles.dokterUmum2, styles.dokterFlexBox]}>
          Dokter Umum
        </Text>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Image
          style={[styles.shoppingBag1Icon2, styles.text3Position]}
 
          source={require("../assets/images/shoppingbag-1.png")}
        />
        <Text style={[styles.tahun2, styles.tahunTypo]}>8 Tahun</Text>
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text style={[styles.text3, styles.text3Position]}>97%</Text>
        <Image
          style={[styles.thumbsUp1Icon2, styles.iconLayout]}
   
          source={require("../assets/images/thumbsup-1.png")}
        />
        <Text style={[styles.rp300002, styles.chat2Typo]}>Rp30.000</Text>
        <View style={[styles.groupChild4, styles.childLayout]} />
        <Text style={[styles.chat2, styles.chat2Typo]}>Chat</Text>
        <Image
          style={[styles.otongRemovebgPreview1Icon2, styles.childIconLayout]}
    
          source={require("../assets/images/otongremovebgpreview-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <View style={[styles.groupChild1, styles.childIconLayout]} />
        <Text style={[styles.drhadidRamadhan, styles.dokterFlexBox]}>
          Dr.Hadid Ramadhan
        </Text>
        <Text style={[styles.dokterUmum2, styles.dokterFlexBox]}>
          Dokter Umum
        </Text>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Image
          style={[styles.shoppingBag1Icon2, styles.text3Position]}
      
          source={require("../assets/images/shoppingbag-1.png")}
        />
        <Text style={[styles.tahun2, styles.tahunTypo]}>8 Tahun</Text>
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text style={[styles.text3, styles.text3Position]}>97%</Text>
        <Image
          style={[styles.thumbsUp1Icon2, styles.iconLayout]}
   
          source={require("../assets/images/thumbsup-1.png")}
        />
        <Text style={[styles.rp300002, styles.chat2Typo]}>Rp30.000</Text>
        <View style={[styles.groupChild4, styles.childLayout]} />
        <Text style={[styles.chat2, styles.chat2Typo]}>Chat</Text>
        <Image
          style={[styles.otongRemovebgPreview1Icon2, styles.childIconLayout]}
          
          source={require("../assets/images/otongremovebgpreview-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 361,
    position: "absolute",
  },
  groupPosition: {
    height: 66,
    top: 0,
    left: 0,
    width: 361,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingHorizontal: Padding.p_mini,
    position: "absolute",
  },
  component1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  healthbotFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  iconLayout1: {
    width: 17,
    height: 17,
  },
  parentPosition: {
    left: 33,
    display: "none",
    position: "absolute",
  },
  dokterTypo1: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  dokterFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  hargaTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.colorBlack,
  },
  listdokterLayout: {
    height: 22,
    borderRadius: Border.br_9xs,
    top: 134,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  caretIconPosition: {
    top: 137,
    position: "absolute",
  },
  childIconLayout: {
    height: 85,
    width: 62,
  },
  listdokterInnerPosition: {
    top: 180,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 19,
    top: 214,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  iconLayout: {
    height: 10,
    width: 10,
  },
  tahunTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  listdokterChildPosition2: {
    left: 167,
    width: 43,
  },
  textTypo: {
    left: 189,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  thumbsIconPosition: {
    left: 171,
    height: 10,
    width: 10,
    position: "absolute",
  },
  chat2Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  childLayout: {
    height: 23,
    width: 82,
    backgroundColor: Color.colorAqua,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  chatTypo: {
    left: 277,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  listdokterChild3Position: {
    top: 502,
    position: "absolute",
  },
  listdokterChildPosition: {
    top: 536,
    height: 19,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  text2Position: {
    top: 540,
    position: "absolute",
  },
  rectangleLayout: {
    width: 309,
    height: 85,
    left: 24,
    position: "absolute",
  },
  groupChildPosition: {
    top: 34,
    height: 19,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  text3Position: {
    top: 38,
    position: "absolute",
  },
  groupChild: {
    top: 270,
    backgroundColor: Color.colorDarkslategray_200,
    height: 246,
    left: 0,
  },
  groupItem: {
    top: -27,
    left: -27,
    borderStyle: "dashed",
    borderColor: Color.colorDarkslategray_200,
    borderRadius: 0.001,
    borderTopWidth: 55,
    width: 415,
    height: 55,
    position: "absolute",
  },
  rectangleParent: {
    top: 2145,
    left: -2,
    height: 270,
    display: "none",
  },
  groupInner: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
  },
  layer1Icon: {
    width: 25,
    height: 32,
  },
  healthbot: {
    color: Color.colorSnow,
    width: 101,
    height: 29,
    marginLeft: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid_3,
  },
  component1: {
    paddingHorizontal: 0,
    paddingVertical: 6,
  },
  component1Wrapper: {
    right: 193,
    paddingVertical: Padding.p_lg,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    height: 66,
    top: 0,
    left: 0,
  },
  groupIcon: {
    height: 17,
  },
  groupWrapper: {
    top: 25,
    right: 1,
    left: 313,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    position: "absolute",
  },
  layananPelanggan: {
    top: 2201,
    color: Color.colorAqua,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid_3,
  },
  allRightsReserved: {
    marginLeft: -47,
    top: 2381,
    left: "50%",
    color: "#feffff",
    textAlign: "left",
    display: "none",
  },
  text: {
    top: 1750,
    left: 35,
    color: Color.colorWhite,
  },
  vectorIcon: {
    width: "19.23%",
    right: "61.54%",
    left: "19.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    bottom: "99.76%",
    height: "0.24%",
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    top: 577,
    width: 104,
    height: 1765,
  },
  healthbotgmailcom: {
    top: 1694,
    left: 35,
    color: Color.colorWhite,
  },
  vectorIcon1: {
    height: "0.2%",
    width: "12.75%",
    right: "87.25%",
    bottom: "99.8%",
  },
  healthbotgmailcomParent: {
    top: 560,
    width: 149,
    height: 1709,
  },
  jalanApaajadehKel: {
    top: 1345,
    left: 26,
    width: 122,
    height: 24,
    display: "flex",
    alignItems: "center",
  },
  vectorIcon2: {
    width: "8.65%",
    right: "91.35%",
    bottom: "99.76%",
    height: "0.24%",
    left: "0%",
  },
  jalanApaajadehKelKejambonParent: {
    top: 943,
    width: 148,
    height: 1369,
  },
  filterBerdasarkan: {
    top: 105,
    left: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  dokter: {
    top: 74,
    left: 56,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  hapusFilter: {
    top: 109,
    left: 269,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  search1Icon: {
    top: 78,
    left: 305,
    width: 16,
    height: 17,
    position: "absolute",
  },
  angleLeft1Icon: {
    top: 76,
    left: 17,
    height: 17,
    position: "absolute",
  },
  listdokterChild: {
    left: 21,
    width: 96,
  },
  caretDown1Icon: {
    left: 97,
    height: 17,
    width: 17,
  },
  jenisKelamin: {
    left: 24,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  listdokterItem: {
    left: 126,
    width: 67,
  },
  caretDown2Icon: {
    left: 176,
    height: 17,
    width: 17,
  },
  harga: {
    left: 130,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  listdokterInner: {
    top: 180,
    position: "absolute",
    left: 24,
    backgroundColor: Color.colorGainsboro,
    width: 62,
  },
  drramaDaniPutra: {
    left: 100,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  dokterUmum: {
    top: 195,
    left: 100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleView: {
    width: 56,
    left: 100,
  },
  shoppingBag1Icon: {
    left: 104,
    width: 10,
    top: 218,
    position: "absolute",
  },
  tahun: {
    top: 217,
    left: 119,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  listdokterChild1: {
    width: 43,
    height: 19,
    top: 214,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  text1: {
    top: 218,
    position: "absolute",
  },
  thumbsUp1Icon: {
    top: 219,
  },
  rp30000: {
    top: 247,
    left: 100,
  },
  listdokterChild2: {
    top: 242,
    left: 251,
    width: 82,
    backgroundColor: Color.colorAqua,
  },
  chat: {
    top: 245,
  },
  otongRemovebgPreview1Icon: {
    top: 180,
    position: "absolute",
    left: 24,
  },
  listdokterChild3: {
    height: 85,
    width: 62,
    left: 24,
    backgroundColor: Color.colorGainsboro,
  },
  drramaDaniPutra1: {
    left: 100,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  dokterUmum1: {
    top: 517,
    left: 100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  listdokterChild4: {
    width: 56,
    left: 100,
  },
  shoppingBag1Icon1: {
    height: 10,
    width: 10,
    left: 104,
  },
  tahun1: {
    top: 539,
    left: 119,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  listdokterChild5: {
    width: 43,
    left: 167,
  },
  text2: {
    left: 189,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  thumbsUp1Icon1: {
    top: 541,
  },
  rp300001: {
    top: 569,
    left: 100,
  },
  listdokterChild6: {
    top: 564,
    left: 251,
    width: 82,
    backgroundColor: Color.colorAqua,
  },
  chat1: {
    top: 567,
  },
  otongRemovebgPreview1Icon1: {
    top: 498,
    left: 25,
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorGainsboro,
    width: 62,
    top: 0,
    position: "absolute",
    left: 0,
  },
  drramaDaniPutra2: {
    left: 76,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  dokterUmum2: {
    top: 15,
    left: 76,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChild2: {
    left: 76,
    width: 56,
  },
  shoppingBag1Icon2: {
    left: 80,
    height: 10,
    width: 10,
  },
  tahun2: {
    top: 37,
    left: 95,
    position: "absolute",
  },
  groupChild3: {
    left: 143,
    width: 43,
  },
  text3: {
    left: 165,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  thumbsUp1Icon2: {
    top: 39,
    left: 147,
    position: "absolute",
  },
  rp300002: {
    top: 67,
    left: 76,
  },
  groupChild4: {
    top: 62,
    left: 227,
  },
  chat2: {
    top: 65,
    left: 253,
  },
  otongRemovebgPreview1Icon2: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  rectangleContainer: {
    top: 610,
  },
  groupView: {
    top: 396,
  },
  drhadidRamadhan: {
    left: 75,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  rectangleParent1: {
    top: 288,
  },
  listdokter: {
    backgroundColor: "#fbfbfb",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default listDokter;
