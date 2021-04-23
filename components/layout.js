
 
import {useState} from 'react';
import Link from 'next/link'

const menuitems = [
    {"name": "home", url:"/"}, 
    {"name": "unmanned click and collect", url:"/unmanned"},
    {"name": "seasonal unmanned stores", url:"/seasonal"}
];

export default function Layout({ children }) {
    const [visible, setVisible] = useState(false);

    const menu = menuitems.map(m=>{
        return (<Link key={m.name} href={m.url} ><a className="text-xs lg:text-base text-bold pr-4">{m.name}</a></Link>);
    })

    

    return <div className="bg-roost">
        <header className="p-4 lg:mb-4">
            <div className="flex flex-grow flex-row">
                <div><img className="object-cover h-16" src="logo.svg"></img> </div>  
                <div className="md:flex flex-grow justify-end items-center text-white">
                    <div className="hidden md:flex">
                        {menu}
                    </div>
                </div>
                <button  onClick={()=>{setVisible(!visible)}} className="md:hidden flex items-center px-3 py-2 text-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
        </header>

        {visible && <div className="md:hidden flex flex-grow justify-end items-center text-white">{menu}</div>}
        <div className="bg-charcoal">
        {children}
        </div> 
        <footer className="bg-roost w-full h-24">

        </footer>
    </div>
}