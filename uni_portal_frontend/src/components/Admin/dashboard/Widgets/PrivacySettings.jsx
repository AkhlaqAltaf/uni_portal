import React, { useState } from 'react';

const PrivacySettings = () => {
  const [dataPrivacy, setDataPrivacy] = useState(true); // Control Data Privacy
  const [accessControl, setAccessControl] = useState(true); // Control Access to Data
  const [auditLogs, setAuditLogs] = useState(true); // Control Audit Logs

  // Handler to toggle data privacy settings
  const handleDataPrivacyChange = () => {
    setDataPrivacy(!dataPrivacy);
  };

  // Handler to toggle access control
  const handleAccessControlChange = () => {
    setAccessControl(!accessControl);
  };

  // Handler to toggle audit logs settings
  const handleAuditLogsChange = () => {
    setAuditLogs(!auditLogs);
  };

  return (
    <div className="min-h-screen bg-[#1d2241] rounded-lg py-12">
      <div className="max-w-xl mx-auto p-8 bg-[#193344] border-2 border-[#06814f] rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-white mb-6">Privacy Settings</h2>

        <div className="space-y-8">
          {/* Data Privacy Settings */}
          <div className="flex items-center justify-between bg-[#193344] border-2 border-[#06814f] text-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <label htmlFor="dataPrivacy" className="text-xl font-medium text-white">
              Enable Data Privacy
            </label>
            <input
              type="checkbox"
              id="dataPrivacy"
              checked={dataPrivacy}
              onChange={handleDataPrivacyChange}
              className="toggle-checkbox bg-[#193344] border-2 border-[#06814f]"
            />
          </div>
          <p className="text-sm text-white">
            Enabling this will ensure user data privacy compliance (e.g., GDPR).
          </p>

          {/* Access Control */}
          <div className="flex items-center justify-between bg-[#193344] border-2 border-[#06814f] p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <label htmlFor="accessControl" className="text-xl font-medium text-white">
              Restrict Access to Sensitive Data
            </label>
            <input
              type="checkbox"
              id="accessControl"
              checked={accessControl}
              onChange={handleAccessControlChange}
              className="toggle-checkbox bg-[#193344] border-2 border-[#06814f]" 
            />
          </div>
          <p className="text-sm text-white">
            Restrict access to certain sensitive data based on user roles.
          </p>

          {/* Audit Logs */}
          <div className="flex items-center justify-between bg-[#193344] border-2 border-[#06814f] p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <label htmlFor="auditLogs" className="text-xl font-medium text-white">
              Enable Audit Logs
            </label>
            <input
              type="checkbox"
              id="auditLogs"
              checked={auditLogs}
              onChange={handleAuditLogsChange}
              className="toggle-checkbox"
            />
          </div>
          <p className="text-sm text-white">
            Track all changes to privacy-related settings and user data access.
          </p>

          {/* Save Changes Button */}
          <div className="text-right mt-6">
            <button
              onClick={() => alert('Privacy settings updated successfully!')}
              className="px-6 py-3 bg-[#193344] border-2 border-[#06814f] text-white rounded-lg shadow-md"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
