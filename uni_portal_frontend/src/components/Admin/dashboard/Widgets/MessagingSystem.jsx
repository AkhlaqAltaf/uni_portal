import React, { useState } from "react";

const conversations = [
  { id: 1, name: "John Doe", lastMessage: "Can you help me with my grades?" },
  { id: 2, name: "Jane Smith", lastMessage: "I need assistance with my schedule." },
  { id: 3, name: "Alex Johnson", lastMessage: "Can you review my application?" },
];

const messages = [
  { sender: "user", text: "Can you help me with my grades?", time: "10:30 AM" },
  { sender: "admin", text: "Sure, let me check for you.", time: "10:32 AM" },
];

const MessagingSystem = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMessage, setNewMessage] = useState("");

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newChatMessage = {
      sender: "admin",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages([...chatMessages, newChatMessage]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-[#1d2241]">
      {/* Sidebar */}
      <div className="w-1/3 bg-[#1d2241] text-white shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-white">Conversations</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 border-b cursor-pointer ${
                selectedConversation?.id === conversation.id
                  ? "bg-[#048c51]"
                  : "hover:bg-[#048c51]"
              }`}
              onClick={() => handleSelectConversation(conversation)}
            >
              <h3 className="text-lg font-medium text-white">{conversation.name}</h3>
              <p className="text-sm text-white truncate">{conversation.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-[#048c51] border-2 border-[#06814f] text-white shadow-md">
              <h2 className="text-xl font-bold text-white">
                {selectedConversation.name}
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#1d2241]  text-white">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.sender === "admin" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-sm ${
                      message.sender === "admin"
                        ? "bg-[#048c51] border-2 border-[#06814f] text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-white mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-[#1d2241] shadow-lg">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 bg-[#193344] border-2 border-[#06814f]  rounded-lg"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-[#193344] border-2 border-[#06814f] text-white"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <p className="text-lg text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingSystem;
