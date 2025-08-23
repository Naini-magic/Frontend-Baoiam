import React, { useEffect, useState } from "react";
import { Star, Clock3, Users, BarChart3 } from "lucide-react";

const UdaanCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/content/") // <-- your Django API
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses_section.courses); // pick courses array from API response
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading courses...</p>;
  }

  return (
    <section className="text-center px-4 py-12 bg-white">
      {/* Title & Subtitle */}
      <h2 className="text-[48px] font-semibold mb-2">
        What You’ll Learn in <span className="text-[#FF6501]">SUCCESS FUSION </span>
      </h2>
      <p className="text-[24px] max-w-3xl mx-auto mb-10">
        Each course in this program is tailored to maximize your skills within a short span — all under 90 days.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-10">
        {courses.map((course, index) => (
          <div key={index} className="w-full sm:w-[45%] md:w-[30%]">
            <div className="bg-white rounded-2xl py-2 shadow-md hover:shadow-md transition-all duration-200 w-full max-w-[350px] mx-auto">
              {/* Title + Rating */}
              <div className="flex items-center justify-between px-4 text-[24px] font-semibold">
                <div className="text-black">{course.title}</div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="#FACC15" stroke="#FACC15" />
                  <span className="text-black">{course.rating}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-3xl p-3"
                  loading="lazy"
                />
              </div>

              {/* Description & Meta */}
              <div className="p-4">
                <p className="text-justify text-[18px]">{course.description}</p>

                <div className="mt-4 flex flex-col gap-2 text-[#4E5566] p-1">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#564FFD]" />
                    <span>{course.students} students enrolled</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 p-1">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={16} className="text-[#f52d12ff]" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 size={16} className="text-[#1cc354ff]" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <button className="mt-5 w-1/2 bg-[#FF6501] text-[18px] text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UdaanCourses;
