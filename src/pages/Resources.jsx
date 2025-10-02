import React from "react";
import { Phone, Globe, Shield, Heart, MessageCircle, Book } from "lucide-react";

export default function Resources() {
  const hotlines = [
    {
      name: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      text: "Text START to 88788",
      available: "24/7",
      website: "https://www.thehotline.org"
    },
    {
      name: "National Sexual Assault Hotline",
      phone: "1-800-656-4673",
      available: "24/7",
      website: "https://www.rainn.org"
    },
    {
      name: "Crisis Text Line",
      text: "Text HELLO to 741741",
      available: "24/7",
      website: "https://www.crisistextline.org"
    },
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      available: "24/7",
      website: "https://988lifeline.org"
    }
  ];

  const resources = [
    {
      category: "Immediate Safety",
      icon: Shield,
      color: "#E8A89A",
      description: "If you're in immediate danger, prioritize your safety first. Consider these steps:",
      items: [
        "Contact emergency services (911) if you're in immediate danger",
        "Create and practice a safety plan with escape routes and safe places",
        "Keep copies of important documents in a secure, accessible location",
        "Confide in trusted friends or family members who can support you"
      ]
    },
    {
      category: "Legal Support",
      icon: Book,
      color: "#6B8268",
      description: "Legal resources can help protect you and understand your rights:",
      items: [
        "Seek free or low-cost legal aid services in your area",
        "Learn about protection orders and restraining orders",
        "Explore custody, divorce, and separation resources",
        "Find immigration-related legal assistance if needed"
      ]
    },
    {
      category: "Emotional Support",
      icon: Heart,
      color: "#C8D5B9",
      description: "You don't have to go through this alone. Support is available:",
      items: [
        "Join local or virtual support groups for shared experiences",
        "Connect with moderated online communities for safe discussions",
        "Consider individual or group therapy with a trained professional",
        "Explore recovery programs designed for healing and growth"
      ]
    },
    {
      category: "Practical Assistance",
      icon: Globe,
      color: "#F5E6D3",
      description: "Financial and practical support can help you regain independence:",
      items: [
        "Apply for emergency financial assistance programs",
        "Research temporary or permanent housing support options",
        "Enroll in job training or career development programs",
        "Access childcare resources and family support services"
      ]
    }
  ];

  return (
    <div className="max-w-5xl lily-bloom">
      <div className="clay-card p-8 mb-6">
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#6B8268" }}>
          Crisis Resources
        </h1>
        <p className="text-lg" style={{ color: "#A8B5A0" }}>
          You're not alone. These resources are here 24/7, confidential and free.
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="clay-card p-6 mb-8" style={{ background: "linear-gradient(145deg, #E8A89A, #E8A89Add)" }}>
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-white flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              In Immediate Danger?
            </h3>
            <p className="text-white mb-4">
              Call 911 or your local emergency number. Your safety is the top priority.
            </p>
            <a
              href="tel:911"
              className="inline-block px-6 py-3 rounded-2xl bg-white font-medium"
              style={{ color: "#E8A89A" }}
            >
              Call 911
            </a>
          </div>
        </div>
      </div>

      {/* Hotlines */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#6B8268" }}>
          24/7 Hotlines
        </h2>
        <div className="grid gap-4">
          {hotlines.map((hotline) => (
            <div key={hotline.name} className="clay-card p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#6B8268" }}>
                    {hotline.name}
                  </h3>
                  <div className="text-sm px-3 py-1 inline-block rounded-full" style={{
                    background: "rgba(200, 213, 185, 0.3)",
                    color: "#6B8268"
                  }}>
                    Available {hotline.available}
                  </div>
                </div>
                <Phone className="w-6 h-6" style={{ color: "#C8D5B9" }} />
              </div>

              <div className="space-y-3">
                {hotline.phone && (
                  <a
                    href={`tel:${hotline.phone}`}
                    className="clay-button block py-3 px-6 text-center text-white font-medium"
                  >
                    Call: {hotline.phone}
                  </a>
                )}
                {hotline.text && (
                  <a
                    href={`sms:${hotline.text.split(' ').pop()}`}
                    className="block py-3 px-6 text-center rounded-2xl font-medium transition-all"
                    style={{
                      background: "rgba(200, 213, 185, 0.2)",
                      color: "#6B8268"
                    }}
                  >
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    {hotline.text}
                  </a>
                )}
                {hotline.website && (
                  <a
                    href={hotline.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-center text-sm"
                    style={{ color: "#A8B5A0" }}
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#6B8268" }}>
          Additional Support
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.category} className="clay-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(145deg, ${resource.color}, ${resource.color}dd)`,
                      boxShadow: "4px 4px 8px rgba(107, 130, 104, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.5)"
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: "#6B8268" }}>
                    {resource.category}
                  </h3>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#7CB342" }}>
                  {resource.description}
                </p>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#A8B5A0" }}>
                      <span className="mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supportive Message */}
      <div className="clay-card p-8 mt-8 text-center" style={{ background: "linear-gradient(145deg, #F4E8E9, #D4E4E8)" }}>
        <Heart className="w-12 h-12 mx-auto mb-4 lily-float" style={{ color: "#6B8268" }} />
        <h3 className="text-xl font-semibold mb-3" style={{ color: "#6B8268" }}>
          Reaching Out Takes Courage
        </h3>
        <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "#A8B5A0" }}>
          These resources are staffed by trained professionals who understand.
          Your call is confidential. You don't have to have all the answers—just reach out.
        </p>
      </div>
    </div>
  );
}
