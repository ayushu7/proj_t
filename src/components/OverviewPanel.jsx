import React from 'react'

const Data = [
    {
        'title': '52 WEEK HIGH',
        'value': '$151.55'
    },
    {
        'title': '52 WEEK LOW',
        'value': '$95.56'
    },
    {
        'title': 'AVERAGE 3 MONTH DAILY VOLUME',
        'value': '29.00MM'
    },
    {
        'title': 'SHARES OUTSTANDING',
        'value': '13,044.00 MM'
    },
    {
        'title': 'SHORT INTEREST %',
        'value': '0.41%'
    },
    {
        'title': 'MARKET CAP (MM)',
        'value': '$1,292,666.99'
    },
    {
        'title': 'TEV (MM)',
        'value': '$1,196,479.99'
    }
]


function OverviewPanel() {
    return (
        <>
            <div className='flex flex-row justify-center items-center m-2 text-slate-600 body-font rounded-md bg-slate-200 shadow-md'>
                {Data.map((data) => <DataPoints title={data.title} value={data.value} />)}
            </div>
            <div className='m-2 p-4 text-slate-600 body-font rounded-md bg-slate-200 shadow-md'>
                <h5 className='p-2'>
                    Industry: <b>Interactive Media and Services</b>
                </h5>
                <p className='p-2'>
                    Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.
                </p>
            </div>
        </>
    )
}

function DataPoints({ title, value }) {
    return (
        <div className="flex flex-col justify-between h-full items-center p-3 text-gray-600 ">
            <span className="title-font text-center font-normal">{title}</span>
            <span className="title-font font-medium ">{value}</span>
        </div>
    )
}

export default OverviewPanel