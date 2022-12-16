import React, { useContext } from 'react';
import { ChatContext } from '../Context/ChatContext';

import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Cam} alt="cam.png" />
                    <img src={Add} alt="add.png" />
                    <img src={More} alt="more.png" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
