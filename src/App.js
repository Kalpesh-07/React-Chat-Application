import {ChatEngine, IsTyping} from "react-chat-engine";
import LoginForm from "./components/LoginForm";

import "./App.css";
import ChatSettingsTop from "./components/ChatSettingsTop";

const projectID = "4582bc74-e1de-4f69-818b-da5b688905f4";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm/>;
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatSettingsTop={(creds, chat) => <ChatSettingsTop/>}
            renderIsTyping={(typers) => <IsTyping/>}
            // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() =>
                new Audio(
                    "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
                ).play()
            }
        />
    );
};

export default App;
