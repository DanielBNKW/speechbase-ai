import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at Stripe",
      avatar: "SC",
      rating: 5,
      quote: "I used to dread presentations. My voice would go up at the end of sentences, making everything sound like a question. After 3 weeks with Speechbase, my team actually commented that I sounded 'more authoritative.' That feedback meant everything.",
      result: "Reduced uptalk by 78% in 3 weeks",
      color: "from-indigo-400 to-purple-400"
    },
    {
      name: "Marcus Johnson",
      role: "Sales Director at Salesforce",
      avatar: "MJ",
      rating: 5,
      quote: "I talk fast when I'm excited about a deal—and it was costing me clients. Speechbase's real-time haptic feedback on my Apple Watch helped me slow down during pitches. I closed 2 deals in my first month using it. ROI speaks for itself.",
      result: "40% increase in client close rate",
      color: "from-purple-400 to-pink-400"
    },
    {
      name: "Priya Patel",
      role: "Engineering Lead at Notion",
      avatar: "PP",
      rating: 5,
      quote: "English is my second language, and I was always self-conscious about how I sounded in meetings. Speechbase helped me identify when I was speaking too quietly or rushing. Now I lead standups with confidence, and my ideas actually get heard.",
      result: "Confidence score improved from 62% to 91%",
      color: "from-pink-400 to-orange-400"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real people. Real transformations.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            These aren't actors or paid endorsements. These are professionals who struggled with the same vocal challenges you face—and overcame them.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-indigo-600" size={32} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Result Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-green-700">{testimonial.result}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2,847</div>
              <p className="text-indigo-100">Active users this week</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">86%</div>
              <p className="text-indigo-100">Report improved confidence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <p className="text-indigo-100">Average rating (2,800+ reviews)</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">14 days</div>
              <p className="text-indigo-100">Average time to see results</p>
            </div>
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-2xl font-bold text-gray-400">Stripe</span>
            <span className="text-2xl font-bold text-gray-400">Salesforce</span>
            <span className="text-2xl font-bold text-gray-400">Notion</span>
            <span className="text-2xl font-bold text-gray-400">Google</span>
            <span className="text-2xl font-bold text-gray-400">Meta</span>
            <span className="text-2xl font-bold text-gray-400">Amazon</span>
          </div>
        </div>
      </div>
    </section>
  );
}