export default function Features() {
  const features = [
    {
      icon: "💬",
      title: "AI Chat Interface",
      description: "Intuitive conversational AI that understands your creative vision and brings it to life instantly."
    },
    {
      icon: "🎨",
      title: "Image Generation",
      description: "Create stunning visuals, artwork, and designs with state-of-the-art AI image generation models."
    },
    {
      icon: "🎵",
      title: "Music Creation",
      description: "Compose original music, beats, and soundscapes across any genre with AI-powered audio generation."
    },
    {
      icon: "🎬",
      title: "Video Production",
      description: "Generate dynamic videos, animations, and visual content for any purpose or platform."
    },
    {
      icon: "💻",
      title: "Code Generation",
      description: "Write, debug, and optimize code in any programming language with intelligent AI assistance."
    },
    {
      icon: "📝",
      title: "Text & Content",
      description: "Create compelling copy, articles, scripts, and any written content with advanced language models."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unlimited Creative Power
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of content creation with our comprehensive AI toolkit. 
            No restrictions, no limits, just pure creative freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Epic Tech AI?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-purple-400 font-semibold mb-2">No Content Restrictions</div>
                <div className="text-gray-300 text-sm">Create anything you can imagine without artificial limitations</div>
              </div>
              <div>
                <div className="text-pink-400 font-semibold mb-2">Lightning Fast</div>
                <div className="text-gray-300 text-sm">Get results in seconds, not minutes or hours</div>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold mb-2">Professional Quality</div>
                <div className="text-gray-300 text-sm">Enterprise-grade AI models for commercial use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}