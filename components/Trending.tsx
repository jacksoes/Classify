"use client"


//EACH DESCRIPTION WILL HAVE 75 CHAR LIMIT.
//clicking group chat will show member count, messages and join button.

export default function Trending() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-900 p-2">
            <table className=" w-full mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md 2xl:max-w-screen-md">
                <tbody>
                <tr className="h-20 bg-white-950 border-2 border-solid divide-x-2 divide-solid">

                    <th className="w-1/5"> <button onClick={() => alert("chat title has been clicked")} className=" overflow-auto h-25 w-full bg-white-950 button-white">System design</button></th>
                    <td className="w-4/5"><button onClick={() => alert("chat description has been clicked")} className=" overflow-auto h-25 w-full bg-white-950 p-2 button-white">This class focuses on linear algebra and its applications for the current semester of todaya.</button></td>
                </tr>
                
                
                </tbody>


            </table>
        </div>

    )

}