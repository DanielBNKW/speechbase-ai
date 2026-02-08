import React from 'react';

export default function BottomCTA() {
    return (
        <section className="py-20 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-3xl font-bold mb-4">
                            It's not about perfection. It's about progress.
                        </h3>
                        <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
                            Every great speaker started somewhere. With Speechbase, you'll get the feedback you need to improve—without the fear of judgment, without the high cost of coaching, and without waiting until "someday."
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors font-semibold shadow-lg">
                                Start improving today
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition-colors font-semibold border border-indigo-500">
                                See it in action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
