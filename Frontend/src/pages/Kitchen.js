import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Button, Input, Spin, Typography } from "antd";
import LexChat from "react-lex";

function Kitchen()
{
    return (
        <div className="kitchen-home">
          <LexChat
            botName="OrderFlowers"
            IdentityPoolId="us-east-1:f58bf7ab-9084-45c7-9565-b905754abf92"
            placeholder="Placeholder text"
            backgroundColor="#FFFFFF"
            height="430px"
            region="us-east-1"
            headerText="Chat with our awesome bot"
            headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
            greeting={
            "Hello, how can I help? You can say things like 'help' to get more info"
            }
        />
        </div>
    );
}

export {Kitchen};
