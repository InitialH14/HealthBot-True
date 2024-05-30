import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Provider as PaperProvider, Button, TextInput as PaperTextInput } from 'react-native-paper';

const QuesionerPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <PaperProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Harap Mengisi Data Kesehatan Anda!</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Berat Badan</Text>
            <Controller
              control={control}
              rules={{ required: 'Berat badan diperlukan' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  error={!!errors.weight}
                />
              )}
              name="weight"
            />
            {errors.weight && <Text style={styles.error}>{errors.weight.message}</Text>}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tinggi Badan</Text>
            <Controller
              control={control}
              rules={{ required: 'Tinggi badan diperlukan' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  error={!!errors.height}
                />
              )}
              name="height"
            />
            {errors.height && <Text style={styles.error}>{errors.height.message}</Text>}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Jam Kerja per hari</Text>
            <Controller
              control={control}
              rules={{ required: 'Jam kerja diperlukan' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  error={!!errors.workHours}
                />
              )}
              name="workHours"
            />
            {errors.workHours && <Text style={styles.error}>{errors.workHours.message}</Text>}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Riwayat Kesehatan</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              )}
              name="healthHistory"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apakah anda memiliki kondisi kesehatan kronis atau penyakit jangka panjang?</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              )}
              name="chronicCondition"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apa jenis aktivitas fisik yang biasa Anda lakukan, dan seberapa sering?</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              )}
              name="physicalActivity"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Berapa porsi buah dan sayur yang anda konsumsi?</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PaperTextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
              )}
              name="fruitVegetableIntake"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleSubmit(onSubmit)}>
              Lanjut
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default QuesionerPage;
