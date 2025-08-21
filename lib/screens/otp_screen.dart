import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'create_quiz_screen.dart';

class OTPScreen extends StatefulWidget {
  final String verificationId;
  const OTPScreen({super.key, required this.verificationId});

  @override
  State<OTPScreen> createState() => _OTPScreenState();
}

class _OTPScreenState extends State<OTPScreen> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _otpController = TextEditingController();
  bool _isVerifying = false;

  String? _validateOtp(String? value) {
    if (value == null || value.trim().isEmpty) return 'الرجاء إدخال الرمز';
    if (!RegExp(r'^\d{4,8}\$').hasMatch(value.trim())) {
      return 'رمز غير صالح';
    }
    return null;
  }

  Future<void> _verifyOTP() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => _isVerifying = true);
    final credential = PhoneAuthProvider.credential(
      verificationId: widget.verificationId,
      smsCode: _otpController.text.trim(),
    );
    try {
      await FirebaseAuth.instance.signInWithCredential(credential);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('تم تسجيل الدخول بنجاح')),
      );
      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(builder: (_) => const CreateQuizScreen()),
        (route) => false,
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('فشل التحقق: $e')),
      );
    } finally {
      if (mounted) setState(() => _isVerifying = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('التحقق من الرمز')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Align(
                  alignment: Alignment.centerRight,
                  child: Text('أدخل رمز التحقق المرسل إليك'),
                ),
                const SizedBox(height: 10),
                TextFormField(
                  controller: _otpController,
                  keyboardType: TextInputType.number,
                  textAlign: TextAlign.center,
                  decoration: const InputDecoration(hintText: 'أدخل الرمز'),
                  validator: _validateOtp,
                  enabled: !_isVerifying,
                ),
                const SizedBox(height: 20),
                SizedBox(
                  height: 48,
                  child: ElevatedButton(
                    onPressed: _isVerifying ? null : _verifyOTP,
                    child: _isVerifying
                        ? const SizedBox(
                            width: 22,
                            height: 22,
                            child: CircularProgressIndicator(strokeWidth: 2),
                          )
                        : const Text('تحقق'),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

