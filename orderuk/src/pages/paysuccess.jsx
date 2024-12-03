import { FaCheck } from "react-icons/fa"

const Success=()=>{
    return(
        <div className="success flex items-center justify-center w-full flex-col gap-10 mt-10">
            <div className="part1 flex items-center justify-center">
                <div className="check flex flex-col  items-center justify-center gap-3">
                    <div style={{backgroundColor:"#d3ffd3"}} className="flex items-center justify-center wrapper rounded-[120px] w-[120px] h-[120px]">
                        <div className='flex items-center justify-center text-[50px] text-white innerwrapper rounded-[100px] w-[100px] h-[100px]' style={{backgroundColor:"#32B638"}}>
                        <FaCheck/>
                        </div>
                    </div>
                    <p className="text-md text-black font-semibold">Order Placed Successfully</p>
                    <p className="text-sm text-gray-400">Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
                </div>

            </div>
            <div className="part2 flex border-black flex-col border border-slate-400 p-3 rounded-lg">
                        <ul className="items style-none text-xs">
                            <li>Royal Cheese Burger</li>
                            <li>Royal Cheese Burger</li>
                            <li>Royal Cheese Burger</li>
                        </ul>
            <a href="home"><button className="text-white py-2 px-6 rounded-3xl mt-4 w-[300px]" style={{backgroundColor:'#FC8A06'}}>Back To Home</button></a>
            </div>
        </div>
    )
}
export default Success