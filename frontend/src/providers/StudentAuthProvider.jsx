import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const StudentAuthContext = createContext();

const StudentAuthProvider = () => {

    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const studentAuth = getAuth(app);

    return (
        <div>
            
        </div>
    );
};

export default StudentAuthProvider;