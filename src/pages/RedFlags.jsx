import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, AlertTriangle, AlertCircle, Info, Heart } from "lucide-react";

export default function RedFlags() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [selectedSeverity, setSelectedSeverity] = useState("all");

  const redFlags = [
    {
      id: "gaslighting",
      severity: "red",
      title: "Gaslighting",
      brief: "Making you question your memory and perception of reality",
      examples: [
        '"That never happened"',
        '"You\'re remembering it wrong"',
        '"You\'re too sensitive"',
        '"You\'re crazy/imagining things"'
      ],
      why_harmful: "Gaslighting erodes your confidence in your own perceptions and memory, making you dependent on the manipulator's version of reality.",
      how_to_respond: "Document incidents with dates and details. Trust your memory. Validate your own experiences."
    },
    {
      id: "love_bombing",
      severity: "red",
      title: "Love Bombing Then Withdrawal",
      brief: "Overwhelming affection followed by sudden coldness",
      examples: [
        "Excessive gifts and attention early on",
        "Suddenly becoming distant without explanation",
        "Hot and cold behavior patterns",
        "Making you work to get affection back"
      ],
      why_harmful: "Creates emotional dependence and keeps you off-balance, always trying to return to the 'good times.'",
      how_to_respond: "Notice the pattern. Healthy love is consistent, not extreme swings."
    },
    {
      id: "future_faking",
      severity: "amber",
      title: "Future Faking",
      brief: "Making promises about the future with no intention of keeping them",
      examples: [
        "Planning trips that never happen",
        "Talking about moving in together but never following through",
        "Promise to change but behaviors stay the same",
        "Grand future plans used to keep you invested"
      ],
      why_harmful: "Keeps you hoping and waiting while nothing actually changes. You invest in a future that will never come.",
      how_to_respond: "Notice the gap between words and actions. Healthy partners follow through on commitments."
    },
    {
      id: "isolation",
      severity: "red",
      title: "Isolation from Support",
      brief: "Separating you from friends, family, and support systems",
      examples: [
        '"Your friends don\'t really care about you"',
        "Creating drama whenever you see loved ones",
        "Monitoring your communications",
        "Moving you away from your support network"
      ],
      why_harmful: "Isolation makes you more dependent and removes people who might recognize abuse.",
      how_to_respond: "Maintain connections. Healthy partners support your relationships."
    },
    {
      id: "jealousy_control",
      severity: "amber",
      title: "Excessive Jealousy Disguised as Love",
      brief: "Controlling behavior masked as caring or protection",
      examples: [
        "Checking your phone constantly",
        "Accusing you of cheating without reason",
        "Getting angry when you talk to others",
        '"I\'m only jealous because I love you so much"'
      ],
      why_harmful: "Jealousy is about control, not love. It restricts your freedom and autonomy.",
      how_to_respond: "Healthy love includes trust and freedom. Jealousy this extreme is a red flag."
    },
    {
      id: "blame_shifting",
      severity: "red",
      title: "Blame Shifting",
      brief: "Making their bad behavior your fault",
      examples: [
        '"You made me do this"',
        '"If you hadn\'t... I wouldn\'t have..."',
        '"Look what you made me do"',
        "Never taking responsibility for their actions"
      ],
      why_harmful: "You end up feeling responsible for their behavior and emotions, which is never true.",
      how_to_respond: "Each person is responsible for their own actions. Period."
    },
    {
      id: "respects_boundaries",
      severity: "green",
      title: "Respects Your Boundaries",
      brief: "They honor your limits without making you feel guilty",
      examples: [
        "Accepts 'no' without pushing or sulking",
        "Doesn't pressure you to explain every boundary",
        "Apologizes genuinely if they cross a line",
        "Actively asks about your comfort levels"
      ],
      why_healthy: "Respect for boundaries shows they value your autonomy and wellbeing as much as their own desires.",
      healthy_pattern: "Notice how safe you feel saying no. In healthy relationships, boundaries strengthen trust."
    },
    {
      id: "consistent_behavior",
      severity: "green",
      title: "Consistent and Reliable",
      brief: "Their behavior is steady, not unpredictable or mood-dependent",
      examples: [
        "Treats you with kindness regardless of their mood",
        "Follows through on what they say they'll do",
        "You don't feel anxious wondering which version of them you'll get",
        "Communication is open and regular"
      ],
      why_healthy: "Consistency creates safety. You can relax and be yourself without walking on eggshells.",
      healthy_pattern: "You feel calm and secure, not constantly alert or anxious about their reactions."
    },
    {
      id: "validates_feelings",
      severity: "green",
      title: "Validates Your Feelings",
      brief: "They take your emotions seriously, even when they disagree",
      examples: [
        '"I can see why you\'d feel that way"',
        "Asks questions to understand your perspective",
        "Doesn't dismiss your concerns as 'overreacting'",
        "Makes space for your feelings alongside their own"
      ],
      why_healthy: "Validation shows emotional maturity and respect. Your feelings don't have to be convenient to be real.",
      healthy_pattern: "You feel heard and understood, even during disagreements. Conflicts feel collaborative, not combative."
    },
    {
      id: "supports_growth",
      severity: "green",
      title: "Supports Your Growth",
      brief: "They encourage your independence, goals, and friendships",
      examples: [
        "Celebrates your accomplishments genuinely",
        "Encourages you to spend time with friends",
        "Supports your career and personal goals",
        "Wants you to thrive, not just serve their needs"
      ],
      why_healthy: "Healthy love wants you to flourish. They're secure enough to cheer you on, not hold you back.",
      healthy_pattern: "You feel more yourself with them, not less. Your world expands, it doesn't shrink."
    },
    {
      id: "takes_responsibility",
      severity: "green",
      title: "Takes Responsibility",
      brief: "They own their mistakes and work to make amends",
      examples: [
        "Genuine apologies without excuses or 'but'",
        "Changes behavior after apologizing",
        "Doesn't blame you for their reactions",
        "Can admit when they're wrong"
      ],
      why_healthy: "Accountability is the foundation of trust. Real apologies include changed behavior.",
      healthy_pattern: "Conflicts lead to growth and understanding, not repeated hurt. You both learn and improve."
    },
    {
      id: "communicates_openly",
      severity: "green",
      title: "Communicates Openly",
      brief: "They're honest and direct, not manipulative or cryptic",
      examples: [
        "Tells you directly if something bothers them",
        "No mind games or expecting you to read their mind",
        "Talks through issues calmly",
        "Shares their feelings vulnerably"
      ],
      why_healthy: "Open communication builds intimacy and prevents resentment. You don't have to guess what they need.",
      healthy_pattern: "You feel like partners solving problems together, not adversaries. Communication feels safe."
    },
    {
      id: "silent_treatment",
      severity: "red",
      title: "Silent Treatment / Stonewalling",
      brief: "Withdrawing communication as punishment",
      examples: [
        "Refusing to speak to you for days",
        "Ignoring your messages or presence",
        "Acting like you don't exist",
        "Punishing you with silence"
      ],
      why_harmful: "It's emotional manipulation designed to make you desperate for their attention and willing to accept blame.",
      how_to_respond: "Healthy communication doesn't include punishment. This is control, not conflict resolution."
    },
    {
      id: "boundary_testing",
      severity: "amber",
      title: "Boundary Testing",
      brief: "Pushing or ignoring your stated boundaries",
      examples: [
        "Asking repeatedly after you've said no",
        "Showing up uninvited after you ask for space",
        "Making jokes about boundaries you've set",
        '"You\'re being too sensitive" when you assert limits'
      ],
      why_harmful: "Indicates they don't respect your autonomy and will escalate if boundaries aren't enforced.",
      how_to_respond: "Boundaries require consequences. If someone repeatedly violates them, it's a major concern."
    },
    {
      id: "triangulation",
      severity: "red",
      title: "Triangulation",
      brief: "Bringing others into conflicts to make you feel isolated",
      examples: [
        '"Everyone thinks you\'re the problem"',
        "Comparing you to others",
        "Involving third parties in your relationship",
        "Using others to validate their view"
      ],
      why_harmful: "Makes you feel ganged up on and doubting yourself even more.",
      how_to_respond: "Healthy relationships are between two people, not a crowd."
    },
    {
      id: "moving_goalposts",
      severity: "red",
      title: "Moving Goalposts",
      brief: "Changing expectations so you can never meet them",
      examples: [
        "Changing what they want after you've done it",
        "Never satisfied no matter what you do",
        "Adding new requirements constantly",
        "Making success impossible"
      ],
      why_harmful: "Keeps you in a constant state of trying to please them, never feeling good enough.",
      how_to_respond: "Notice if you can never win. That's the point—it's control."
    },
    {
      id: "emotional_blackmail",
      severity: "red",
      title: "Emotional Blackmail",
      brief: "Using guilt, fear, or obligation to control you",
      examples: [
        '"If you loved me, you would..."',
        "Threatening self-harm if you leave",
        "Using your fears against you",
        "Making you responsible for their happiness"
      ],
      why_harmful: "Manipulates your care and concern into control over your choices.",
      how_to_respond: "You're not responsible for managing their emotions or preventing their choices."
    },
    {
      id: "financial_control",
      severity: "red",
      title: "Financial Control",
      brief: "Controlling access to money and resources",
      examples: [
        "Monitoring every purchase",
        "Requiring permission to spend",
        "Hiding financial information",
        "Sabotaging your employment or education"
      ],
      why_harmful: "Creates dependence and makes leaving difficult or impossible.",
      how_to_respond: "Financial independence is crucial. Seek resources for economic empowerment."
    }
  ];

  const severities = [
    { id: "all", name: "All", color: "#1C4E47" },
    { id: "red", name: "Red Flags", color: "#C84B31", icon: AlertTriangle },
    { id: "amber", name: "Amber Flags", color: "#ECAB53", icon: AlertCircle },
    { id: "green", name: "Green Flags", color: "#2D6A4F", icon: Heart }
  ];

  const filteredFlags = redFlags.filter(flag => {
    const matchesSearch = flag.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         flag.brief.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === "all" || flag.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'red': return '#C84B31';
      case 'amber': return '#ECAB53';
      case 'green': return '#2D6A4F';
      default: return '#1C4E47';
    }
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'red': return AlertTriangle;
      case 'amber': return AlertCircle;
      case 'green': return Heart;
      default: return AlertCircle;
    }
  };

  return (
    <div className="max-w-4xl wave-rise">
      <div className="clay-card p-8 mb-6" style={{ background: "linear-gradient(145deg, rgba(118, 226, 224, 0.4), rgba(44, 172, 173, 0.3))" }}>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#1C4E47" }}>
          Relationship Patterns Guide
        </h1>
        <p className="text-lg" style={{ color: "#024D60" }}>
          Understanding different behaviors helps you recognize what's happening. Knowledge is clarity.
        </p>
      </div>

      {/* Severity Key */}
      <div className="clay-card p-6 mb-6">
        <h3 className="font-semibold mb-4" style={{ color: "#1C4E47" }}>Understanding the Levels:</h3>
        <div className="grid gap-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 mt-0.5" style={{ color: "#C84B31" }} />
            <div>
              <h4 className="font-semibold" style={{ color: "#C84B31" }}>Red Flags</h4>
              <p className="text-sm" style={{ color: "#024D60" }}>Serious concerns requiring immediate attention. These are abuse tactics.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 mt-0.5" style={{ color: "#ECAB53" }} />
            <div>
              <h4 className="font-semibold" style={{ color: "#ECAB53" }}>Amber Flags</h4>
              <p className="text-sm" style={{ color: "#024D60" }}>Warning signs that shouldn't be ignored. May escalate to red flags.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 mt-0.5" style={{ color: "#2D6A4F" }} />
            <div>
              <h4 className="font-semibold" style={{ color: "#2D6A4F" }}>Green Flags</h4>
              <p className="text-sm" style={{ color: "#024D60" }}>Healthy relationship behaviors. What respect and care actually look like.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="clay-card p-6 mb-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#1C4E47" }} />
            <input
              type="text"
              placeholder="Search patterns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="clay-input w-full pl-12 pr-4 py-4 text-lg"
              style={{ color: "#1C4E47" }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {severities.map(sev => {
              const Icon = sev.icon || AlertCircle;
              return (
                <button
                  key={sev.id}
                  onClick={() => setSelectedSeverity(sev.id)}
                  className="px-4 py-2 rounded-2xl font-medium transition-all flex items-center gap-2"
                  style={{
                    background: selectedSeverity === sev.id
                      ? `linear-gradient(145deg, ${sev.color}, ${sev.color}dd)`
                      : "rgba(217, 245, 240, 0.5)",
                    color: selectedSeverity === sev.id ? "#FFFFFF" : "#1C4E47",
                    boxShadow: selectedSeverity === sev.id
                      ? "6px 6px 12px rgba(28, 78, 71, 0.25), -3px -3px 6px rgba(255, 255, 255, 0.6)"
                      : "none"
                  }}
                >
                  {sev.icon && <Icon className="w-4 h-4" />}
                  {sev.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Flags List */}
      <div className="space-y-4">
        {filteredFlags.map((flag) => {
          const Icon = getSeverityIcon(flag.severity);
          return (
            <div key={flag.id} className="clay-card overflow-hidden">
              <button
                onClick={() => setExpandedId(expandedId === flag.id ? null : flag.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 flex-shrink-0" style={{ color: getSeverityColor(flag.severity) }} />
                      <h3 className="text-xl font-semibold" style={{ color: "#1C4E47" }}>
                        {flag.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium capitalize"
                            style={{
                              background: `${getSeverityColor(flag.severity)}22`,
                              color: getSeverityColor(flag.severity)
                            }}>
                        {flag.severity === "red" ? "Red Flag" : flag.severity === "amber" ? "Amber Flag" : "Green Flag"}
                      </span>
                    </div>
                    <p style={{ color: "#024D60" }}>{flag.brief}</p>
                  </div>
                  {expandedId === flag.id ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" style={{ color: "#1C4E47" }} />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: "#1C4E47" }} />
                  )}
                </div>
              </button>

              {expandedId === flag.id && (
                <div className="px-6 pb-6 space-y-6 wave-rise">
                  {/* Examples */}
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: "#1C4E47" }}>
                      What it looks like:
                    </h4>
                    <ul className="space-y-2">
                      {flag.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="clay-card p-3 text-sm"
                          style={{
                            background: "rgba(217, 245, 240, 0.5)",
                            color: "#024D60"
                          }}
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Harmful or Healthy */}
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: "#1C4E47" }}>
                      {flag.severity === 'green' ? 'Why this matters:' : 'Why this is harmful:'}
                    </h4>
                    <p className="leading-relaxed" style={{ color: "#024D60" }}>
                      {flag.severity === 'green' ? flag.why_healthy : flag.why_harmful}
                    </p>
                  </div>

                  {/* Response or Pattern */}
                  <div className="clay-card p-4" style={{ background: `linear-gradient(145deg, ${getSeverityColor(flag.severity)}22, ${getSeverityColor(flag.severity)}11)` }}>
                    <h4 className="font-semibold mb-2" style={{ color: "#1C4E47" }}>
                      {flag.severity === 'green' ? 'What this looks like in practice:' : 'How to respond:'}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#024D60" }}>
                      {flag.severity === 'green' ? flag.healthy_pattern : flag.how_to_respond}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredFlags.length === 0 && (
        <div className="clay-card p-12 text-center">
          <p className="text-lg" style={{ color: "#1C4E47" }}>
            No patterns found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
