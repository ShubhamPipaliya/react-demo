import React, { useEffect, useState } from 'react'

const Toogle = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?
            localStorage.getItem("theme") : "system"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme : dark)");
    console.log('darkQuery', darkQuery)
    const option = [
        {
            icon: "sunny-outline",
            text: "light",
        },
        {
            icon: "moon-outline",
            text: "dark",
        },
        {
            icon: "desktop-outline",
            text: "system",
        }

    ]

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        }
        else {
            element.classList.remove("dark")

        }
    }

    onWindowMatch()

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;

            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')

                break;


            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;
        }
    }, [theme])

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark")
            } else {
                element.classList.remove("dark")
            }

        }
    })

    return (
        <>
           
                <div className='fixed  right-60  mx-auto  grid place-items-center grid-cols-3 duration-100 dark:bg-slate-800 bg-gray-100 rounded-md '>
                    {option?.map((opt) => (

                        <button key={opt?.text}
                            onClick={() =>
                                setTheme(opt?.text)
                            }
                            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && 'text-sky-600'}`}>

                            <ion-icon name={opt?.icon}></ion-icon>

                        </button>
                    ))}


                </div>
         


        </>
    )
}

export default Toogle