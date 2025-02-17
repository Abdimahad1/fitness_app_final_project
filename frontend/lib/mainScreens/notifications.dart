import 'package:flutter/material.dart';

class NotificationScreen extends StatelessWidget {
  const NotificationScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Notifications"),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: const Text(
          "No new notifications.",
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
