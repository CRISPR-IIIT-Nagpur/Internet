import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";

const ContributePYQ = () => {
  const [courseCode, setCourseCode] = useState("");
  const [year, setYear] = useState("");
  const [examType, setExamType] = useState("S1");
  const [semester, setSemester] = useState("1");
  const [contributor, setContributor] = useState("");
  const [pdf,setPdf] = useState();
  const [submitted, setSubmitted] = useState(false);
  /*const [data, setData]= useState({
    courseCode: "CSL101",
    year: 2022-23,
    examType: 'ES',
    semester: '1',
    contributor: 'BT23CSE178',
    pdf: ''
  })*/
  
  /*const handleChange= (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      
    })
  }*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata= new FormData()
    formdata.append('courseCode', courseCode)
    formdata.append('year', year)
    formdata.append('examType', examType)
    formdata.append('contributor', contributor)
    formdata.append('semester', semester)
    formdata.append('pdf', pdf)

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };


  try {

    const response= await axios.post("http://localhost:3001/uploads", formdata, config)
    console.log(response.data)

    }
   catch(error) {
       
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error);
    };
    
    setSubmitted(true);
  };

  const handleCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }

  const handleExamTypeChange = (e) => {
    setExamType(e.target.value);
  }

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  }

  const handleContributorChange = (e) => {
    setContributor(e.target.value);
  }

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]);
  }

  return (
    <>
        <div className="grid grid-cols-[minmax(20%,20%)_auto] h-screen overflow-y-hidden">
        <div className="top-0 left-0 m-0 flex flex-col bg-black text-white shadow-lg w-16 h-lvh">
      <Link to="/dashboard">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/crispr.png')} className="h-10 w-10" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Home</span>
      </div>
      </Link>
      <Link to="/registerNetworkComplaint">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/network.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Register Network Complaint</span>
      </div>
      </Link>
      <Link to="/registerMaintenanceComplaint">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/hostel.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Hostel Complaints</span>
      </div>
      </Link>
      <Link to="/trackComplaint">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/track.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Track Complaints</span>
      </div>
      </Link>
      <Link to="/unblock">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/unblock.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Unblock Website</span>
      </div>
      </Link>
      <Link to="/reportMischief">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/report.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Report Mischief</span>
      </div>
      </Link>
      <Link to="/lostAndFound">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/lost.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Lost and Found</span>
      </div>
      </Link>
      <Link to="/reportFriend">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/help.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Report a Friend in Distress</span>
      </div>
      </Link>
      <Link to="/reportSelf">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/mental.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Request Mental Health Assistance</span>
      </div>
      </Link>
      <Link to="/contributePYQ">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-10 w-10 mt-2 mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/pyq.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Contribute PYQ</span>
      </div>
      </Link>
      <Link to="/" className="mt-auto">
      <div className="group grid">
      <div className="relative flex items-center justify-center h-12 w-12  mb-2 mx-auto shadow-lg bg-white hover:bg-green-500 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"><img src={require('../assets/logout.png')} className="h-6 w-6" alt="logo"/></div>
      <span className="absolute w-auto p-2 my-2 min-w-max left-20 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Log Out</span>
      </div>
      </Link>
    </div>
      <section className="bg-white py-10 text-gray-800 h-full overflow-y-auto no-scrollbar">
        <div className="bg-white flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row mr-10">
          <div className="grid row-auto col-1">
          <div className="max-w-2xl px-4 lg:pr-24">
            <p className="mb-2 text-blue-600">Hostel Complaint Resolution</p>
            <h3 className="mb-5 text-3xl font-semibold">Contribute PYQs</h3>
            <p className="text-[18px] mb-10 text-md text-gray-600">
            Past year questions (PYQs) are gold for exam prep, but finding them can be a struggle. Be the hero your study buddies need by contributing PYQs to our platform! It's a breeze – just submit the questions, subject, and year. Together, we can build a massive PYQ library that helps everyone ace their exams. So join the movement, share your knowledge, and dominate that next test!
            </p>
            <div className="mb-5 flex font-medium">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div className="">
                <p className="mb-2">Rapid Review</p>
                <span className="font-normal text-gray-600">
                  We understand the importance of your request and are committed
                  to reviewing it promptly. We appreciate your patience.
                </span>
              </div>
            </div>
          </div>
          {/* <table class="divide-y divide-slate-300 mx-5">
                    <thead class="bg-black sticky top-0">
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Course code</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Year</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Semester</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Exam</th>
                        <th scope="col" class="py-3.5 pr-4 text-right text-sm font-semibold text-white sm:pr-6">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">CS101</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">2020</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Semester 1</td>
                        <td class="pl-4 pr-3 py-3 text-sm font-medium text-gray-900 sm:pl-6">Sessional 1</td>
                        <td class="pr-4 py-3 text-right text-sm font-medium text-gray-900 sm:pr-6">
                            <button
                                className="inline-block cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                type="submit"
                            >
                                Delete
                            </button>
                        </td>
                        </tr>

                    </tbody>
                  </table> */}
          </div>
          <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
            <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
              <h3 className="mb-1 inline-block text-3xl font-medium">
                <span className="mr-4">Submit Request</span>
              </h3>
              <p className="text-gray-600">
                Submit a PYQ (Previous Year Question) paper to help your peers and juniors. Please make sure the uploaded PYQ is not already present on the server.
              </p>
            </div>
            <div className="p-4 sm:p-8">
              <form onSubmit={handleSubmit}>
              <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Course Code
                  </label>
                  <input
                    name= "courseCode"
                    type="text"
                    value={courseCode}
                    onChange={handleCourseCodeChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Course Code"
                    required/>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Year
                  </label>
                  <input
                    name= "year"
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Year"
                    required/>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Exam Type
                  </label>
                  <select
                    type= "text"
                    name= "examType"
                    value={examType}
                    onChange={handleExamTypeChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="S1">Sessional 1</option>
                    <option value="S2">Sessional 2</option>
                    <option value="ES">End Sem</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Semester
                  </label>
                  <select
                    name= "semester"
                    value={semester}
                    onChange={handleSemesterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                    <option value="5">Semester 5</option>
                    <option value="6">Semester 6</option>
                    <option value="7">Semester 7</option>
                    <option value="8">Semester 8</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Upload PDF
                  </label>
                  <input name= "pdf" type="file" accept=".pdf" onChange={handlePdfChange}/>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600">
                    Contributed by
                  </label>
                  <input
                    type="text"
                    name= "contributor"
                    value={contributor}
                    onChange={handleContributorChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your Name"
                    required/>
                </div>
                <div className="flex justify-center">
                  {/* <button
                    className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Add
                  </button> */}
                  {/* &nbsp;&nbsp;&nbsp; */}
                  <button
                    className="inline-block w-40 cursor-pointer select-none rounded-md border border-black bg-black py-2 px-5 text-center align-middle text-xs text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {submitted && (
                <div className="mt-4 text-green-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Request submitted</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContributePYQ;