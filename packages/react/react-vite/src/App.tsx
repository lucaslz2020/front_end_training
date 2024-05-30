import { useState} from 'react'
import './App.css'

const Counter = () => {
    console.info("render counter");
    const [user, setUser] = useState(1);
    return <div>
        {user}
        <button onClick={() => setUser(user + 1)}>累加</button>;
    </div>
}

interface User {
    name: string;
    age: number;
}

interface UserProps {
    user: User;
}

const User = ({user}: UserProps) => {
    console.info("render user");
    return <div>
        {user.name}
        {user.age}
    </div>
}

export default function App() {
    console.log("render App")
    const [count, setCount] = useState(1);
    const user = {name: "lucas", age: 12};
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <Counter/>
            <User user={user} />
        </div>
    )
}
