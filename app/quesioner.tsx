import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Link } from "expo-router";


const QuesionerPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.quesionerPage}>
      <Text
        style={[styles.harapMengisiData, styles.lanjutTypo]}
      >{`Harap Mengisi Data 
Kesehatan Anda!`}</Text>
      <View style={styles.quesionerPageChild} />
      <View style={[styles.quesionerPageItem, styles.quesionerChildLayout]} />
      <View style={[styles.quesionerPageInner, styles.quesionerChildLayout]} />
      <View style={[styles.rectangleView, styles.quesionerChildLayout]} />
      <View style={[styles.quesionerPageChild1, styles.quesionerChildLayout]} />
      <View style={[styles.quesionerPageChild2, styles.quesionerChildLayout]} />
      <View style={[styles.quesionerPageChild3, styles.quesionerChildLayout]} />
      <Text style={[styles.beratBadan, styles.badanTypo]}>Berat Badan</Text>
      <Text style={[styles.jamKerjaPer, styles.badanTypo]}>
        Jam Kerja per Hari
      </Text>
      <Text style={[styles.tinggiBadan, styles.badanTypo]}>Tinggi Badan</Text>
      <Text style={[styles.riwayatKesehatan, styles.badanTypo]}>
        Riwayat Kesehatan
      </Text>
      <Text
        style={[styles.apakahAndaMemiliki, styles.badanTypo]}
      >{`Apakah Anda memiliki kondisi kesehatan 
kronis atau penyakit jangka panjang? `}</Text>
      <Text
        style={[styles.apaJenisAktivitas, styles.badanTypo]}
      >{`Apa jenis aktivitas fisik yang biasa Anda 
lakukan, dan seberapa sering?`}</Text>
      <Text
        style={[styles.berapaPorsiBuah, styles.badanTypo]}
      >{`Berapa porsi buah dan sayur yang 
anda konsumsi?`}</Text>

      <Link href={"Signinpage"} asChild>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.lanjut, styles.lanjutTypo]}>Lanjut</Text>
      </Pressable>
      </Link>
      
    </View>
  );
};

const styles = StyleSheet.create({
  lanjutTypo: {
    textAlign: "center",
    color: "Black",
    fontFamily: "poppinsBold",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  quesionerChildLayout: {
    width: 265,
    height: 45,
    borderWidth: 2,
    borderColor: "Dimgray",
    borderStyle: "solid",
    borderRadius: 24,
    position: "absolute",
  },
  badanTypo: {
    opacity: 0.5,
    textAlign: "left",
    fontSize: 8,
    color: "Black",
    fontFamily: "poppinsBold",
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    width: 252,
    height: 45,
    left: "50%",
    position: "absolute",
  },
  harapMengisiData: {
    marginLeft: -124,
    top: 74,
    fontSize: 5,
  },
  quesionerPageChild: {
    top: 182,
    width: 264,
    height: 45,
    borderWidth: 2,
    borderColor: "Dimgray",
    borderStyle: "solid",
    borderRadius: 24,
    left: 49,
    position: "absolute",
  },
  quesionerPageItem: {
    top: 252,
    left: 48,
  },
  quesionerPageInner: {
    top: 327,
    left: 47,
  },
  rectangleView: {
    top: 402,
    left: 46,
  },
  quesionerPageChild1: {
    top: 495,
    left: 46,
  },
  quesionerPageChild2: {
    top: 584,
    left: 49,
  },
  quesionerPageChild3: {
    top: 678,
    left: 49,
  },
  beratBadan: {
    top: 164,
    left: 48,
  },
  jamKerjaPer: {
    top: 309,
    left: 46,
  },
  tinggiBadan: {
    top: 234,
    left: 46,
  },
  riwayatKesehatan: {
    top: 384,
    left: 48,
  },
  apakahAndaMemiliki: {
    top: 459,
    left: 49,
  },
  apaJenisAktivitas: {
    top: 548,
    left: 49,
  },
  berapaPorsiBuah: {
    top: 641,
    left: 47,
  },
  groupChild: {
    marginLeft: -126,
    top: 0,
    backgroundColor: "Aqua",
    borderRadius: 24,
    width: 252,
  },
  lanjut: {
    marginLeft: -25,
    top: 6,
    fontSize: 10,
  },
  rectangleParent: {
    marginLeft: -127,
    top: 772,
  },
  quesionerPage: {
    backgroundColor: "White",
    flex: 1,
    width: "100%",
    height: 878,
    overflow: "hidden",
  },
});

export default QuesionerPage;
