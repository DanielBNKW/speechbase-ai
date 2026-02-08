import { AlertCircle, MessageCircle, Users, TrendingDown } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your words are perfect.
            <br />
            But how you say them? That's the problem.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            You've prepared what to say. You know your stuff. But in the moment—during that presentation, interview, or pitch—something feels off.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingDown className="text-red-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">You sound unsure</h3>
            <p className="text-sm text-gray-600">
              Too many "ums," awkward pauses, or that creeping voice at the end of sentences that makes everything sound like a question.
            </p>
          </div>

          <div className="p-6 bg-orange-50 border border-orange-100 rounded-xl">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="text-orange-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">You talk too fast</h3>
            <p className="text-sm text-gray-600">
              Nerves kick in, and suddenly you're rushing through your ideas—people can't keep up, and you lose their attention.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle className="text-yellow-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No one tells you</h3>
            <p className="text-sm text-gray-600">
              Your team won't say it. Your manager won't either. But you can feel it—and it's holding you back from that promotion or deal.
            </p>
          </div>

          <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Practice isn't enough</h3>
            <p className="text-sm text-gray-600">
              Recording yourself feels weird. Coaches are expensive. You need real-time feedback when it actually matters.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}