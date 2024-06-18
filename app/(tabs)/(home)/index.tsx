import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
  Image
} from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';
import config from '../../../config';

const { width } = Dimensions.get('window');
interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const HomePage: React.FC<{navigation:any}> = ({navigation}) => {
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  const [news, setNews] = useState<Article[]>([]);
  const apiUrl = config.newsApiURL

  const getNews = async () => {
    try {
      const res = await axios.get(apiUrl);
      const data = res.data.articles.slice(0,5);
      setNews(data);
    } catch(error){
      console.error("gagal mendapatkan info: ", error)
    }
  }

  useEffect(() => {
    getNews();
  }, [])

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => <View style={styles.drawer}></View>}
    >
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Image source={require('../../../assets/images/healthBot-logo.png')} style={styles.logo}/>
          <Text style={styles.appBarTitle}>HealthBot</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tanyakan Keluhanmu</Text>
          </View>

          <View style={styles.horizontalScrollView}>
            <Link href={"/../chatBot"} asChild>
              <TouchableOpacity style={[styles.card]} >
                  <Image source={require('../../../assets/images/chatbot.png')} style={styles.iconMenu}/>
                  <Text style={styles.iconText}>HealthBot</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href={"/../chatDokter"} asChild>
              <TouchableOpacity style={[styles.card]}>
                <Image source={require('../../../assets/images/doctor.png')} style={[styles.iconMenu, {marginLeft: 12}]}/>
                <Text style={styles.iconText}>Chat Dokter</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Investasi Kesehatan</Text>
          </View>

          <View style={styles.infoToken}>
            <View style={styles.walletInfo}>
              <Image source={require('../../../assets/images/wallet.png')} style={styles.walletIcon}/>
              <Text style={styles.PriceText}>Rp 0</Text>
            </View>
            <TouchableOpacity style={styles.topUpPress}>
              <Image source={require('../../../assets/images/plus.png')} style={styles.topupIcon}/>
              <Text style={styles.topupText}>Top Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Untuk Mu</Text>
          </View>

          <View style={styles.forYouLayout}>
            <Link href={"/../RekomendasiOlahraga"} asChild>
              <TouchableOpacity style={styles.card}>
                <Image source={require('../../../assets/images/running.png')} style={styles.iconMenu}/>
                <Text style={[styles.iconText, {textAlign:'center'}]}>Rekomendasi Olahraga</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href={"/../JadwalOlahraga"} asChild>
              <TouchableOpacity style={styles.card}>
                <Image source={require('../../../assets/images/stopwatch.png')} style={styles.iconMenu}/>
                <Text style={[styles.iconText, {textAlign:'center'}]}>Jadwal Olahraga</Text>
              </TouchableOpacity>
            </Link>
            
          </View>

          <View style={styles.forYouLayout}>
            <Link href={"/../RekomendasiMenuDietScreen"} asChild>
              <TouchableOpacity style={styles.card}>
                <Image source={require('../../../assets/images/diet.png')} style={styles.iconMenu}/>
                <Text style={[styles.iconText, {textAlign:'center'}]}>Rekomendasi Menu Diet</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href={"/../TokoObat"} asChild>
              <TouchableOpacity style={styles.card}>
                <Image source={require('../../../assets/images/medicine.png')} style={styles.iconMenu}/>
                <Text style={[styles.iconText, {textAlign:'center'}]}>Toko Obat</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* <View style={styles.forYouLayout}>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../../assets/images/statistics.png')} style={styles.iconMenu}/>
              <Text style={[styles.iconText, {textAlign:'center'}]}>Grafik Perkembangan</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cek Info Kesehatan</Text>
          </View>

          {
            news.map((item, index) => <Link href={item.url} key={index} asChild style={[styles.fullWidthCard]}>
              <TouchableOpacity>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.title ? item.title : "No description available."}</Text>
                  <View style={styles.infoNews}>
                    <Text style={styles.textInfoNews}>{item.source.name}</Text>
                    <Text style={styles.textInfoNews}>{item.publishedAt.split('T')[0]}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>)
          }

        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  appBar: {
    backgroundColor: '#070F2B',
    padding: 20,
    paddingTop: 40,
    elevation: 2,
    flexDirection: 'row'
  },
  appBarTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  logo: {
    marginRight: 20,
    width: 25,
    height: 30
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 35,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  horizontalScrollView: {
    width: '100%',
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  forYouLayout: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  iconMenu: {
    width: 50,
    height: 50
  },
  iconText: {
    color: 'black',
    fontSize: 14, 
    fontWeight: '500',
    marginTop: 10
  },
  card1: {
    backgroundColor: '#04364A',
  },
  card2: {
    backgroundColor: '#070F2B',
  },
  cardContent: {
    justifyContent: 'space-evenly',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  cardSubtitle: {
    color: 'white',
  },
  fullWidthCard: {
    width: width * 0.9,
    height: 100,
    borderRadius: 14,
    marginLeft: 18,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  drawer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 16,
  },
  infoToken: {
    width: width * 0.808,
    height: 80, 
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 35,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 3,
    flexDirection: 'row'
  },
  walletIcon: {
    width: 25,
    height: 25
  },
  walletInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  PriceText: {
    marginLeft: 10
  },
  topUpPress: {
    alignItems: 'center'
  },
  topupIcon: {
    width: 20,
    height: 20
  },
  topupText: {
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 5
  },
  infoNews: {
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-between',
    marginTop: 18
  },
  textInfoNews: {
    fontSize: 12
  }

});

export default HomePage;
