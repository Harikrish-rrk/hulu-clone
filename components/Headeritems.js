import React from 'react'

function Headeritems({ Icon, title }) {
    return (
        <div className='group pt-1 w-16 sm:w-20 cursor-pointer hover:bg-slate-500 text-center flex flex-col justify-center rounded-md'>
            <Icon class="h-7 mb-1 mt-1 group-hover:stroke-white group-hover:animate-bounce" />
            <p className='opacity-0 group-hover:opacity-100 text-white'>{title}</p>
        </div>
    )
}

export default Headeritems