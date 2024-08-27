import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="my-14">
      <div className="text-[14px] flex items-center justify-between gap-2 mb-14">
        <div className="text-[14px] flex items-center gap-2 font-[500]">
          <span className="text-gray-400">Home</span>
          <span>/</span>
          <span>Profile</span>
        </div>
        <span className="font-[500]">
          Welcome! <span className="text-[#DB4444]">Md Rimel</span>{" "}
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="side">
          <h3 className="font-[600] mb-4">Manage My Account</h3>
          <ul className="flex flex-col gap-1 mb-5 ml-7 text-[#000000]">
            <li className="active text-[#DB4444]">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h3 className="font-[600] mb-4">My Orders</h3>
          <ul className="flex flex-col gap-1 mb-5 ml-7 text-[#000000]">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <Link to={"/Wishlist"}>
            <h3 className="font-[600]">My WishList</h3>
          </Link>
        </div>
        <div className="content flex-1 p-12 border-[1px] border-[#F5F5F5] rounded">
          <h2 className="text-[20px] text-[#DB4444] mb-4">Edit Your Profile</h2>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full mb-6">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="first">First Name</label>
                <input
                  type="text"
                  name="first"
                  id="first"
                  placeholder="Md"
                  className="p-2 text-white bg-[#F5F5F5] w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="Last">Last Name</label>
                <input
                  type="text"
                  name="Last"
                  id="Last"
                  placeholder="Rimel"
                  className="p-2 text-white bg-[#F5F5F5] w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="rimel1111@gmail.com"
                  className="p-2 text-white bg-[#F5F5F5] w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Kingston, 5236, United State"
                  className="p-2 text-white bg-[#F5F5F5] w-full"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[16px] mb-2">Password Changes</h3>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="current"
                id="current"
                placeholder="Current Passwod"
                className="p-2 text-white bg-[#F5F5F5] w-full"
              />
              <input
                type="text"
                name="newPasswod"
                id="newPasswod"
                placeholder="New Passwod"
                className="p-2 text-white bg-[#F5F5F5] w-full"
              />
              <input
                type="text"
                name="confirm"
                id="confirm"
                placeholder="Confirm New Passwod"
                className="p-2 text-white bg-[#F5F5F5] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
