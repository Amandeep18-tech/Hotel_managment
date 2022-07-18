import { Typography, Spin, Tag, message, Table, Button, Rate, Input } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GET_REVIEWS } from '../api/Api';

const { Title, Text } = Typography;
const { ColumnGroup, Column } = Table;
const { TextArea } = Input;

export default function Feedback(params) {

    const [getProcess, setGetProcess] = useState(true);
    const [reviews, setReviews] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        loadReviews();
    }, [])

    function loadReviews() {
        var config = {
            method: 'get',
            url: GET_REVIEWS,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setReviews(response.data.data)
                setGetProcess(false);
            })
            .catch(function (error) {
                message.error('Error while getting feedbacks')
            })
    }

    function submitReview() {
        // var data = JSON.stringify({
        //     "username": "Sarthak",
        //     "feedback": "You haven’t met your targets. I’m concerned it is going to drag down the team’s performance."
        // });

        // var config = {
        //     method: 'post',
        //     url: 'https://us-central1-csci-5408-w22-340718.cloudfunctions.net/addUserFeedback',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         message.success('Feedback added');
        //         loadReviews();
        //     })
        //     .catch(function (error) {
        //         message.error('Feddback failed')
        //         console.log(error);
        //     });
    }

    return (<>
        <div style={{ width: '75%', margin: 'auto' }}>
            {getProcess
                ? <Spin size='large' />
                :
                <div>
                    <div style={{margin:'5%'}}>
                    <TextArea placeholder="Write your feedback here"
                        autoSize={{ minRows: 3, maxRows: 6 }} style={{ width: '60%' }} defaultValue="0571" />
                        <Button onClick={submitReview} style={{margin:'2.5%'}} type='primary'> Submit </Button>
                        </div>
                    <Table dataSource={reviews} key='table' rowKey='table'>
                        <Column title="User Name" dataIndex="username" key="username" />
                        <Column title="Feedback" dataIndex="feedback" key="feedback" />
                        <Column title="Polarity" render={(item) => {
                            return (
                                <Tag color={item == 'positive' ? 'green' : 'red'}>{item}</Tag>
                            )
                        }} dataIndex="polarity" key="polarity" />
                        <Column title="Score" render={(item) => {
                            return (
                                <Rate disabled defaultValue={item} />
                            )
                        }} dataIndex="score" key="score" />
                        <Column title="Date" dataIndex="date" key="date" render={(date) => {
                            const d = date.split(' ')
                            return (
                                <Text level={5}>{d[1] + '   ' + d[2] + '  ' + d[3]}</Text>
                            )
                        }} />
                    </Table>
                </div>
            }
        </div>
    </>)
}