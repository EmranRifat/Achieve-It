import { useEffect, useState } from "react";

import './Home.css'
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (

    <div  className=" py-10 md:py-24 serviceImage  ">
      <div id="service"  className="max-w-screen-xl mx-auto ">
        <h3 className="md:text-4xl font-semibold text-center w-60 mx-auto border-y-4 border-indigo-500 text-white py-2">Our Services</h3>
      </div>
      <div  className="max-w-screen-xl mx-auto mt-10">
        <p className="text-center my-2 font-medium text-white">

          Know what kind of services we are offering
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-10 ">
          {services?.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              setModalInfo={setModalInfo}
            />
          ))}
        </div>

        {
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <img className="w-60" src={modalInfo.image} alt="" />
              <h3 className="font-bold text-lg mt-3">{modalInfo.name}!</h3>
              <p className="py-4">{modalInfo.description}</p>
              <div className="modal-action">
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        }
      </div>
    </div>
  );
};

export default Services;
