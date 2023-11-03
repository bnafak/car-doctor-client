import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect (() =>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    }, [])

    return (
        <div className="text-center m-5">
            <h2 className="text-3xl text-orange-600">Our Services</h2>
            <h1 className="text-5xl">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service ={service}
                    ></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;