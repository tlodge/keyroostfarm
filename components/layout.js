
 
import {useState} from 'react';
import Link from 'next/link'

const menuitems = [
    {"name": "home",  mobile: "home", url:"/"}, 
    {"name": "about us",  mobile: "us", url:"/team"}, 
    {"name": "unmanned click and collect", mobile: "click and collect", url:"/unmanned"},
    {"name": "seasonal unmanned stores",  mobile: "seasonal stores", url:"/seasonal"}
];

export default function Layout({ children }) {
    const [visible, setVisible] = useState(false);

    const menu = menuitems.map(m=>{
        return (<Link key={m.name} href={m.url} ><a className="text-xs lg:text-base text-bold pr-4">{m.name}</a></Link>);
    })

    const mobilemenu = menuitems.map(m=>{
        return (<Link key={m.mobile} href={m.url} ><a className="text-xs lg:text-base text-bold pr-4">{m.mobile}</a></Link>);
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

        {visible && <div className="p-4 bg-lightblue font-bold md:hidden text-center text-charcoal flex flex-grow justify-center items-center">{mobilemenu}</div>}
        <div className="bg-charcoal">
        {children}
        </div> 
        <footer className="bg-roost  w-full h-16 flex items-center justify-center">
            <Link  href={"https://keyroost.com"} ><a className="text-white opacity-70 text-xs md:text-base text-bold pr-4">more about keyroost</a></Link>
            <Link  href={"/keyroost8"}><a className="text-white text-xs md:text-base text-bold pr-4 opacity-70">the keyroost 8</a></Link>
            <Link  href={"/team"}><a className="text-white text-xs md:text-base opacity-70">who we are</a></Link>
        </footer>
    </div>
}