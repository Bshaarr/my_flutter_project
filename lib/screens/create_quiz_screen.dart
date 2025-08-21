import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class CreateQuizScreen extends StatefulWidget {
  const CreateQuizScreen({super.key});

  @override
  State<CreateQuizScreen> createState() => _CreateQuizScreenState();
}

class _CreateQuizScreenState extends State<CreateQuizScreen> {
  final TextEditingController quizTitleController = TextEditingController();
  List<QuestionItem> questions = [QuestionItem()];
  bool _isSaving = false;

  Future<void> _saveQuiz() async {
    if (quizTitleController.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('أدخل عنوان الاختبار')),
      );
      return;
    }
    setState(() => _isSaving = true);
    final quizData = {
      'title': quizTitleController.text.trim(),
      'questions': questions.map((q) => q.toMap()).toList(),
      'created_at': Timestamp.now(),
    };
    try {
      await FirebaseFirestore.instance.collection('quizzes').add(quizData);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('تم حفظ الاختبار بنجاح')),
      );
      setState(() {
        quizTitleController.clear();
        questions = [QuestionItem()];
      });
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('فشل الحفظ: $e')),
      );
    } finally {
      if (mounted) setState(() => _isSaving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('إنشاء اختبار جديد')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: quizTitleController,
              textAlign: TextAlign.right,
              decoration: const InputDecoration(
                labelText: 'عنوان الاختبار',
              ),
            ),
            const SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: questions.length,
              itemBuilder: (context, index) {
                return QuestionItemWidget(
                  question: questions[index],
                  index: index,
                  onDelete: () {
                    setState(() {
                      questions.removeAt(index);
                    });
                  },
                );
              },
            ),
            const SizedBox(height: 10),
            ElevatedButton.icon(
              icon: const Icon(Icons.add),
              label: const Text('إضافة سؤال'),
              onPressed: () {
                setState(() => questions.add(QuestionItem()));
              },
            ),
            const SizedBox(height: 20),
            SizedBox(
              height: 48,
              child: ElevatedButton(
                onPressed: _isSaving ? null : _saveQuiz,
                child: _isSaving
                    ? const SizedBox(
                        width: 22,
                        height: 22,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Text('حفظ الاختبار'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class QuestionItem {
  TextEditingController questionController = TextEditingController();
  List<TextEditingController> options = List.generate(4, (_) => TextEditingController());
  int correctOption = 0;

  Map<String, dynamic> toMap() {
    return {
      'question': questionController.text.trim(),
      'options': options.map((e) => e.text.trim()).toList(),
      'correct_index': correctOption,
    };
  }
}

class QuestionItemWidget extends StatefulWidget {
  final QuestionItem question;
  final int index;
  final VoidCallback onDelete;

  const QuestionItemWidget({
    super.key,
    required this.question,
    required this.index,
    required this.onDelete,
  });

  @override
  State<QuestionItemWidget> createState() => _QuestionItemWidgetState();
}

class _QuestionItemWidgetState extends State<QuestionItemWidget> {
  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Text(
              'السؤال رقم ${widget.index + 1}',
              style: const TextStyle(fontWeight: FontWeight.bold),
              textAlign: TextAlign.right,
            ),
            TextField(
              controller: widget.question.questionController,
              textAlign: TextAlign.right,
              decoration: const InputDecoration(labelText: 'نص السؤال'),
            ),
            const SizedBox(height: 10),
            Column(
              children: List.generate(4, (i) {
                return RadioListTile<int>(
                  value: i,
                  groupValue: widget.question.correctOption,
                  onChanged: (val) {
                    setState(() => widget.question.correctOption = val!);
                  },
                  title: TextField(
                    controller: widget.question.options[i],
                    textAlign: TextAlign.right,
                    decoration: InputDecoration(labelText: 'الخيار ${i + 1}'),
                  ),
                  controlAffinity: ListTileControlAffinity.trailing,
                );
              }),
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: IconButton(
                onPressed: widget.onDelete,
                icon: const Icon(Icons.delete, color: Colors.red),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

