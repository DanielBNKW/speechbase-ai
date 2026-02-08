import { Smartphone, Watch, Zap, Brain } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium mb-6">
            The Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet your AI voice coach that's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              always listening, never judging
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Speechbase analyzes your voice in real-time and gives you instant, actionable feedback—right when you need it most. On your phone. On your wrist. Everywhere that matters.
          </p>
        </div>

        {/* Main Product Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Real-time analysis. Instant feedback. Zero judgment.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Speechbase uses advanced AI to listen to your tone, volume, speech tempo, pauses, and confidence markers. It's like having a professional speaking coach in your pocket—except it costs $14/month, not $200/hour.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">AI-powered analysis</h4>
                  <p className="text-gray-600 text-sm">
                    Detects over 40+ vocal patterns including filler words, uptalk, pace variations, and confidence markers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instant feedback</h4>
                  <p className="text-gray-600 text-sm">
                    Get real-time suggestions through gentle haptic nudges on your smartwatch or visual cues on your phone
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Watch className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Works on your wrist</h4>
                  <p className="text-gray-600 text-sm">
                    Seamless smartwatch integration means you get discreet coaching during meetings, calls, and presentations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                {/* Phone Mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-indigo-600" size={24} />
                    <span className="font-semibold text-gray-900">Live Session</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-sm text-gray-900">Tone: Confident</span>
                      <span className="text-sm font-semibold text-green-600">95%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <span className="text-sm text-gray-900">Speech Tempo</span>
                      <span className="text-sm font-semibold text-yellow-600">Slow down</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <span className="text-sm text-gray-900">Pauses</span>
                      <span className="text-sm font-semibold text-indigo-600">Perfect</span>
                    </div>
                  </div>
                </div>

                {/* Watch Indicator */}
                <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4">
                  <Watch className="text-purple-600" size={32} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Connected to Apple Watch</p>
                    <p className="text-xs text-gray-600">Real-time haptic feedback active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}