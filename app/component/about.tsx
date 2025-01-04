import AboutCard from "./aboutCard";
import CTA from "./CTA";

export default function AboutPage() {
    const data = [
        {
            h2:"Our Values",
            h3:"Innovation",
            p:"We thrive on creating unique, cutting-edge solutions to make life easier and more enjoyable.", 
        },
        {
            h2:"Our Aim",
            h3:"Integrity",
            p:"Honesty and transparency are at the core of everything we do."
        },
        {
            h2:"Our Strength",
            h3:"Community",
            p:" We believe in building a strong, supportive community that grows together."
        },
        
    ]
    return (

      <div className="min-h-screen  bg-white flex flex-col  items-center">
        {/* Header Section */}
        <header className="mb-10 py-16  bg-blue-900 w-full flex justify-center flex-col items-center text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 ">About Us</h1>
          <p className="text-lg max-w-xl leading-relaxed">
            Welcome to our platform, where creativity meets technology. Our mission is to inspire and empower individuals through innovative solutions.
          </p>
        </header>
  
        {/* Core Values Section */}
        <section className="max-w-5xl w-full text-center mb-10">
            <div className="flex flex-col md:flex-row gap-6">
          {data.map((card, index)=>(
            <AboutCard key={index} {...card}/>
          ))}
          </div>
        </section>
  
  
        {/* Call to Action Section */}
        {/* <section className="py-3 text-center text-black">
          <h2 className="text-3xl font-bold mb-6">Join Us</h2>
          <p className="text-lg max-w-xl mb-6 leading-relaxed">
            Be a part of our journey and help us create a better future. Let’s innovate, collaborate, and grow together.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-white/50 hover:text-gray-600 transition">
            Contact Us
          </button>
        </section> */}
        <section className="w-full">

          {/* Call to Action */}
      <CTA />
        </section>
</div>
      
    );
  }
  