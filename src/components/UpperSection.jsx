function UpperSection() {
  return (
    <>
      <div className=" flex-row hidden sm:flex mt-8">
        <img
          src="1.png"
          className="w-fit sm:w-[40vmax] md:w-[33vmax] lg:w-[30vmax] transition-all"
        />
        <div>
          <p className="font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="list-disc pl-10 py-6">
            <li>
              C.R.I.&apos;s energy efficient products are well recognized by
              various Government Institutions, as trustworthy products for
              various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="2.png" />
          <p className="mt-6">
            Government of India has awarded the{" "}
            <span className="font-bold">
              &ldquo;National Energy Conservation Award 2018&rdquo;
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      {/* small size */}
      <div className="display sm:hidden">
        <div className="flex flex-row items-center mt-6">
          <img src="1.png" className="w-[8rem]" />
          <div>
            <p className="font-bold">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
          </div>
        </div>
        <ul className="list-disc pl-10 my-4">
          <li>
            C.R.I.&apos;s energy efficient products are well recognized by
            various Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <div>
          <img src="2.png" />
          <p className="mt-6">
            Government of India has awarded the{" "}
            <span className="font-semibold">
              &ldquo;National Energy Conservation Award 2018&rdquo;
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </>
  );
}

export default UpperSection;
