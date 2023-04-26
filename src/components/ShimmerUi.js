const ShimmerUi = () => {



    return (

        <div className="flex flex-wrap justify-center ">
            {Array(15).fill("").map((e,index) => <div key={index} className="h-80 w-96 p-2 bg-slate-200 m-3 rounded-lg flex flex-wrap"></div>)}
        </div>

    )
}

export default ShimmerUi;