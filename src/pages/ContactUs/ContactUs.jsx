import OfficeHour from "./OfficeHours";
import UserInfo from "./UserInfo";
const ContactUs = () => {
  return (
    <div className=" h-full px-5 md:px-0 ml-5  ">
      <div className="py-20">
        <UserInfo></UserInfo>
      </div>
      <OfficeHour></OfficeHour>
    </div>
  );
};
export default ContactUs;
