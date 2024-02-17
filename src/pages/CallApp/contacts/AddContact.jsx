import PropTypes from "prop-types";
import contact from "../../../assets/images/contact.png";
import plus from "../../../assets/images/plus.png";
import minus from "../../../assets/images/minus.png";
import { useState } from "react";

function AddContact ( { setShowAddContact } )
{
  const [ addPhone, setAddPhone ] = useState( [] );

  const handleAddPhone = () =>
  {
    setAddPhone( [ ...addPhone, { id: addPhone.length + 1 } ] );
  };
  const handleMinusPhone = ( id ) =>
  {
    setAddPhone( addPhone.filter( ( item ) => item.id !== id ) );
  };
  return (
    <div className="pt-[10px] h-full bg-black flex flex-col justify-start items-center gap-10">
      <div className="w-full flex justify-between items-center gap-3">
        <button
          className="text-[#026ee1] active:opacity-80 transition-all duration-100 ease-in-out"
          onClick={() => setShowAddContact( false )}
        >
          Cancel
        </button>
        <h3>New Contact</h3>
        <button
          className="text-[#026ee1] font-bold active:opacity-80 transition-all duration-100 ease-in-out"
          onClick={() => setShowAddContact( false )}
        >
          Done
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-10">
        <img src={contact} alt="contact image" className="w-[150px]" />
        <button className="text-[#026ee1] text-sm">Edit</button>
      </div>
      <div>
        <input
          type="text"
          className="bg-[#2c2c2e] w-full h-[40px] border-none outline-none px-3 text-white"
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-[#2c2c2e] w-full h-[40px] border-none outline-none px-3 text-white"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="bg-[#2c2c2e] w-full h-[40px] border-none outline-none px-3 text-white"
          placeholder="Company"
        />
      </div>
      <div className="w-full bg-[#2c2c2e] py-1 px-2 h-fit flex flex-col justify-start items-center gap-2">
        {addPhone.map( ( item ) => (
          <div
            key={item.id}
            className="w-full flex justify-start items-center gap-1 h-fit"
          >
            <button onClick={() => handleMinusPhone( item.id )}>
              <img src={minus} alt="minus" className="w-[40px]" />
            </button>
            <h3 className="text-[#007aff] text-sm">mobile</h3>
            <i className="fa-solid fa-chevron-right ml-0.5 text-[10px] text-[#a7a7a7]"></i>
            <input
              type="number"
              className="bg-transparent w-full h-[40px] ml-2 border-l border-l-[#1bc47d] outline-none px-3 text-white"
              placeholder="Phone"
            />
          </div>
        ) )}
        <div
          className="w-full h-fit flex justify-start items-center gap-1"
          onClick={handleAddPhone}
        >
          <button>
            <img src={plus} alt="add" />
          </button>
          <h3 className=" text-sm">add phone</h3>
        </div>
      </div>
    </div>
  );
}

AddContact.propTypes = {
  setShowAddContact: PropTypes.func.isRequired,
};

export default AddContact;
