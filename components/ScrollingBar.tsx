"use client";

export default function ScrollingBar() {
  return (
    <div className="w-full overflow-hidden bg-green-400 text-black py-2 border-t border-b border-black/30">
      <div className="flex animate-marquee w-max">
        {/* FIRST COPY */}
        <div className="flex whitespace-nowrap text-sm font-semibold">
          <span className="mx-6">
            🎓 Admissions Open 2026 at KIITech – Dr. A.P.J. Abdul Kalam
            Institute of Innovation and Technology
          </span>

          <span className="mx-6">BCA – Software Development</span>

          <span className="mx-6">
            BBA – Marketing • Finance • HR • Entrepreneurship • Business
            Analytics
          </span>

          <span className="mx-6">
            PGDM – Business Administration • Human Resources Management •
            Marketing & Finance
          </span>

          <span className="mx-6">
            Diploma – Mechanical Engineering • Electrical Engineering • Civil •
            AI/ML
          </span>

          <span className="mx-6">
            100% Placement Assistance • Modern Lab's • Expert Faculty
          </span>

          <span className="mx-6">
            📍 Majhgaon, Jharkhand | 📞 Apply Now – Limited Seats!
          </span>
        </div>

        {/* SECOND COPY (IMPORTANT for no gap) */}
        <div className="flex whitespace-nowrap text-sm font-semibold">
          <span className="mx-6">
            Admissions Open 2026 at KIITech – Dr. A.P.J. Abdul Kalam Institute
            of Innovation and Technology
          </span>

          <span className="mx-6">BCA – Software Development</span>

          <span className="mx-6">
            BBA – Marketing • Finance • HR • Entrepreneurship • Business
            Analytics
          </span>

          <span className="mx-6">
            PGDM – Business Administration • Human Resources Management •
            Marketing & Finance
          </span>

          <span className="mx-6">
            Diploma – Mechanical Engineering • Electrical Engineering • Civil •
            AI/ML
          </span>

          <span className="mx-6">
            100% Placement Assistance • Modern Lab's • Expert Faculty
          </span>

          <span className="mx-6">
            📍 Majhgaon, Jharkhand | 📞 Apply Now – Limited Seats!
          </span>
        </div>
      </div>
    </div>
  );
}
