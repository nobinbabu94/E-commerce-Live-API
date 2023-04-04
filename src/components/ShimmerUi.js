const ShimmerUi = () => {



    return (

        <div className="ShimmerParent">
            {Array(15).fill("").map((e,index) => <div key={index} className="shimmerCard"></div>)}
        </div>

    )
}

export default ShimmerUi;