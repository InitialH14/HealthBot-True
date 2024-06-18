import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "./GlobalStyles";
import { Link } from "expo-router";

const BiodataPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.biodataPage}>
      <Text
        style={[styles.harapMengisiData, styles.lanjutTypo]}
      >{`Harap Mengisi Data diri
Anda!`}</Text>
      <View style={styles.biodataPageChild} />
      <View style={[styles.biodataPageItem, styles.biodataLayout]} />
      <View style={[styles.biodataPageInner, styles.biodataLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <View style={styles.biodataPageChild1} />
      <View style={[styles.biodataPageChild2, styles.rectangleViewBorder]} />
      <Text style={[styles.namaLengkap, styles.usiaTypo]}>Nama Lengkap</Text>
      <Text style={[styles.pekerjaan, styles.usiaTypo]}>Pekerjaan</Text>
      <Text style={[styles.usia, styles.usiaTypo]}>Usia</Text>
      <Text style={[styles.jenisKelamin, styles.usiaTypo]}>Jenis kelamin</Text>
      <Text style={[styles.nomorHandphone, styles.usiaTypo]}>
        Nomor Handphone
      </Text>
      <Text style={[styles.tanggalLahir, styles.usiaTypo]}>Tanggal Lahir</Text>
      <Link href={"(tabs)/(home)"} asChild>
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
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  biodataLayout: {
    height: 43,
    width: 265,
    left: 48,
    borderWidth: 2,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleViewBorder: {
    left: 47,
    height: 45,
    borderWidth: 2,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  usiaTypo: {
    opacity: 0.5,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
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
    marginLeft: -144,
    top: 68,
    fontSize: FontSize.size_xl,
  },
  biodataPageChild: {
    top: 178,
    left: 45,
    height: 45,
    borderWidth: 2,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    width: 268,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  biodataPageItem: {
    top: 251,
  },
  biodataPageInner: {
    top: 320,
  },
  rectangleView: {
    top: 471,
    width: 268,
    left: 47,
  },
  biodataPageChild1: {
    top: 554,
    width: 265,
    left: 48,
    height: 45,
    borderWidth: 2,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  biodataPageChild2: {
    top: 394,
    width: 266,
  },
  namaLengkap: {
    top: 160,
    left: 49,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  pekerjaan: {
    top: 302,
    left: 49,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  usia: {
    top: 233,
    left: 49,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  jenisKelamin: {
    top: 376,
    left: 49,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  nomorHandphone: {
    top: 536,
    left: 49,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  tanggalLahir: {
    top: 453,
    left: 52,
  },
  groupChild: {
    marginLeft: -126,
    top: 0,
    backgroundColor: Color.colorAqua,
    borderRadius: Border.br_xl,
    width: 252,
  },
  lanjut: {
    marginLeft: -32,
    top: 11,
    fontSize: FontSize.size_mini,
  },
  rectangleParent: {
    marginLeft: -125,
    top: 648,
  },
  biodataPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default BiodataPage;
