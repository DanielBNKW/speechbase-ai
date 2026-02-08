import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Less than a coffee per week. More valuable than a $200/hr coach.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            One simple plan. All features included. Cancel anytime.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg">
                <Sparkles size={16} />
                Most Popular
              </div>
            </div>

            <div className="bg-white border-2 border-indigo-600 rounded-2xl p-8 md:p-10 shadow-2xl shadow-indigo-600/10">
              {/* Price */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Speechbase Pro</h3>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">$14</span>
                  <span className="text-xl text-gray-600 mb-2">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly. Cancel anytime.</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Unlimited real-time voice analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Smartwatch integration (Apple Watch & Android)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Tone, volume, tempo & confidence analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Detailed progress analytics & reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Personalized AI coaching tips</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Multi-language support (15+ languages)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Offline mode & on-device privacy</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">Priority email support</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 group mb-4">
                Start your 7-day free trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              {/* Trust Signals */}
              <div className="text-center space-y-2 text-sm text-gray-600">
                <p>✓ No credit card required for trial</p>
                <p>✓ Cancel anytime with one click</p>
                <p>✓ 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 border border-gray-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Compare your options
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-gray-600 font-semibold mb-2">Traditional Coach</div>
                <div className="text-3xl font-bold text-gray-400 mb-2">$200</div>
                <div className="text-sm text-gray-600">per hour</div>
                <div className="mt-4 text-sm text-gray-500">
                  • Limited sessions
                  <br />• Scheduled only
                  <br />• No real-time feedback
                </div>
              </div>
              <div className="text-center md:scale-110 md:my-[-1rem]">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold mb-2 py-1 rounded-full">
                  Speechbase
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">$14</div>
                <div className="text-sm text-gray-600">per month</div>
                <div className="mt-4 text-sm text-gray-700 font-medium">
                  • Unlimited sessions
                  <br />• 24/7 availability
                  <br />• Real-time feedback
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-600 font-semibold mb-2">DIY Practice</div>
                <div className="text-3xl font-bold text-gray-400 mb-2">$0</div>
                <div className="text-sm text-gray-600">but ineffective</div>
                <div className="mt-4 text-sm text-gray-500">
                  • No feedback
                  <br />• Guesswork
                  <br />• Slow progress
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative CTAs */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-900 font-semibold mb-6">
            Still not sure? Try these first:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              Watch 2-minute demo
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              See more success stories
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              Talk to our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}