import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'rekomendasi_menu_diet_model.dart';
export 'rekomendasi_menu_diet_model.dart';

class RekomendasiMenuDietWidget extends StatefulWidget {
  const RekomendasiMenuDietWidget({super.key});

  @override
  State<RekomendasiMenuDietWidget> createState() =>
      _RekomendasiMenuDietWidgetState();
}

class _RekomendasiMenuDietWidgetState extends State<RekomendasiMenuDietWidget> {
  late RekomendasiMenuDietModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => RekomendasiMenuDietModel());
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _model.unfocusNode.canRequestFocus
          ? FocusScope.of(context).requestFocus(_model.unfocusNode)
          : FocusScope.of(context).unfocus(),
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        appBar: AppBar(
          backgroundColor: Color(0xFF404040),
          automaticallyImplyLeading: false,
          title: Padding(
            padding: EdgeInsetsDirectional.fromSTEB(40.0, 0.0, 0.0, 40.0),
            child: Text(
              'HEALTHBOT',
              style: FlutterFlowTheme.of(context).headlineMedium.override(
                    fontFamily: 'Outfit',
                    color: Colors.white,
                    fontSize: 22.0,
                    letterSpacing: 0.0,
                  ),
            ),
          ),
          actions: [],
          centerTitle: false,
          elevation: 2.0,
        ),
        body: SafeArea(
          top: true,
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(50.0, 20.0, 0.0, 0.0),
                    child: Text(
                      'Rekomendasi Menu Diet',
                      style: FlutterFlowTheme.of(context).bodyMedium.override(
                            fontFamily: 'Readex Pro',
                            fontSize: 24.0,
                            letterSpacing: 0.0,
                            fontWeight: FontWeight.bold,
                          ),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(40.0, 10.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(40.0, 10.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(40.0, 20.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(40.0, 20.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(40.0, 20.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(40.0, 20.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(130.0, 20.0, 0.0, 0.0),
                    child: Container(
                      width: 140.0,
                      height: 120.0,
                      decoration: BoxDecoration(
                        color: Color(0xFF04364A),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(100.0, 40.0, 0.0, 0.0),
                    child: FFButtonWidget(
                      onPressed: () {
                        print('Button pressed ...');
                      },
                      text: 'Kembali',
                      options: FFButtonOptions(
                        width: 200.0,
                        height: 40.0,
                        padding: EdgeInsetsDirectional.fromSTEB(
                            24.0, 0.0, 24.0, 0.0),
                        iconPadding:
                            EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                        color: Color(0xFF57F2F2),
                        textStyle:
                            FlutterFlowTheme.of(context).titleSmall.override(
                                  fontFamily: 'Readex Pro',
                                  color: Colors.white,
                                  letterSpacing: 0.0,
                                ),
                        elevation: 3.0,
                        borderSide: BorderSide(
                          color: Colors.transparent,
                          width: 1.0,
                        ),
                        borderRadius: BorderRadius.circular(8.0),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
