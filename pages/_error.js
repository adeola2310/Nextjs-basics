import React from 'react';
import Link from "next/link";


const errorPage = ()=>(

    <div>
        <p>Ooops, sth went wrong</p>
        <p>try to go <Link href={'/'}><a>back</a></Link> home</p>
    </div>
);


export default errorPage;