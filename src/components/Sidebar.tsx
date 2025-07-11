// components/Sidebar.tsx
// This component renders the navigation sidebar.
// It receives the active tab state and the function to update it via props.

import { MessageCircle, BookOpenText, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui setup

interface SidebarProps {
  activeTab: 'chat' | 'vocab';
  setActiveTab: (tab: 'chat' | 'vocab') => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between p-4">
      <div>
        <div className="flex items-center gap-2 mb-8">
           {/* Simple logo div instead of external image */}
           <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
             W
           </div>
           <h1 className="text-xl font-bold text-purple-600">Wertex</h1>
        </div>
        <nav className="flex flex-col gap-2">
          <Button
            variant={activeTab === 'chat' ? 'secondary' : 'ghost'}
            className="justify-start gap-2"
            onClick={() => setActiveTab('chat')}
          >
            <MessageCircle size={20} />
            Chat
          </Button>
          <Button
            variant={activeTab === 'vocab' ? 'secondary' : 'ghost'}
            className="justify-start gap-2"
            onClick={() => setActiveTab('vocab')}
          >
            <BookOpenText size={20} />
            Vocabulary
          </Button>
        </nav>
      </div>
      <div>
         <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings size={20} />
            Settings
         </Button>
      </div>
    </div>
  );
}
