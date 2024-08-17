import { ChangeEvent, useCallback, useState } from "react";
import "./App.css";
import { TextArea } from "./components/text-field";
import { userConversations, friends } from "./constants";
import { Chat } from "./types";
import { toTimeString } from "./utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Øyvind");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Chat[]>([]);

  const [chatRef, setChatRef] = useState<HTMLDivElement | null>(null);

  const handleScrollToBottom = useCallback(() => {
    if (!chatRef) return;
    chatRef?.scroll?.({
      top: chatRef.scrollHeight,
      behavior: "smooth",
    });
  }, [chatRef]);

  const handleSwitchConversation = useCallback(
    (friendUsername: string) => {
      const newChat = userConversations[friendUsername].chat;
      setChat(newChat);
      handleScrollToBottom();
    },
    [handleScrollToBottom]
  );

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    if (!!value) {
      setMessage(value);
    }
  };

  const sendMessage = useCallback(() => {
    if (!!message) {
      setChat([
        ...chat,
        {
          username: currentUser,
          timestamp: toTimeString(new Date()),
          message: message,
        },
      ]);
      handleScrollToBottom();
      setMessage("");
    }
  }, [message, handleScrollToBottom]);

  return (
    <main className="App">
      <div className="Sidebar">
        <div className="Header">
          <div className="Header-title">
            <img src="/folder.svg" alt="" className="Folder" /> Friends
          </div>
        </div>

        <ul className="Friends-list" role="tablist">
          {friends.map(({ username }) => (
            <li className="Friends-list-element">
              <button
                onClick={() => handleSwitchConversation(username)}
                role="tab"
              >
                {username}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="Chat" role="tabpanel">
        <div className="ChatBox" ref={(el) => setChatRef(el)}>
          {chat.length > 0 ? (
            <div className="ChatBoxInner">
              {chat.map(({ username, message, timestamp }) => (
                <div
                  className={`MessageBox Message${
                    username === currentUser ? "Me" : ""
                  }`}
                >
                  <div className="Top">
                    <span>{username}</span>
                    <span>{timestamp}</span>
                  </div>
                  <div className="MessageText"> {message}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="No-messages">
              You have no messages from this user. <br /> Do not hesitate to
              reach out.
            </div>
          )}
        </div>
        <div className="MessageBox">
          <label>Write to your friend:</label>
          <TextArea
            onChange={handleChange}
            value={message}
            id="w3review"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button onClick={sendMessage} disabled={!message}>
            Send
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
