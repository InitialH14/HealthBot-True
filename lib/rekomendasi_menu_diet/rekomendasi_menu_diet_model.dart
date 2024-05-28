import '/flutter_flow/flutter_flow_util.dart';
import 'rekomendasi_menu_diet_widget.dart' show RekomendasiMenuDietWidget;
import 'package:flutter/material.dart';

class RekomendasiMenuDietModel
    extends FlutterFlowModel<RekomendasiMenuDietWidget> {
  ///  State fields for stateful widgets in this page.

  final unfocusNode = FocusNode();

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    unfocusNode.dispose();
  }
}
