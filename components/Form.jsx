import { useState } from "react";
import Image from "next/image";
import axios from 'axios';


function generateLinkId() {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000);
  
    return `${timestamp}-${randomNumber}`;
  }

const Form = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [paymentLink, setPaymentLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  

    try {
      const response = await axios.post('/api/payment', {
        link_id: String(generateLinkId()), // Generate a unique link ID here
        customer_phone: String(mobile),
        customer_email: String(email),
        customer_name: String(name)
      });
      console.log(response.data)
  
      setPaymentLink(response.data); // Store the payment link data in state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="form" className="flex md:flex-row flex-col paddingY">
      <div className="flex-1 flex flexCenter md:my-0 my-10">
        <div>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <input
                type="text"
                placeholder="Name"
                className="text-primary font-medium text-lg pl-4 pr-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <input
                type="text"
                placeholder="Country"
                className="text-primary font-medium text-lg pl-4 pr-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary w-full"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="flex items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <input
                type="text"
                placeholder="Email"
                className="text-primary font-medium text-lg pl-4 pr-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <input
                type="text"
                placeholder="Mobile"
                className="text-primary font-medium text-lg pl-4 pr-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary w-full"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary col-span-2 mt-6 w-full bg-gray-800 text-gray-100 hover:bg-gray-700">
                Submit
                </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
