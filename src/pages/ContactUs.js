import { useState } from "react";
import contactImage from "../assets/contact.webp"
const ContactUs = () => {
    const [contactData,setContactData] = useState({
        email:"",
        message:""
    });
    function changeHandler(e){
        setContactData({...contactData,[e.target.name]:e.target.value})
    }
    return(
        <div className="flex bg-yellow-100 mx-auto w-[800px] h-[340px]  mt-10">
            <div className="w-[330px] h-[330px]">
                <img src={contactImage} alt="contact" loading="lazy" className="w-[310px] h-[310px] rounded-tr-[44px] rounded-bl-[44px] mt-4 ml-4 mb-5"/>
            </div>
            <div >
                  <p className="mt-5 ml-10 text-3xl font-semibold text-blue-900">Contact Us</p>
                  <hr className="mt-1 w-44 bg-slate-500 h-[2px] ml-10"></hr>
                  <div>
                    <form>
                       <input
                       required
                       type="email"
                       name="email"
                       onChange={changeHandler}
                       value={contactData.email}
                       placeholder="Email"
                       className="border border-slate-500 ml-10 mt-3 bg-transparent text-lg font-medium outline-none rounded-md px-2 py-1"
                       />                  
                       <textarea
                       required
                       type="text"
                       name="message"
                       onChange={changeHandler}
                       value={contactData.message}
                       placeholder="Message"
                       className="w-[235px] border border-slate-500 ml-10 mt-3 bg-transparent text-lg font-medium outline-none rounded-md px-2 py-1"
                       />
                       
                       <button className="">Submit</button>
                    </form>
                  </div>
            </div>

        </div>
    );
}
export default ContactUs;