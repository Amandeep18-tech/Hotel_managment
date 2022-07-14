import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../redux/authSlice'

import { Button, Layout , PageHeader} from 'antd';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <Layout className="layout">
            <PageHeader
                ghost
                title="B&B"
                extra={[
                    <Button key="3"><Link to='/register'>   Register    </Link></Button>,
                    <Button key="2"><Link to='/login'>   Log In    </Link></Button>,
                    <Button key="1" type="primary" onClick={onLogout}>
                        Log Out
                    </Button>,
                ]}
            ></PageHeader>
        </Layout>
    )
}