import React from 'react';

export const MissingDocuments = () => {
  const missingDocuments = [
    { sno: 1, doc: "SSC Certificate (Sanad) - B", reason: "NA", status: "Not Recovered", recoveryDate: "-" },
    { sno: 2, doc: "HSSC Certificate (Sanad) - D", reason: "NA", status: "Not Recovered", recoveryDate: "-" },
  ];

  return (
    <div className="w-full max-w-[90vw] p-[2vw] rounded-2xl">
      {/* Dashboard Title */}
      <h2 className="text-white text-[2vw] font-semibold mb-[1vw]">Dashboard</h2>

      {/* Card Container */}
      <div className="bg-[#0F3A3F] p-[2vw] rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-[1vw]">
          <h3 className="text-white text-[1.5vw] font-semibold mx-auto">
            Missing Documents Details
          </h3>
          <span className="bg-[#048C51] w-[2vw] h-[2vw] flex items-center justify-center cursor-pointer rounded-full text-black font-bold text-[1vw]">
            i
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border-2 border-green-500/15">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0A5245] text-white text-[1vw]">
                <th className="p-[0.8vw] text-center">Sno.</th>
                <th className="p-[0.8vw]">Missing Doc.</th>
                <th className="p-[0.8vw]">Missing Reason</th>
                <th className="p-[0.8vw]">Doc Status</th>
                <th className="p-[0.8vw]">Recovery Date</th>
              </tr>
            </thead>
            <tbody>
              {missingDocuments.map((item) => (
                <tr key={item.sno} className="text-white text-center text-[0.9vw]">
                  <td className="p-[0.8vw]">{item.sno}</td>
                  <td className="p-[0.8vw]">{item.doc}</td>
                  <td className="p-[0.8vw]">{item.reason}</td>
                  <td className="p-[0.8vw]">{item.status}</td>
                  <td className="p-[0.8vw]">{item.recoveryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
