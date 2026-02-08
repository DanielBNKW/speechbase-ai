import { Download, Mic, TrendingUp, Award } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium mb-6">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From anxious speaker to confident communicator in 4 simple steps
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            No complicated setup. No awkward recordings. Just you, speaking naturally, with an AI coach that helps you improve in real-time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/30">
                <Download className="text-white" size={28} />
              </div>
              <div className="absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 hidden lg:block"></div>
              <div className="mb-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                Step 1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Download & Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Install Speechbase on your phone and optionally pair with your Apple Watch or Android smartwatch for discreet haptic feedback.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-600/30">
                <Mic className="text-white" size={28} />
              </div>
              <div className="absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 hidden lg:block"></div>
              <div className="mb-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Step 2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Speaking</h3>
              <p className="text-gray-600 leading-relaxed">
                Practice a presentation, take a call, or just have a conversation. Speechbase listens in the background and analyzes your voice patterns.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-600/30">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div className="absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-0.5 bg-gradient-to-r from-pink-200 to-orange-200 hidden lg:block"></div>
              <div className="mb-2 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                Step 3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Real-Time Tips</h3>
              <p className="text-gray-600 leading-relaxed">
                Feel a gentle vibration on your wrist when you speak too fast. See visual cues when your tone drops. Get coached in the moment.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-600/30">
                <Award className="text-white" size={28} />
              </div>
              <div className="mb-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Step 4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Watch Yourself Improve</h3>
              <p className="text-gray-600 leading-relaxed">
                Review your progress with detailed analytics. See your confidence score rise. Celebrate milestones as you become a better speaker.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}