// components/ChatComponent.tsx
// This component is the main chat interface. It includes a message
// display area and an input form.

"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hallo! Wie kann ich Ihnen heute helfen?' },
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: inputMessage.trim()
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: 'bot',
          text: 'Das ist eine interessante Frage! Ich helfe Ihnen gerne dabei, Deutsch zu lernen.'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <Card className="h-full flex flex-col bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
      <CardHeader className="border-b border-gray-300 dark:border-gray-600">
        <CardTitle>Chat with Wertex</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {/* Map through the messages and display them */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'bot' && (
               <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm">W</div>
            )}
            <div
              className={`max-w-xs md:max-w-md lg:max-w-2xl rounded-lg px-4 py-2 ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t border-gray-300 dark:border-gray-600 pt-6">
        <div className="flex w-full items-center space-x-2">
          <Input 
            id="message" 
            placeholder="Type your message..." 
            className="flex-1" 
            autoComplete="off"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button type="button" size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
