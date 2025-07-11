// app/page.tsx
// This is the main page component that orchestrates the layout.
// It manages the state for the active tab and renders the Sidebar
// and the correct content (Chat or Vocab) based on that state.

"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatComponent from '@/components/Chat';
import VocabComponent from '@/components/VocabComponent';

export default function Home() {
  // State to track the currently active tab. 'chat' is the default.
  const [activeTab, setActiveTab] = useState<'chat' | 'vocab'>('chat');

  return (
    <main className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Conditional rendering based on the active tab */}
        {activeTab === 'chat' && <ChatComponent />}
        {activeTab === 'vocab' && <VocabComponent />}
      </div>
    </main>
  );
}
