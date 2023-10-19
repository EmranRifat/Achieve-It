import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const [service, setService] = useState([]);
  const [features, setFeatures] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    if (service) {
      const { Feature } = service;
      setFeatures(Feature);
    }
  }, [service]);


  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const foundService = data.find((item) => item.id === id);
        setService(foundService);
      });
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto container my-28 px-10">
      <div className="flex flex-wrap  gap-20 item-center justify-center">
        <div className=" w-full px-5 md:w-1/4 md:px-0">
          <img className="w-full object-cover" src={service.image} alt="" />
        </div>
        <div className=" w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-8">🔗{service.name} ✅</h1>
          <p className="text-justify">{service.description}</p>
          <div className="divider"></div>
          <div>
            <ul className="list-disc text-lg ml-5 ">
            {
              features && features.map((item,index)=>{
              return <li key={index}>{item}</li>
              })}
         </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
