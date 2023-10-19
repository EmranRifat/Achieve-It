import { Link } from "react-router-dom";

const Digital = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-20 px-5">
      <p className="text-lg font-semibold tracking-widest text-center mt-16">
        WE ARE LOOKING FOR
      </p>
      <h1 className="mt-5 text-2xl text-center font-bold ">
        Digital Marketing Specialist.
      </h1>
      <div className="flex mx-auto w-1/2 justify-between mt-8">
        <p className="text-lg ">
          <span className="font-bold">Job Type:</span> Full-Time
        </p>
        <p className="text-lg">
          <span className="font-bold">No of Vacancy:</span> Not specify
        </p>
      </div>
      <div className="flex mx-auto w-1/2 justify-between mt-2">
        <p className="text-lg ">
          <span className="font-bold">Experience:</span> 2-3 years proven
          experience needed{" "}
        </p>
        <p className="ext-lg mr-20">
          <span className="font-bold ">Salary:</span> Negotiable
        </p>
      </div>


      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-5">
          * About the Role *
        </h3>



        <p className="text-justify">
          We are looking to hire an experienced digital Marketing specialist.
          The candidate will be responsible for creating digital marketing
          strategies, putting digital marketing &amp; sales plans into action,
          and creatively planning and executing all of the digital marketing
          campaigns, which will require strong graphics design and marketing
          skills.
        </p>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-5">
          Job Description / Responsibility:{" "}
        </h3>
        <ul className="list-disc leading-loose">
          <li>
            {" "}
            Taking care of the company&#39;s social media accounts on sites like
            Facebook (pages &amp; groups), Instagram, Google, YouTube, &amp;
            LinkedIn in order to manage digital marketing campaigns, create
            pertinent content, publish in digital channels, and regularly update
            the channels (social media, website, etc.) in order to connect with
            the company&#39;s target audience.
          </li>
          <li>
            Using Facebook advertisements Manager, all Facebook marketing
            campaigns are creatively planned and carried out. This includes a
            thorough understanding of conversion and lead advertisements as well
            as Facebook pixel for retargeting ads
          </li>
          <li>
            {" "}
            Digital media buying, planning, execution, and report generation
            assist the team in the development of the overall digital sales
            marketing strategy.
          </li>
          <li>
            To operate product inventory management, follow order placement,
            delivery product and product return procedures
          </li>
          <li>
            Sales, product delivery, product return, and inventory updates must
            be reported to the admin on a daily basis. • Analyze campaign
            performance and adjust strategies to maximize ROI.
          </li>
          <li>
            Keyword Research (AdSense, Affiliate, Service) and optimize the
            website for SEO.
          </li>
          <li>Monitor and report on website and social media analytics.</li>
          <li >
            Stay up-to-date with digital marketing trends and industry best
            practices.
          </li>
          <li >
            Collaborate with cross-functional teams to achieve marketing goals.{" "}
          </li>
          <li >
            Online customer support &amp; phone call support, online land sale
            processing achieving sales targets.
          </li>
          <li >
            Conduct research on market trends, brand audiences, competitors, and
            end-to-end consumers to drive engagements and conversions.
          </li>
          <li >
            Maintain high-quality and eye-catching content like social media
            post images, blog images, info- graphics, website banners, etc. for
            Web and social media advertisements.
          </li>
          <li >
            Social media marketing such as running ad campaigns on Facebook,
            Instagram, LinkedIn, YouTube &amp; Google ads.
          </li>
          <li >
            Budget for Digital marketing, e-commerce &amp; monthly online sales
            target to be achieved.
          </li>
          <li>
            Social media marketing such as running ad campaigns on Facebook,
            Instagram, LinkedIn, YouTube &amp; Google ads.
          </li>
          <li>
            Talk to customers on social media and answer their questions.
          </li>
          <li>
            Call customers if needed and help them out. Execute all digital
            marketing campaigns.
          </li>
          <li >
            including Facebook posting, post boosting, and responding.
          </li>
          <li >
            Product orders receive and handed over to the delivery man on time.
          </li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          * Additional Requirements :
        </h3>
        <ul className="list-disc leading-loose">
          <li>
            The applicants should have experience in the following
            area(s):Advertising &amp; Promotion, Digital Marketing, Ecommerce,
            SEO Expert
          </li>
          <li>
            Key Words Research, Facebook Boosting, Facebook Business Manager,
            Inventory Management, Google AdWords, Market Research Firms, Direct
            Selling, Marketing Service Company.
          </li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *Job Benefits: *
        </h3>
        <ul className="leading-loose list-decimal">
          <li>
            Salary: Negotiable (We will recognize your expertise and
            contributions.)
          </li>
          <li>Festival bonus: 2 times</li>
          <li>Git branch management.</li>
          <li>Tea, coffee unlimited</li>
          <li>Snacks</li>
          <li>Friday holiday per week.</li>
          <li>High job security.</li>
          <li>Good working environment.</li>
        </ul>
      </div>
      <div className="px-5">
        <h3 className="text-xl font-bold underline mb-5 mt-10">
          *How to Apply: *
        </h3>
        <ul className="list-disc leading-loose">
          <li>
            Interested candidates are invited to submit their CV with portfolio
            link &amp; online marketplace account info to
            <span className="font-bold"> [achieveitcv@gmail.com]</span>. Please
            mention &quot;Application for Digital Marketing Specialist&quot;
            in the subject line.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Link
          to={
            "https://docs.google.com/forms/d/e/1FAIpQLScjDaTeZmDh9SiaUhh_en6knJTVvH5yVRjsS7U-hnAq9oe32w/viewform?usp=sf_link"
          }
        >
          <button className="bg-sky-600 hover:bg-sky-800 text-white py-3 px-5 rounded-lg shadow-2xl mt-16 font-bold">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Digital;
