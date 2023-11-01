"use client"
import React, { useState } from 'react';

interface Props {
  onRoleSelect: (role: string) => void;
}

export default function TeamRolesContainer({
  roles,
  onRoleSelect
}: {
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  function handleRoleClick(role: string) {
    onRoleSelect(role);
    setSelectedRole(role);
  }
  return (
    <div className="bg-slate-50 flex justify-center gap-1 pt-10 pb-5 flex-wrap">
      {roles.map((role, index) => (
        <button
          onClick={() => handleRoleClick(role)}
          key={index}
          className={`btn btn-outline border-[#222] rounded-sm capitalize ${selectedRole === role ? 'bg-[#222] text-white' : 'text-[#222]'
            }`}        >
          {role}
        </button>
      ))}
    </div>
  );
}
