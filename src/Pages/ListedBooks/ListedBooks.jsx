import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredItem } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList , setReadList]=useState([])
    const [sort,setSort]=useState('')
    const data = useLoaderData()
   

    useEffect(()=>{
        const storedItems = getStoredItem()
        const convertStoredItems = storedItems.map(id=>parseInt(id))
        console.log(convertStoredItems)
        const myReadList = data.filter(book => convertStoredItems.includes(book.bookId))
        setReadList(myReadList)
    },[])

    const handleSort=(sortType)=>{
        setSort(sortType)
        if(sortType === 'Pages'){
            const sortByPageDesc =[...readList].sort((a,b)=>b.totalPages - a.totalPages)
            setReadList(sortByPageDesc)
        } 
        
        if(sortType === 'Rating'){
            const sortByRatingAsc = [...readList].sort((a,b)=>a.rating - b.rating)
            setReadList(sortByRatingAsc)
        }
    }

    return (
        <div className ='my-10'>
            <div className="dropdown flex justify-end ">
            <div tabIndex={0} role="button" className="btn bg-purple-500">Sort By : {sort ? sort:''}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li className="hover:bg-purple-500"><a onClick={()=>handleSort('Pages')}>Pages</a></li>
                    <li className="hover:bg-green-400"><a onClick={()=>handleSort("Rating")}>Rating</a></li>
                </ul>
            </div>
           <Tabs >
            <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Whish List</Tab>
            </TabList>

            <TabPanel>
                <h2>Book Already readed : ({readList.length})</h2>
                <div className="grid grid-cols-1 place-items-center gap-2">
                    {
                        readList.map((b,index)=><Book key={index} singleBook={b}></Book>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
               <h2>Any content </h2>
            </TabPanel>
          </Tabs>
        </div>
    );
};

export default ListedBooks;