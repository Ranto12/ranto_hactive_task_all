import React from "react";
import { Ranto } from "../../../assets";

class index extends React.Component {
  render() {
    return (
      <div className="px-10 pt-20 w-full  ">
        <div className="bg-profil h-[250px] w-full flex rounded-xl">
          <div className="w-[300px] h-full ">
            <div className=" h-3/4 m-10  bg-card-mage  overflow-hidden  ">
              <img src={Ranto} alt="image" className="items-center " />
            </div>
          </div>
          <div className=" min-h-full flex items-center ">
              <div className="md:text-xl lg:text-2xl  font-normal m-10  ">
                <p className="block mb-4 font-bold">Hacktiv8 Meetup </p>
                <p className="block mb-4">Location       :Jakarta, Indonesia</p>
                <p className="block mb-4">Members        :1,078</p>
                <p className="block mb-4">Organizers     :Andy Wiranata</p>
                <button className="w-[100px] bg-button h-14 text-white ">Join us</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;