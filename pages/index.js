import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import User from "../components/User";


const indexPage = ()=>(

        <div>
            <h2>Welcome page</h2>
            <p>Go to the <Link href="/auth"><a>Auth</a></Link> page.</p>
            <button onClick={()=>Router.push('/auth')}>Go to Auth</button>

            <User
                name="Adeola Adekoyejo"
                age="24"
            />
        </div>
);


export default indexPage;