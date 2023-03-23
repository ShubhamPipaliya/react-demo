import React, { useState } from 'react'
import Cards from './Cards';
import Menu from "./Menu"

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), 'all'];
    console.log('allCatValues', allCatValues)

const GallaryCard = () => {

    const [card, setCard] = useState(Menu)
    const [catItems, setCatItems] = useState(allCatValues)

    

    const filterMenu = (category) => {
        if(category === "all"){
                setCard(Menu)
                return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setCard(updatedItems)
    }
    return (
        <>

            <div className='text-center mt-5 text-purple-400 text-2xl'>Filter By Category</div>
            <div className='container mt-10 flex justify-around' >
                {
                    catItems.map((curElem ,index) => {
                        return (
                            <>
                                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                 key={index}   onClick={() => filterMenu(curElem)}
                                >{curElem}</button>
                            </>
                        )
                    })
                }
                {/* <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => filterMenu('cards')}
                >Card Game</button>
                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => filterMenu('casino')}
                >Casino Game</button>
                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => filterMenu('dics')}
                >Dics Game</button>
              
                <button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setCard(Menu)}
                >All Game</button> */}

            </div>

            <Cards card={card} />

        </>
    )
}

export default GallaryCard