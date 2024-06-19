// import * as React from "react";
// import { StyleSheet, View, Text, Image } from "react-native";


// const ListDokter = () => {
//   return (
//     <View style={styles.listdokter}>
//       <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
//         <View style={[styles.groupChild, styles.groupChildLayout1]} />
//         <View style={styles.groupItem} />
//       </View>
//       <View style={styles.groupPosition}>
//         <View style={[styles.groupInner, styles.groupPosition]} />
//         <View style={[styles.component1Wrapper, styles.wrapperSpaceBlock]}>
//           <View style={[styles.component1, styles.component1FlexBox]}>
//             <Image
//               style={styles.layer1Icon}
              
//               source={require("../assets/layer-1.png")}
//             />
//             <Text style={[styles.healthbot, styles.drramaTypo]}>HEALTHBOT</Text>
//           </View>
//         </View>
//         <View style={[styles.groupWrapper, styles.component1FlexBox]}>
//           <Image
//             style={[styles.groupIcon, styles.iconLayout]}
            
//             source={require("../assets/group.png")}
//           />
//         </View>
//       </View>
//       <Text style={[styles.layananPelanggan, styles.parentPosition]}>
//         Layanan Pelanggan
//       </Text>
//       <Text style={[styles.allRightsReserved, styles.dokterTypo1]}>
//         All RIghts Reserved
//       </Text>
//       <View style={[styles.parent, styles.parentPosition]}>
//         <Text style={[styles.text, styles.textTypo]}>021-777-9782</Text>
//         <Image
//           style={styles.vectorIcon}
          
//           source={require("../assets/vector.png")}
//         />
//       </View>
//       <View style={[styles.healthbotgmailcomParent, styles.parentPosition]}>
//         <Text style={[styles.healthbotgmailcom, styles.textTypo]}>
//           HealthBot@gmail.com
//         </Text>
//         <Image
//           style={[styles.vectorIcon1, styles.vectorIconPosition]}
          
//           source={require("../assets/vector1.png")}
//         />
//       </View>
//       <View
//         style={[styles.jalanApaajadehKelKejambonParent, styles.parentPosition]}
//       >
//         <Text
//           style={[styles.jalanApaajadehKel, styles.textTypo]}
//         >{`Jalan apaajadeh Kel. Kejambon
// Jawa Tengah, Indonesia`}</Text>
//         <Image
//           style={[styles.vectorIcon2, styles.vectorIconPosition]}
          
//           source={require("../assets/vector2.png")}
//         />
//       </View>
//       <Text style={[styles.filterBerdasarkan, styles.dokterFlexBox]}>
//         Filter Berdasarkan
//       </Text>
//       <Text style={[styles.dokter, styles.hargaTypo]}>Dokter</Text>
//       <Text style={[styles.hapusFilter, styles.hargaTypo]}>Hapus Filter</Text>
//       <Image
//         style={styles.search1Icon}
        
//         source={require("../assets/search-1.png")}
//       />
//       <Image
//         style={[styles.angleLeft1Icon, styles.iconLayout]}
//         source={require("../assets/angleleft-1.png")}
//       />
//       <View style={[styles.listdokterChild, styles.listdokterLayout]} />
//       <Image
//         style={[styles.caretDown1Icon, styles.caretIconPosition]}
//         source={require("../assets/caretdown-1.png")}
//       />
//       <Text style={[styles.jenisKelamin, styles.caretIconPosition]}>
//         Jenis Kelamin
//       </Text>
//       <View style={[styles.listdokterItem, styles.listdokterLayout]} />
//       <Image
//         style={[styles.caretDown2Icon, styles.caretIconPosition]}
//         source={require("../assets/caretdown-1.png")}
//       />
//       <Text style={[styles.harga, styles.caretIconPosition]}>Harga</Text>
//       <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
//         <View style={[styles.rectangleView, styles.otongIconLayout]} />
//         <Text style={[styles.drramaDaniPutra, styles.dokterFlexBox]}>
//           Dr.Rama Dani Putra
//         </Text>
//         <Text style={[styles.dokterUmum, styles.dokterFlexBox]}>
//           Dokter Umum
//         </Text>
//         <View style={[styles.groupChild1, styles.groupChildLayout]} />
//         <Image
//           style={[styles.shoppingBag1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/shoppingbag-1.png")}
//         />
//         <Text style={[styles.tahun, styles.tahunTypo]}>8 Tahun</Text>
//         <View style={[styles.groupChild2, styles.groupChildLayout]} />
//         <Text style={[styles.text1, styles.tahunTypo]}>97%</Text>
//         <Image
//           style={[styles.thumbsUp1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/thumbsup-1.png")}
//         />
//         <Text style={[styles.rp30000, styles.chatTypo]}>Rp30.000</Text>
//         <View style={[styles.groupChild3, styles.childLayout]} />
//         <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
//         <Image
//           style={[styles.otongRemovebgPreview1Icon, styles.otongIconLayout]}
//           source={require("../assets/otongremovebgpreview-1.png")}
//         />
//       </View>
//       <View style={[styles.listdokterInner, styles.listdokterInnerPosition]} />
//       <Text style={[styles.drramaDaniPutra1, styles.listdokterInnerPosition]}>
//         Dr.Rama Dani Putra
//       </Text>
//       <Text style={[styles.dokterUmum1, styles.dokterFlexBox]}>
//         Dokter Umum
//       </Text>
//       <View style={[styles.listdokterChild1, styles.listdokterChildPosition]} />
//       <Image
//         style={[styles.shoppingBag1Icon1, styles.text2Position]}
//         source={require("../assets/shoppingbag-1.png")}
//       />
//       <Text style={[styles.tahun1, styles.tahunTypo]}>8 Tahun</Text>
//       <View style={[styles.listdokterChild2, styles.listdokterChildPosition]} />
//       <Text style={[styles.text2, styles.text2Position]}>97%</Text>
//       <Image
//         style={[styles.thumbsUp1Icon1, styles.thumbsIconLayout]}
//         source={require("../assets/thumbsup-1.png")}
//       />
//       <Text style={[styles.rp300001, styles.chatTypo]}>Rp30.000</Text>
//       <View style={[styles.listdokterChild3, styles.childLayout]} />
//       <Text style={[styles.chat1, styles.chatTypo]}>Chat</Text>
//       <Image
//         style={[
//           styles.otongRemovebgPreview1Icon1,
//           styles.listdokterInnerPosition,
//         ]}
//         source={require("../assets/otongremovebgpreview-1.png")}
//       />
//       <View style={[styles.groupView, styles.rectangleParentLayout]}>
//         <View style={[styles.rectangleView, styles.otongIconLayout]} />
//         <Text style={[styles.drramaDaniPutra, styles.dokterFlexBox]}>
//           Dr.Rama Dani Putra
//         </Text>
//         <Text style={[styles.dokterUmum, styles.dokterFlexBox]}>
//           Dokter Umum
//         </Text>
//         <View style={[styles.groupChild1, styles.groupChildLayout]} />
//         <Image
//           style={[styles.shoppingBag1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/shoppingbag-1.png")}
//         />
//         <Text style={[styles.tahun, styles.tahunTypo]}>8 Tahun</Text>
//         <View style={[styles.groupChild2, styles.groupChildLayout]} />
//         <Text style={[styles.text1, styles.tahunTypo]}>97%</Text>
//         <Image
//           style={[styles.thumbsUp1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/thumbsup-1.png")}
//         />
//         <Text style={[styles.rp30000, styles.chatTypo]}>Rp30.000</Text>
//         <View style={[styles.groupChild3, styles.childLayout]} />
//         <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
//         <Image
//           style={[styles.otongRemovebgPreview1Icon, styles.otongIconLayout]}
//           source={require("../assets/otongremovebgpreview-1.png")}
//         />
//       </View>
//       <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
//         <View style={[styles.rectangleView, styles.otongIconLayout]} />
//         <Text style={[styles.drramaDaniPutra, styles.dokterFlexBox]}>
//           Dr.Rama Dani Putra
//         </Text>
//         <Text style={[styles.dokterUmum, styles.dokterFlexBox]}>
//           Dokter Umum
//         </Text>
//         <View style={[styles.groupChild1, styles.groupChildLayout]} />
//         <Image
//           style={[styles.shoppingBag1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/shoppingbag-1.png")}
//         />
//         <Text style={[styles.tahun, styles.tahunTypo]}>8 Tahun</Text>
//         <View style={[styles.groupChild2, styles.groupChildLayout]} />
//         <Text style={[styles.text1, styles.tahunTypo]}>97%</Text>
//         <Image
//           style={[styles.thumbsUp1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/thumbsup-1.png")}
//         />
//         <Text style={[styles.rp30000, styles.chatTypo]}>Rp30.000</Text>
//         <View style={[styles.groupChild3, styles.childLayout]} />
//         <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
//         <Image
//           style={[styles.otongRemovebgPreview1Icon, styles.otongIconLayout]}
//           source={require("../assets/otongremovebgpreview-1.png")}
//         />
//       </View>
//       <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
//         <View style={[styles.rectangleView, styles.otongIconLayout]} />
//         <Text style={[styles.drhadidRamadhan, styles.dokterFlexBox]}>
//           Dr.Hadid Ramadhan
//         </Text>
//         <Text style={[styles.dokterUmum, styles.dokterFlexBox]}>
//           Dokter Umum
//         </Text>
//         <View style={[styles.groupChild1, styles.groupChildLayout]} />
//         <Image
//           style={[styles.shoppingBag1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/shoppingbag-1.png")}
//         />
//         <Text style={[styles.tahun, styles.tahunTypo]}>8 Tahun</Text>
//         <View style={[styles.groupChild2, styles.groupChildLayout]} />
//         <Text style={[styles.text1, styles.tahunTypo]}>97%</Text>
//         <Image
//           style={[styles.thumbsUp1Icon, styles.thumbsIconLayout]}
//           source={require("../assets/thumbsup-1.png")}
//         />
//         <Text style={[styles.rp30000, styles.chatTypo]}>Rp30.000</Text>
//         <View style={[styles.groupChild3, styles.childLayout]} />
//         <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
//         <Image
//           style={[styles.otongRemovebgPreview1Icon, styles.otongIconLayout]}
//           source={require("../assets/otongremovebgpreview-1.png")}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   groupChildLayout1: {
//     width: 361,
//     position: "absolute",
//   },
//   groupPosition: {
//     height: 66,
//     top: 0,
//     left: 0,
//     width: 361,
//     position: "absolute",
//   },
//   wrapperSpaceBlock: {
//     paddingHorizontal: 10,
//     position: "absolute",
//   },
//   component1FlexBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   drramaTypo: {
//     fontFamily: "poppinsBold",
//     fontWeight: "700",
//   },
//   iconLayout: {
//     width: 17,
//     height: 17,
//   },
//   parentPosition: {
//     left: 33,
//     display: "none",
//     position: "absolute",
//   },
//   dokterTypo1: {
//     fontFamily: "poppinsLight",
//     fontWeight: "300",
//     fontSize: 12,
//     position: "absolute",
//   },
//   textTypo: {
//     color: "White",
//     left: 35,
//     fontFamily: "poppinsMedium",
//     fontWeight: "500",
//     fontSize: 12,
//     textAlign: "left",
//     position: "absolute",
//   },
//   vectorIconPosition: {
//     left: "0%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     top: "0%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   dokterFlexBox: {
//     textAlign: "center",
//     color: "Black",
//   },
//   hargaTypo: {
//     fontFamily: "poppinsRegular",
//     textAlign: "center",
//     color: "Black",
//   },
//   listdokterLayout: {
//     height: 22,
//     borderRadius: 9,
//     top: 134,
//     backgroundColor: "Gainsboro",
//     position: "absolute",
//   },
//   caretIconPosition: {
//     top: 137,
//     position: "absolute",
//   },
//   rectangleParentLayout: {
//     height: 85,
//     width: 309,
//     left: 24,
//     position: "absolute",
//   },
//   otongIconLayout: {
//     width: 62,
//     height: 85,
//   },
//   groupChildLayout: {
//     height: 19,
//     top: 34,
//     backgroundColor: "Gainsboro",
//     borderRadius: 9,
//     position: "absolute",
//   },
//   thumbsIconLayout: {
//     height: 10,
//     width: 10,
//   },
//   tahunTypo: {
//     fontSize: 10,
//     textAlign: "center",
//     color: "Black",
//     fontFamily: "poppinsLight",
//     fontWeight: "300",
//   },
//   chatTypo: {
//     fontFamily: "poppinsSemiBold",
//     fontWeight: "600",
//     fontSize: 8,
//     textAlign: "center",
//     color: "Black",
//     position: "absolute",
//   },
//   childLayout: {
//     height: 23,
//     width: 82,
//     backgroundColor: "Aqua",
//     borderRadius: 9,
//     position: "absolute",
//   },
//   listdokterInnerPosition: {
//     top: 502,
//     position: "absolute",
//   },
//   listdokterChildPosition: {
//     top: 536,
//     height: 19,
//     backgroundColor: "Gainsboro",
//     borderRadius: 9,
//     position: "absolute",
//   },
//   text2Position: {
//     top: 540,
//     position: "absolute",
//   },
//   groupChild: {
//     top: 270,
//     backgroundColor: "Darkslategray_200",
//     height: 246,
//     left: 0,
//   },
//   groupItem: {
//     top: -27,
//     left: -27,
//     borderStyle: "dashed",
//     borderColor: "colorDarkslategray_200",
//     borderRadius: 0.001,
//     borderTopWidth: 55,
//     width: 415,
//     height: 55,
//     position: "absolute",
//   },
//   rectangleParent: {
//     top: 2145,
//     left: -2,
//     height: 270,
//     display: "none",
//   },
//   groupInner: {
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowRadius: 7,
//     elevation: 7,
//     shadowOpacity: 1,
//     backgroundColor: "colorGray_300",
//   },
//   layer1Icon: {
//     width: 25,
//     height: 32,
//   },
//   healthbot: {
//     color: "colorSnow_100",
//     display: "flex",
//     width: 101,
//     height: 29,
//     marginLeft: 12,
//     textAlign: "left",
//     fontSize: 20,
//     fontWeight: "700",
//     alignItems: "center",
//   },
//   component1: {
//     paddingHorizontal: 0,
//     paddingVertical: 6,
//     alignItems: "center",
//   },
//   component1Wrapper: {
//     right: 193,
//     paddingVertical: 24,
//     justifyContent: "center",
//     paddingHorizontal: 10,
//     height: 66,
//     top: 0,
//     left: 0,
//   },
//   groupIcon: {
//     height: 17,
//   },
//   groupWrapper: {
//     top: 25,
//     right: 1,
//     left: 313,
//     paddingVertical: 0,
//     alignItems: "center",
//     paddingHorizontal: 10,
//     position: "absolute",
//   },
//   layananPelanggan: {
//     top: 2201,
//     color: "Aqua",
//     textAlign: "left",
//     fontFamily: "poppinsBold",
//     fontWeight: "700",
//     fontSize: 20,
//   },
//   allRightsReserved: {
//     marginLeft: -47,
//     top: 2381,
//     left: "50%",
//     color: "Gray_100",
//     textAlign: "left",
//     display: "none",
//   },
//   text: {
//     top: 1750,
//   },
//   vectorIcon: {
//     width: "19.23%",
//     right: "61.54%",
//     left: "19.23%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     top: "0%",
//     bottom: "99.76%",
//     height: "0.24%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   parent: {
//     top: 577,
//     width: 104,
//     height: 1765,
//   },
//   healthbotgmailcom: {
//     top: 1694,
//   },
//   vectorIcon1: {
//     height: "0.2%",
//     width: "12.75%",
//     right: "87.25%",
//     bottom: "99.8%",
//   },
//   healthbotgmailcomParent: {
//     top: 560,
//     width: 149,
//     height: 1709,
//   },
//   jalanApaajadehKel: {
//     top: 1714,
//   },
//   vectorIcon2: {
//     width: "8.63%",
//     right: "91.37%",
//     bottom: "99.76%",
//     height: "0.24%",
//     left: "0%",
//   },
//   jalanApaajadehKelKejambonParent: {
//     top: 568,
//     width: 197,
//     height: 1744,
//   },
//   filterBerdasarkan: {
//     top: 105,
//     left: 22,
//     fontSize: 14,
//     position: "absolute",
//     fontFamily: "poppinsMedium",
//     fontWeight: "500",
//     color: "Black",
//   },
//   dokter: {
//     top: 74,
//     left: 56,
//     fontSize: 14,
//     position: "absolute",
//   },
//   hapusFilter: {
//     top: 109,
//     left: 269,
//     fontSize: 12,
//     position: "absolute",
//   },
//   search1Icon: {
//     top: 78,
//     left: 305,
//     width: 16,
//     height: 17,
//     position: "absolute",
//   },
//   angleLeft1Icon: {
//     top: 76,
//     left: 17,
//     height: 17,
//     position: "absolute",
//   },
//   listdokterChild: {
//     left: 21,
//     width: 96,
//   },
//   caretDown1Icon: {
//     left: 97,
//     height: 17,
//     width: 17,
//   },
//   jenisKelamin: {
//     left: 24,
//     fontFamily: "poppinsRegular",
//     textAlign: "center",
//     color: "Black",
//     fontSize: 24,
//   },
//   listdokterItem: {
//     left: 126,
//     width: 67,
//   },
//   caretDown2Icon: {
//     left: 176,
//     height: 17,
//     width: 17,
//   },
//   harga: {
//     left: 130,
//     fontFamily: "poppinsRegular",
//     textAlign: "center",
//     color: "Black",
//     fontSize: 24,
//   },
//   rectangleView: {
//     backgroundColor: "Gainsboro",
//     width: 62,
//     top: 0,
//     position: "absolute",
//     left: 0,
//   },
//   drramaDaniPutra: {
//     left: 76,
//     fontSize: 24,
//     fontFamily: "poppinsBold",
//     fontWeight: "700",
//     top: 0,
//     position: "absolute",
//   },
//   dokterUmum: {
//     top: 15,
//     left: 76,
//     fontFamily: "poppinsLight",
//     fontWeight: "300",
//     fontSize: 24,
//     position: "absolute",
//   },
//   groupChild1: {
//     width: 56,
//     left: 76,
//   },
//   shoppingBag1Icon: {
//     left: 80,
//     top: 38,
//     position: "absolute",
//   },
//   tahun: {
//     top: 37,
//     left: 95,
//     position: "absolute",
//   },
//   groupChild2: {
//     left: 143,
//     width: 43,
//   },
//   text1: {
//     left: 165,
//     top: 38,
//     position: "absolute",
//   },
//   thumbsUp1Icon: {
//     top: 39,
//     left: 147,
//     position: "absolute",
//   },
//   rp30000: {
//     top: 67,
//     left: 76,
//   },
//   groupChild3: {
//     top: 62,
//     left: 227,
//   },
//   chat: {
//     top: 65,
//     left: 253,
//   },
//   otongRemovebgPreview1Icon: {
//     top: 0,
//     position: "absolute",
//     left: 0,
//   },
//   rectangleContainer: {
//     top: 180,
//   },
//   listdokterInner: {
//     width: 62,
//     height: 85,
//     left: 24,
//     backgroundColor: "Gainsboro",
//   },
//   drramaDaniPutra1: {
//     left: 100,
//     textAlign: "center",
//     color: "Black",
//     fontSize: 12,
//     fontFamily: "poppinsBold",
//     fontWeight: "700",
//   },
//   dokterUmum1: {
//     top: 517,
//     left: 100,
//     fontFamily: "poppinsLight",
//     fontWeight: "300",
//     fontSize: 12,
//     position: "absolute",
//   },
//   listdokterChild1: {
//     left: 100,
//     width: 56,
//   },
//   shoppingBag1Icon1: {
//     left: 104,
//     height: 10,
//     width: 10,
//   },
//   tahun1: {
//     top: 539,
//     left: 119,
//     position: "absolute",
//   },
//   listdokterChild2: {
//     left: 167,
//     width: 43,
//   },
//   text2: {
//     left: 189,
//     fontSize: 10,
//     textAlign: "center",
//     color: "Black",
//     fontFamily: "poppinsLight",
//     fontWeight: "300",
//   },
//   thumbsUp1Icon1: {
//     top: 541,
//     left: 171,
//     position: "absolute",
//   },
//   rp300001: {
//     top: 569,
//     left: 100,
//   },
//   listdokterChild3: {
//     top: 564,
//     left: 251,
//   },
//   chat1: {
//     top: 567,
//     left: 277,
//   },
//   otongRemovebgPreview1Icon1: {
//     width: 62,
//     height: 85,
//     left: 24,
//   },
//   groupView: {
//     top: 610,
//   },
//   rectangleParent1: {
//     top: 396,
//   },
//   drhadidRamadhan: {
//     left: 75,
//     fontSize:12,
//     fontFamily: "poppinsBold",
//     fontWeight: "700",
//     top: 0,
//     position: "absolute",
//   },
//   rectangleParent2: {
//     top: 288,
//   },
//   listdokter: {
//     backgroundColor: "Gray_200",
//     flex: 1,
//     width: "100%",
//     height: 800,
//     overflow: "hidden",
//   },
// });

// export default ListDokter;
