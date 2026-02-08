import { 
  Mic, 
  Volume2, 
  Clock, 
  Pause, 
  TrendingUp, 
  Watch, 
  BarChart3, 
  Sparkles,
  Target,
  Shield,
  Globe,
  Zap
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Mic size={24} />,
      color: "indigo",
      title: "Tone Analysis",
      description: "Detect confidence, authority, warmth, or uncertainty in your voice. Know exactly how you're coming across.",
      benefit: "Stop second-guessing if you sounded confident enough"
    },
    {
      icon: <Volume2 size={24} />,
      color: "purple",
      title: "Volume Detection",
      description: "Get alerts when you're speaking too softly or too loud for the situation.",
      benefit: "Command the room without shouting or being ignored"
    },
    {
      icon: <Clock size={24} />,
      color: "pink",
      title: "Speech Tempo Control",
      description: "Real-time pacing feedback to help you slow down when nervous or speed up when dragging.",
      benefit: "Keep your audience engaged from start to finish"
    },
    {
      icon: <Pause size={24} />,
      color: "orange",
      title: "Pause Patterns",
      description: "Learn to use strategic pauses for emphasis instead of filling silence with 'um' and 'uh.'",
      benefit: "Sound more thoughtful and in control"
    },
    {
      icon: <TrendingUp size={24} />,
      color: "green",
      title: "Confidence Score",
      description: "Track your vocal confidence over time with a daily score based on all vocal markers.",
      benefit: "See measurable progress week after week"
    },
    {
      icon: <Watch size={24} />,
      color: "blue",
      title: "Smartwatch Integration",
      description: "Discreet haptic feedback on your wrist during meetings, calls, or presentations.",
      benefit: "Get coached without anyone noticing"
    },
    {
      icon: <BarChart3 size={24} />,
      color: "violet",
      title: "Progress Analytics",
      description: "Detailed breakdowns of your speaking patterns, improvements, and areas to focus on.",
      benefit: "Know exactly what to work on next"
    },
    {
      icon: <Sparkles size={24} />,
      color: "cyan",
      title: "Personalized Tips",
      description: "AI-generated suggestions tailored to your unique speaking style and goals.",
      benefit: "Get advice that actually works for you"
    },
    {
      icon: <Target size={24} />,
      color: "rose",
      title: "Goal Setting",
      description: "Set specific targets like 'reduce filler words by 50%' and track your journey.",
      benefit: "Stay motivated with clear milestones"
    },
    {
      icon: <Shield size={24} />,
      color: "emerald",
      title: "Privacy First",
      description: "All voice analysis happens on-device. Your conversations stay private, always.",
      benefit: "Practice freely without privacy concerns"
    },
    {
      icon: <Globe size={24} />,
      color: "amber",
      title: "Multi-Language Support",
      description: "Works with English, Spanish, French, German, and 15+ languages.",
      benefit: "Improve confidence in any language you speak"
    },
    {
      icon: <Zap size={24} />,
      color: "red",
      title: "Offline Mode",
      description: "All features work without internet. Practice anywhere, anytime.",
      benefit: "Never miss a coaching opportunity"
    }
  ];

  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-100 text-indigo-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    violet: "bg-violet-100 text-violet-600",
    cyan: "bg-cyan-100 text-cyan-600",
    rose: "bg-rose-100 text-rose-600",
    emerald: "bg-emerald-100 text-emerald-600",
    amber: "bg-amber-100 text-amber-600",
    red: "bg-red-100 text-red-600"
  };

  return (
    <section id="features" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium mb-6">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to master confident speaking
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Not just feedback. A complete vocal coaching system designed to transform how you communicate.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all group"
            >
              <div className={`w-12 h-12 ${colorMap[feature.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">{feature.description}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm font-medium text-indigo-600">
                  ✓ {feature.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to sound as confident as you actually are?
          </p>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-lg shadow-indigo-600/30">
            Try all features free for 7 days
          </button>
        </div>
      </div>
    </section>
  );
}