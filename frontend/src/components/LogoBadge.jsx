import React from "react";

export default function LogoBadge({ size = 50 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="#2A2208" stroke="#C99A0F" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#C99A0F" strokeWidth="1" strokeDasharray="3 3" />
      <text x="50" y="26" textAnchor="middle" fontSize="8" fill="#C99A0F" fontFamily="serif">
        ★ ★ ★ ★ ★
      </text>
      {/* Barbell */}
      <rect x="8"  y="47" width="24" height="5" rx="1" fill="#C99A0F" />
      <rect x="68" y="47" width="24" height="5" rx="1" fill="#C99A0F" />
      <rect x="8"  y="43" width="6"  height="13" rx="1" fill="#999" />
      <rect x="15" y="44" width="5"  height="11" rx="1" fill="#bbb" />
      <rect x="86" y="43" width="6"  height="13" rx="1" fill="#999" />
      <rect x="80" y="44" width="5"  height="11" rx="1" fill="#bbb" />
      {/* Figure */}
      <ellipse cx="50" cy="50" rx="13" ry="16" fill="#ddd" />
      <ellipse cx="50" cy="31" rx="7"  ry="8"  fill="#e8e8e8" />
      <ellipse cx="35" cy="51" rx="5"  ry="9"  fill="#ccc" transform="rotate(-18 35 51)" />
      <ellipse cx="65" cy="51" rx="5"  ry="9"  fill="#ccc" transform="rotate(18 65 51)" />
      <rect x="38" y="57" width="24" height="5" rx="1" fill="#C99A0F" />
      {/* Banner */}
      <path d="M16 68 Q50 76 84 68 L86 80 Q50 90 14 80 Z" fill="#C99A0F" />
      <text x="50" y="78" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="7" fontWeight="900" fill="#050505">
        EST. 2023
      </text>
      <rect x="16" y="59" width="68" height="11" rx="1.5" fill="#111" />
      <text x="50" y="68" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white" letterSpacing="1">
        FITNESS
      </text>
    </svg>
  );
}
