import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Button, Input, Spin, Typography } from "antd";
import LexChat from "react-lex";

function Kitchen()
{
    return (
        <div className="kitch">
        <div className="intro">
            <h2>Welcome to our Kitchen!!</h2>
            <h3>To start ordering chat with our chatbot!</h3>
        </div>

        <div className="kitchen-home">
          <LexChat
            botName="OrderFood"
            IdentityPoolId="us-east-1:51900eaf-399d-4560-b14c-5503228cdd9c"
            placeholder="Order with us!"
            backgroundColor="#FFFFFF"
            height="430px"
            region="us-east-1"
            headerText="Chat with our awesome bot"
            headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
            greeting={
            "Hello, how can I help? Start chatting with me to order your favourite food!"
            }
        />
        </div>
        </div>
    );
}

export {Kitchen};
