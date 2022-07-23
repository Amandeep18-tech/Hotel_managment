import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Button, Input, Spin, Typography } from "antd";
import LexChat from "react-lex";
import { FetchDyanamoDB } from './FetchDynamoDB';

function Kitchen()
{
    return (
        
        
        <div className="kitch">
            <FetchDyanamoDB></FetchDyanamoDB>
        <div className="intro">
            <h2>Welcome to our Kitchen!!</h2>
            <h3>To start ordering chat with our chatbot!</h3>
        </div>

        <div className="kitchen-home">
          
        </div>
        </div>
    );
}

export {Kitchen};
