import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class CreateQuizScreen extends StatefulWidget {
  const CreateQuizScreen({super.key});

  @override
  State<CreateQuizScreen> createState() => _CreateQuizScreenState();
}

class _CreateQuizScreenState extends State<CreateQuizScreen> {
  final TextEditingController quizTitleController = TextEditingController();
  List<QuestionItem> questions = [QuestionItem()];

  void saveQuiz() async {
    if (quizTitleController.text.isEmpty) return;

    final quizData = {
      'title': quizTitleController.text.trim(),
      'questions': questions.map((q) => q.toMap()).toList(),
      'created_at': Timestamp.now(),
    };

    await FirebaseFirestore.instance.collection('quizzes').add(quizData);

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('تم حفظ الاختبار بنجاح')),
    );

    setState(() {
      quizTitleController.clear();
      questions = [QuestionItem()];
    });
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
                border: OutlineInputBorder(),
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
                setState(() {
                  questions.add(QuestionItem());
                });
              },
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: saveQuiz,
              child: const Text('حفظ الاختبار'),
            )
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
            Text('السؤال رقم ${widget.index + 1}', style: const TextStyle(fontWeight: FontWeight.bold)),
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
                    setState(() {
                      widget.question.correctOption = val!;
                    });
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
            )
          ],
        ),
      ),
    );
  }
}