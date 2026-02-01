import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: ChatSender.BOT, text: "Hey! I'm Alex's AI Assistant. Want to know how we can scale your business? Ask me anything." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    
    // Add user message
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: userText
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      // Create a temporary bot message for streaming
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, sender: ChatSender.BOT, text: '', isStreaming: true }]);

      // Format history for the service
      const history = messages.map(m => ({
        role: m.sender === ChatSender.USER ? 'user' as const : 'model' as const,
        parts: [{ text: m.text }]
      }));

      const stream = await streamChatResponse(history, userText);
      
      let fullText = "";
      
      for await (const chunk of stream) {
        const chunkText = chunk.text || "";
        fullText += chunkText;
        
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId 
            ? { ...msg, text: fullText } 
            : msg
        ));
      }
      
      // Finalize message
       setMessages(prev => prev.map(msg => 
          msg.id === botMsgId 
            ? { ...msg, isStreaming: false } 
            : msg
        ));

    } catch (error) {
      console.error("Chat Error", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        sender: ChatSender.BOT, 
        text: "I'm currently offline (API Key missing or error). Please use the contact form!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-yellow-500 text-black p-4 rounded-full shadow-[0px_4px_20px_rgba(234,179,8,0.4)] hover:bg-yellow-400 transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col max-h-[500px] overflow-hidden">
          {/* Header */}
          <div className="bg-neutral-800 p-4 border-b border-neutral-700 flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <Bot size={24} className="text-black" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Ask Alex AI</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.sender === ChatSender.USER 
                      ? 'bg-yellow-500 text-black font-medium rounded-br-none' 
                      : 'bg-neutral-800 text-gray-200 rounded-bl-none border border-neutral-700'
                  }`}
                >
                  {msg.text}
                  {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-yellow-500 animate-pulse align-middle"></span>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-neutral-900 border-t border-neutral-800 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about pricing, stacks..."
              className="flex-1 bg-black border border-neutral-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500"
            />
            <button 
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;