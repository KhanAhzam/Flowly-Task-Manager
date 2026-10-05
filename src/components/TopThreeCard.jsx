import React from 'react'

const TopThreeCard = ({ title, members, valueKey, valueSuffix = "", subtitle }) => {
  return (
    <div className="border border-border-secondary rounded-xl shadow-lg p-6 py-8">

      <h2 className="text-xl font-semibold mb-8">
        {title}
      </h2>

      <div className="flex flex-col gap-5">
        {members.map((member, index) => (
          <div key={member.id} className="flex items-center justify-between px-4">

            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Rank */}
              <div className="w-8 h-8 rounded-full bg-success-primary text-secondary flex items-center justify-center font-semibold">
                {index + 1}
              </div>

              {/* Name */}
              <div>
                <div className="font-semibold text-lg">
                  {member.name}
                </div>
                <div className="text-sm text-text-tertiary">
                  {subtitle? subtitle(member): member.jobRole}
                </div>
              </div>

            </div>

            {/* Value */}
            <div className="font-semibold text-xl">
              {member[valueKey]}
              {valueSuffix}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default TopThreeCard