import React from "react";

class index extends React.Component {
  render() {
    return (
      <div className="mx-10  ">
        <div className="flex justify-between mr-10">
        <p className="font-bold text-xl mt-5 mb-4">Member</p>
        <p className="font-bold text-xl mt-5 mb-4">See all</p>
        </div>
      <div className="bg-profil h-32 mx-10">
        <div className="w-[300px]  h-full flex justify-between items-center p-10 md:flex ">
          <p className="h-16 bg-button rounded-full w-16  "></p>
          <p className="font-semibold text-lg">
            Organiser
            <br />
            <span className="text-base">Ardi Wira nata</span>
          </p>
          <p className="font-semibold text-lg ">4 Others</p>
        </div>
      </div>
      </div>
    );
  }
}

export default index