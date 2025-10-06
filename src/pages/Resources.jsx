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
      color: "#1C4E47",
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
      color: "#024D60",
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
      color: "#76E2E0",
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
      color: "#2CACAD",
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
    <div className="max-w-5xl wave-rise">
      <div className="clay-card p-8 mb-6" style={{ background: "linear-gradient(145deg, rgba(118, 226, 224, 0.4), rgba(44, 172, 173, 0.3))" }}>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#1C4E47" }}>
          Crisis Resources
        </h1>
        <p className="text-lg" style={{ color: "#024D60" }}>
          You're not alone. These resources are here 24/7, confidential and free.
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="clay-card p-8 mb-8 border-2 border-red-600 shadow-2xl" style={{
        background: "linear-gradient(145deg, #DC2626, #B91C1C)",
        boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)"
      }}>
        <div className="flex items-start gap-6">
          <Shield className="w-12 h-12 text-white flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">
              🚨 In Immediate Danger?
            </h3>
            <p className="text-lg text-white mb-6 leading-relaxed font-medium">
              Call 911 or your local emergency number. Your safety is the top priority.
            </p>
            <a
              href="tel:911"
              className="inline-block px-8 py-4 rounded-2xl bg-white font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              style={{ color: "#DC2626" }}
            >
              📞 Call 911 Now
            </a>
          </div>
        </div>
      </div>

      {/* Hotlines */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1C4E47" }}>
          24/7 Hotlines
        </h2>
        <div className="grid gap-4">
          {hotlines.map((hotline) => (
            <div key={hotline.name} className="clay-card p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#1C4E47" }}>
                    {hotline.name}
                  </h3>
                  <div className="text-sm px-3 py-1 inline-block rounded-full" style={{
                    background: "rgba(217, 245, 240, 0.5)",
                    color: "#1C4E47"
                  }}>
                    Available {hotline.available}
                  </div>
                </div>
                <Phone className="w-6 h-6" style={{ color: "#2CACAD" }} />
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
                      background: "rgba(217, 245, 240, 0.5)",
                      color: "#1C4E47"
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
                    style={{ color: "#2CACAD" }}
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
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1C4E47" }}>
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
                      boxShadow: "4px 4px 8px rgba(28, 78, 71, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.5)"
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: "#1C4E47" }}>
                    {resource.category}
                  </h3>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#024D60" }}>
                  {resource.description}
                </p>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#024D60" }}>
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
      <div className="clay-card p-8 mt-8 text-center" style={{ background: "linear-gradient(145deg, rgba(118, 226, 224, 0.4), rgba(44, 172, 173, 0.3))" }}>
        <Heart className="w-12 h-12 mx-auto mb-4 tide-float" style={{ color: "#1C4E47" }} />
        <h3 className="text-xl font-semibold mb-3" style={{ color: "#1C4E47" }}>
          Reaching Out Takes Courage
        </h3>
        <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "#024D60" }}>
          These resources are staffed by trained professionals who understand.
          Your call is confidential. You don't have to have all the answers—just reach out.
        </p>
      </div>
    </div>
  );
}
