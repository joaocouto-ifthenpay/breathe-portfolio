/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const studentData = [
  {
    id: 1,
    name: "Maggie Messer",
    topic: "Punk Music in the late 20th Century",
    current: "Current",
    now: "Now working as a Project Coordinator for Assured Partners",
    link: "https://www.assuredpartners.com",
  },
  {
    id: 2,
    name: "Maggie Juengst",
    topic: "Bones and Where to Find Them",
    current: "Past",
    now: "Now assistant to Sara Juengst",
    link: "https://www.google.com",
  },
];

const Students = () => {
  return (
    <div name="students" className="w-full bg-[#274C77] text-[#E7ECEF] p-4">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto rounded-md p-4 flex flex-col justify-center w-full h-full">
        {/* Header Div */}
        <div className="pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
            Students
          </p>
          <p className="py-4">
            // These are the current and past graduate students and their
            research
          </p>
        </div>

        {/* Table */}
        {/* Name Topic Current/Past Where Are They Now? */}
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium border-[#8B8C89]">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Research Topic
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Student Status
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Where Are They Now
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map(
                      ({ id, name, topic, current, now, link }) => {
                        return (
                          <tr
                            key={id}
                            class="border-b transition duration-300 ease-in-out border-[#8B8C89] hover:bg-[#A3CEF1] hover:bg-opacity-20
                    "
                          >
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              {name}
                            </td>
                            <td class="whitespace-normal px-6 py-4">{topic}</td>
                            <td class="whitespace-normal px-6 py-4">
                              {current}
                            </td>
                            <td class="whitespace-normal px-6 py-4">
                              <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-[#A3CEF1]"
                              >
                                {now}
                              </a>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* End Table */}
      </div>
    </div>
  );
};

export default Students;
