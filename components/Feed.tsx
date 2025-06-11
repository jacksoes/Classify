"use client"

export default function Feed() {
    return (
        <div className="w-dvw flex justify-center">
            <table className="mt-4 w-full mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md 2xl:max-w-screen-md">

                <tr className="h-20 bg-white-950 border-2 border-solid divide-x-2 divide-solid">

                    <th className="w-1/4"> <button onClick={() => alert("chat title has been clicked")} className="h-20 w-full bg-white-950 button-white">System design</button></th>
                    <td className="w-3/4"><button onClick={() => alert("chat description has been clicked")} className="h-20 w-full bg-white-950 p-2 button-white">This class focuses on linear algebra and its applications for the current semester of today.</button></td>

                </tr>

                <tr className="h-20 bg-white-950 border-2 border-solid divide-x-2 divide-solid">
                    <th className="w-1/4"> <button onClick={() => alert("chat title has been clicked")} className="h-20 w-full bg-white-950 button-white">System design</button></th>
                    <td className="w-3/4"><button onClick={() => alert("chat description has been clicked")} className="h-20 w-full bg-white-950 p-2 button-white">This class focuses on linear algebra and its applications for the current semester of today.</button></td>

                </tr>


            </table>
        </div>

    )

}