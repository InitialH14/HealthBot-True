import 'dart:async';

import 'package:collection/collection.dart';

import '/backend/schema/util/firestore_util.dart';
import '/backend/schema/util/schema_util.dart';

import 'index.dart';

class SignUpRecord extends FirestoreRecord {
  SignUpRecord._(
    super.reference,
    super.data,
  ) {
    _initializeFields();
  }

  void _initializeFields() {}

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('SignUp');

  static Stream<SignUpRecord> getDocument(DocumentReference ref) =>
      ref.snapshots().map((s) => SignUpRecord.fromSnapshot(s));

  static Future<SignUpRecord> getDocumentOnce(DocumentReference ref) =>
      ref.get().then((s) => SignUpRecord.fromSnapshot(s));

  static SignUpRecord fromSnapshot(DocumentSnapshot snapshot) => SignUpRecord._(
        snapshot.reference,
        mapFromFirestore(snapshot.data() as Map<String, dynamic>),
      );

  static SignUpRecord getDocumentFromData(
    Map<String, dynamic> data,
    DocumentReference reference,
  ) =>
      SignUpRecord._(reference, mapFromFirestore(data));

  @override
  String toString() =>
      'SignUpRecord(reference: ${reference.path}, data: $snapshotData)';

  @override
  int get hashCode => reference.path.hashCode;

  @override
  bool operator ==(other) =>
      other is SignUpRecord &&
      reference.path.hashCode == other.reference.path.hashCode;
}

Map<String, dynamic> createSignUpRecordData() {
  final firestoreData = mapToFirestore(
    <String, dynamic>{}.withoutNulls,
  );

  return firestoreData;
}

class SignUpRecordDocumentEquality implements Equality<SignUpRecord> {
  const SignUpRecordDocumentEquality();

  @override
  bool equals(SignUpRecord? e1, SignUpRecord? e2) {
    return;
  }

  @override
  int hash(SignUpRecord? e) => const ListEquality().hash([]);

  @override
  bool isValidKey(Object? o) => o is SignUpRecord;
}
