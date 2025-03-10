import React from 'react';

const ScholarshipStatus = () => {
  const scholarshipData = [
    {
      id: 1,
      scholarship: "Haroon Rashid Scholarship",
      date: "03/10/2024",
      session: "Fall 2024",
      fee: 113000,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 113000,
      chequeNo: "CUI/ATD/SDC/FA24/2415",
      remarks: "Haroon Rashid Scholarship TF Waiver 100% Rs. 129,000",
    },
    {
      id: 2,
      scholarship: "Haroon Rashid Scholarship",
      date: "02/04/2024",
      session: "Spring 2024",
      fee: 102450,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 102450,
      chequeNo: "CUI/ATD/SDC/SP24/1887",
      remarks: "Haroon Rashid Scholarship TF Waiver 100% Rs. 102450",
    },
    {
      id: 3,
      scholarship: "Haroon Rashid Scholarship",
      date: "07/12/2023",
      session: "Fall 2023",
      fee: 96000,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 96000,
      chequeNo: "CUI/ATD/SDC/FA23/1660",
      remarks: "Haroon Rashid Scholarship 100% Tuition fee waiver (Rs. 96,000) for FA23.",
    },
    {
      id: 4,
      scholarship: "Haroon Rashid Scholarship",
      date: "07/06/2023",
      session: "Spring 2023",
      fee: 94000,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 94000,
      chequeNo: "CUI/ATD/OOD/Notif/SP23/007",
      remarks: "NULL",
    },
  ];

  return (
    <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Scholarship Awarded Information</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-[#05945626]/35 rounded-lg shadow-md">
          <thead className="bg-[#05945626]/20 text-white">
            <tr>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">S.No</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Scholarship</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Date</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Session</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Fee</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Meal</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Boarding</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Stipend</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Book Allowance</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Total</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Cheque No/Transaction No</th>
              <th className="border border-[#05945626]/35 py-1 px-2 md:py-4 md:px-2 text-[1vw]">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {scholarshipData.map((item, index) => (
              <tr
                key={item.id}
                className={`text-center ${index % 2 === 0 ? "bg-[#05945626]/10" : "bg-transparent"} hover:bg-[#05945626]/15 transition-colors`}
              >
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.id}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.scholarship}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.date}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.session}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">Rs. {item.fee}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.meal}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.boarding}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.stipend}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.bookAllowance}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">Rs. {item.total}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.chequeNo}</td>
                <td className="border border-[#05945626]/35 px-2 py-1 md:px-4 md:py-2 text-[1vw]">{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScholarshipStatus;
