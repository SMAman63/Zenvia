import Image from "next/image";

const Categories = () =>{
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12" >
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image
                    src="/Beachfront.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />
                
                <span className="text-xs">Beach</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image
                    src="/Farms.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />
                
                <span className="text-xs">Farms</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image
                    src="/Pools.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />
                
                <span className="text-xs">Pools</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image
                    src="/AmazingView.jpg"
                    alt="Category - Beach"
                    width={20}
                    height={20}
                />
                
                <span className="text-xs">Amazing Views</span>
            </div>
        </div>
    )
}

export default Categories;