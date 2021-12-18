import React, {useEffect, useState} from 'react';

const useFetch = (path, option) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => { fetching() }, [path]);

    const fetching = async () => {
        try{
            setLoading(true);
            const result = await fetch(`${process.env.API_URL}/${path}`, {
                ...option,
                headers: {"Content-Type": "application/json"}
            }).then( res => res.json() );
            console.log(result);
            setData(result);
        }
        catch(e) {setError(e);}
        finally {setLoading(false);}
    }

    return {data, loading, error};
}

export default useFetch;