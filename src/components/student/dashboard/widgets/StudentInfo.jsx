import React from "react";
// import stdpic from "../../../../assets/Student.png";

const StudentInfo = () => {
  return (
    <div className="mx-auto bg-green-600/15 rounded-xl shadow-md p-2 sm:p-6 border-[1px] border-[#048C51]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Information Section */}
        <div className="w-full ">
          {/* <h2 className="text-xl font-semibold text-white mb-4">Student Details</h2> */}
          <div className="grid  grid-cols-2 gap-0 place-items-start auto-fit text-white text-base sm:text-sm md:text-xs gap-x-2 sm:gap-x-4 ">
            <InfoItem label="Name" value="Zainab Iqbal" />
            <InfoItem label="Roll No" value="CIIT/SP22-BCS-044/ATD" />
            <InfoItem label="Father Name" value="Asif Iqbal" />
            <InfoItem label="Registered Courses" value="5" />
            <InfoItem label="Total Registered Courses" value="32" />
            <InfoItem label="Program" value="BCS" />
            <InfoItem label="Current Section" value="A" />
            <InfoItem label="Current Advisor" value="Muhammad Rafay" />
            <InfoItem label="Date of Birth" value="Jan 20, 2002" />
            <InfoItem label="CNIC" value="13503-6525555-2" />
            <InfoItem label="Thesis Title" value="NA" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#1F88D1] mt-4 text-[1vw]">
          Missing Documents / Disciplinary Case
        </p>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  // <div className="w-[100%]">
  //   <div className="flex flex-1 sm:items-center gap-2 sm:gap-3 md:gap-2 ">
  //     <div className="w-[70%] sm:w-[15vw]">

  //       <p className="text-white font-normal text-[1vw] sm:text-[1vw] md:text-[1vw]">{label} :</p>
  //     </div>
  //     <div className="inline-block md:w-[16vw] w-[100%] sm:w-[30vw]">
  //       <div className="bg-[#048C51]/35 pl-2 sm:pl-5 border-black-2">
  //         <p className="sm:text-[1.2vw] text-[0.90vw] md:text-[1vw] text-lg text-white font-normal">{value}</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <>
<table className="w-full table-auto border border-white/15 text-sm md:text-base text-[1vw]">
  <tbody className="w-50">
    <tr className="border-b border-white/15 ">
      <td className="pl-1 font-semibold whitespace-nowrap text-[1vw]">{label} :</td>
      <td className="pl-1 bg-[#048C51]/35 w-[50%]  min-w-0 text-[1vw]">{value}</td>
    </tr>
  </tbody>
</table>



  </>
);

export default StudentInfo;
