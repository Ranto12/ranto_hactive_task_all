import React from "react"
class index extends React.Component{
    render(){
        return(
            <div className="h-auto m-auto  w-[300px] xl:w-[400px] bg-profil p-5 mb-5">
                <p className="font-semibold text-xl ">27 November 2017</p>
                <hr className="my-3"/>
                <p className="font-semibold text-lg">#39 JakartaJS Apriil Meetup with kumparan</p>
                <p className="font-semibold text-lg my-4">139 <span className="font-light text-lg ">went</span></p>
                <button className="bg-button h-12 w-20">View</button>
            </div>
        )
    }
}
export default index