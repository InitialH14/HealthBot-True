import '/flutter_flow/flutter_flow_util.dart';
import 'grafikrenang_widget.dart' show GrafikrenangWidget;
import 'package:flutter/material.dart';

class GrafikrenangModel extends FlutterFlowModel<GrafikrenangWidget> {
  ///  State fields for stateful widgets in this page.

  final unfocusNode = FocusNode();

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    unfocusNode.dispose();
  }
}
