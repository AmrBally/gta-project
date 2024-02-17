import "./contacts.css";
import PropTypes from "prop-types";
import Contact from "../../../assets/images/contact.png";
import sms from "../../../assets/images/sms.png";
import call from "../../../assets/images/call.png";
import facetime from "../../../assets/images/facetime.png";
import ChevronLeft from "../../../assets/images/chevron.left.png";

function ContactProfile ( { contact, setShowContact } )
{

    return (
        <div className=" h-full bg-black flex flex-col justify-start items-center gap-5">
            <div className="flex justify-start items-start gap-3 w-full" onClick={() => setShowContact( false )}>
                <img src={ChevronLeft} alt="" />
                <p className="text-[#007aff]">Search</p>
            </div>
            <div className="contact-info flex flex-col justify-center items-center gap-7">
                <div className="contact-details flex flex-col justify-center items-center gap-3">
                    <div className="contact-img">
                        <img src={Contact} alt={contact.name} />
                    </div>
                    <div className="contact-name text-center">
                        <h1 className="text-2xl">
                            {contact?.name}
                        </h1>
                    </div>
                </div>
                <div className="contact-actions flex justify-center items-center gap-3">
                    <div className="flex flex-col justify-center items-center bg-[#2c2c2e] h-[58px] w-[65px] rounded-[10px]">
                        <img src={sms} alt="" />
                        <h3 className="text-sm text-[#007aff]">message</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#2c2c2e] h-[58px] w-[65px] rounded-[10px]">
                        <img src={call} alt="" />
                        <h3 className="text-sm text-[#007aff]">call</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#2c2c2e] h-[58px] w-[65px] rounded-[10px]">
                        <img src={facetime} alt="" />
                        <h3 className="text-sm text-[#007aff]">facetime</h3>
                    </div>
                </div>
            </div>
            <div className="contact-numbers w-full bg-[#2c2c2e] h-[20%] rounded-[10px] flex flex-col justify-center items-start gap-5 px-5">
                <div className="flex flex-col justify-start items-start gap-1">
                    <h3 className="text-sm font-light">mobile</h3>
                    <p className="text-[#007aff]">{contact?.mobile}</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <h3 className="text-sm font-light">home</h3>
                    <p className="text-[#007aff]">{contact?.home}</p>
                </div>
            </div>
        </div>
    );
}

ContactProfile.propTypes = {
    contact: PropTypes.object.isRequired,
    setShowContact: PropTypes.func.isRequired
};

export default ContactProfile;