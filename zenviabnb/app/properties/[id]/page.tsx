import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";



const ProppertyDetailPage = () =>{
    return(

        <main className="max-w-[1500px] mx-auto px-6 mt-15 pb-6">
            <div className="mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src='/BeachHouse.jpg'
                    className="object-cover w-full h-full"
                    alt="Beach House"
                 />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                    <Image
                        src="/profilepic.jpg"
                        width={48}
                        height={48}
                        className="w-13 h-13 rounded-full object-cover"
                        alt="The user name"
                    />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>

                        <hr />
                        <p className="mt-6 text-lg">
                            jkshadfkjsdfkfjkfkk dgfh gfsdfkjgfhagfgfasdfshfgsd f sdfgsd fsdjfgashjgfas fsdfgfgsdjhfgsfg sdkfgsf j sdfg sgsd sdkfsd hsgf sjfgk
                        </p>
                    
                </div>
                
                <ReservationSidebar />
            </div>    
        </main>
    )
}

export default ProppertyDetailPage;