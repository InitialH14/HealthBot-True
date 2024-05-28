import '/flutter_flow/flutter_flow_util.dart';
import 'grafiklari_widget.dart' show GrafiklariWidget;
import 'package:flutter/material.dart';

class GrafiklariModel extends FlutterFlowModel<GrafiklariWidget> {
  ///  State fields for stateful widgets in this page.

  final unfocusNode = FocusNode();

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    unfocusNode.dispose();
  }
}
