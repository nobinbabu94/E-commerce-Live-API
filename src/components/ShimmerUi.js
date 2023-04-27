const ShimmerUi = () => {



    return (

        <div className="flex flex-wrap justify-center ">
            {Array(15).fill("").map((e, index) => <div key={index}
                className="flex-wrap flex-col h-80 w-56 p-3 shadow-lg rounded-lg gap-10 bg-slate-200 m-3 flex ">
            </div>)}
        </div>

    )
}

export default ShimmerUi;