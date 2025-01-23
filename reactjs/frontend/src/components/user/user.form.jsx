import { Input } from 'antd';
import { useState } from 'react';

const UserForm = () => {
    const [fullName , setFullName] = useState('Nguyen Tuan Thanh');

    return (         
    <div className="user-form" >
        <div>
            <div>
                <span>Full name</span>
                <Input 
                value={fullName}
                onChange={(event) => {setFullName(event.target.value)}}/>
            </div>
            <div>
                <span>Full name</span>
                <Input/>
            </div>
            <div>
                <span>Full name</span>
                <Input/>
            </div>
            <div>
                <span>Full name</span>
                <Input/>
            </div>
        </div>
    </div>
    );
}

export default UserForm;