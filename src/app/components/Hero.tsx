import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-8">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Real-time Voice Coaching in your pocket</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sound confident.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Every single time.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your personal AI voice coach that analyzes tone, tempo, and confidence in real-time—so you never wonder "Did I sound okay?" again.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 group">
              Start your 7-day free trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2 border border-gray-200">
              See app screenshots
            </button>
          </div>


        </div>

        {/* Hero Image / Demo */}

      </div>
    </section>
  );
}