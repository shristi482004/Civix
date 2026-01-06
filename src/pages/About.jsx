const About = () => {
  return (
    <div className="grid-bg">
      <section className="mx-auto max-w-5xl px-6 py-28">
        <p className="text-xs uppercase tracking-widest text-teal-600">
          About Civix
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-tight text-gray-900">
          Built for the places
          <br />
          people stop noticing.
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-600">
          <p>
            Civix exists because most civic problems don’t start big —
            they start ignored.
          </p>

          <p>
            A pothole that becomes routine. A broken light people walk around.
            Overflowing bins that everyone learns to tolerate.
          </p>

          <p>
            Civix turns these “normal inconveniences” into visible public
            records — time-stamped, location-based, and impossible to dismiss.
          </p>

          <p>
            This platform isn’t about virality. It’s about memory.
            A shared civic ledger that says: this happened, here, and it matters.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
