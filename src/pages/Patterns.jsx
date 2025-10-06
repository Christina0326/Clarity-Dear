import React, { useState, useEffect } from "react";
import { JournalEntry, CheckIn } from "@/entities/all";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Calendar, AlertTriangle, TrendingDown, Clock } from "lucide-react";

export default function Patterns() {
  const [entries, setEntries] = useState([]);
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const journalData = await JournalEntry.list("-created_date");
    const checkInData = await CheckIn.list("-created_date");
    setEntries(journalData);
    setCheckIns(checkInData);
    setLoading(false);
  };

  // Trust over time
  const trustData = checkIns.map(c => ({
    date: new Date(c.created_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    trust: c.self_trust_level,
    fullDate: c.created_date
  })).reverse();

  // Incident frequency by month
  const entryFrequency = entries.reduce((acc, entry) => {
    const month = new Date(entry.created_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const frequencyData = Object.entries(entryFrequency).map(([month, count]) => ({
    month,
    incidents: count
  }));

  // Reality questioned count
  const realityQuestioned = checkIns.filter(c => c.questioned_reality_today).length;
  const excusesMade = checkIns.filter(c => c.made_excuses_for_them).length;
  const feltLikeSelf = checkIns.filter(c => c.felt_like_yourself).length;

  // Severity distribution
  const severityCounts = entries.reduce((acc, entry) => {
    acc[entry.severity] = (acc[entry.severity] || 0) + 1;
    return acc;
  }, {});

  const pieData = [
    { name: 'Mild', value: severityCounts.mild || 0, color: '#A5D6A7' },
    { name: 'Moderate', value: severityCounts.moderate || 0, color: '#FFD54F' },
    { name: 'Severe', value: severityCounts.severe || 0, color: '#FF8A80' }
  ];

  // Repeated patterns
  const repeatedPatterns = entries.filter(e => e.has_happened_before).length;
  const repeatPercentage = entries.length > 0 ? Math.round((repeatedPatterns / entries.length) * 100) : 0;

  // Emotional patterns
  const allEmotions = entries.flatMap(e => e.how_i_felt || []);
  const emotionCounts = allEmotions.reduce((acc, emotion) => {
    acc[emotion] = (acc[emotion] || 0) + 1;
    return acc;
  }, {});
  const topEmotions = Object.entries(emotionCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  // Trend detection
  const recentTrustAvg = trustData.slice(-7).reduce((sum, d) => sum + d.trust, 0) / Math.min(7, trustData.length);
  const olderTrustAvg = trustData.slice(0, -7).reduce((sum, d) => sum + d.trust, 0) / Math.max(1, trustData.length - 7);
  const trustTrend = recentTrustAvg > olderTrustAvg ? 'improving' : 'declining';

  // Get insights
  const insights = [];

  if (realityQuestioned > 0) {
    insights.push({
      type: 'warning',
      icon: AlertTriangle,
      message: `You've questioned your reality ${realityQuestioned} times in your check-ins. This is a key sign of gaslighting.`,
      color: '#FF8A80'
    });
  }

  if (repeatPercentage > 50) {
    insights.push({
      type: 'critical',
      icon: TrendingDown,
      message: `${repeatPercentage}% of documented incidents are recurring patterns. This suggests consistent problematic behavior, not isolated incidents.`,
      color: '#FF5252'
    });
  }

  if (excusesMade > realityQuestioned * 0.5) {
    insights.push({
      type: 'warning',
      icon: AlertTriangle,
      message: `You've made excuses for their behavior ${excusesMade} times. Notice this pattern of protecting them.`,
      color: '#FFB74D'
    });
  }

  if (trustTrend === 'declining') {
    insights.push({
      type: 'warning',
      icon: TrendingDown,
      message: 'Your self-trust has been declining recently. This is concerning and worth attention.',
      color: '#FFB74D'
    });
  }

  if (feltLikeSelf < checkIns.length * 0.3 && checkIns.length > 0) {
    insights.push({
      type: 'critical',
      icon: AlertTriangle,
      message: `You only felt like yourself ${Math.round((feltLikeSelf / checkIns.length) * 100)}% of the time. You deserve to feel like yourself.`,
      color: '#FF5252'
    });
  }

  if (loading) {
    return (
      <div className="max-w-6xl flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 mx-auto mb-4 rounded-full border-4 border-t-transparent"
               style={{ borderColor: "#122B1D" }} />
          <p style={{ color: "#122B1D" }}>Loading patterns...</p>
        </div>
      </div>
    );
  }

  if (entries.length === 0 && checkIns.length === 0) {
    return (
      <div className="max-w-4xl lily-bloom">
        <div className="clay-card p-12 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 lily-float" style={{ color: "#122B1D" }} />
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#122B1D" }}>
            No Data Yet
          </h2>
          <p className="mb-6" style={{ color: "#122B1D" }}>
            Start journaling and checking in to see patterns emerge over time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl lily-bloom">
      <div className="clay-card p-8 mb-6" style={{ background: "linear-gradient(145deg, #CDDECB, #90B7BF)" }}>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#122B1D" }}>
          Pattern Analysis
        </h1>
        <p className="text-lg" style={{ color: "#122B1D" }}>
          See the bigger picture. Patterns become clearer over time.
        </p>
      </div>

      {/* Key Insights */}
      {insights.length > 0 && (
        <div className="space-y-4 mb-6">
          {insights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <div key={idx} className="clay-card p-6" style={{ borderLeft: `4px solid ${insight.color}` }}>
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 mt-1" style={{ color: insight.color }} />
                  <p className="flex-1 leading-relaxed" style={{ color: "#122B1D" }}>
                    {insight.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="clay-card p-6">
          <div className="text-sm mb-1" style={{ color: "#122B1D" }}>Total Incidents</div>
          <div className="text-3xl font-bold" style={{ color: "#122B1D" }}>{entries.length}</div>
        </div>
        <div className="clay-card p-6">
          <div className="text-sm mb-1" style={{ color: "#122B1D" }}>Avg Self-Trust</div>
          <div className="text-3xl font-bold" style={{ color: "#122B1D" }}>
            {checkIns.length > 0 ? (checkIns.reduce((sum, c) => sum + c.self_trust_level, 0) / checkIns.length).toFixed(1) : 0}/10
          </div>
        </div>
        <div className="clay-card p-6">
          <div className="text-sm mb-1" style={{ color: "#122B1D" }}>Recurring</div>
          <div className="text-3xl font-bold" style={{ color: repeatPercentage > 50 ? "#FF5252" : "#122B1D" }}>
            {repeatPercentage}%
          </div>
        </div>
        <div className="clay-card p-6">
          <div className="text-sm mb-1" style={{ color: "#122B1D" }}>Check-Ins</div>
          <div className="text-3xl font-bold" style={{ color: "#122B1D" }}>{checkIns.length}</div>
        </div>
      </div>

      {/* Self-Trust Over Time */}
      {trustData.length > 0 && (
        <div className="clay-card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: "#122B1D" }}>
            <TrendingUp className="w-5 h-5" />
            Self-Trust Over Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trustData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(124, 179, 66, 0.2)" />
              <XAxis dataKey="date" stroke="#122B1D" />
              <YAxis domain={[0, 10]} stroke="#122B1D" />
              <Tooltip
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "18px",
                  boxShadow: "8px 8px 16px rgba(124, 179, 66, 0.2)"
                }}
              />
              <Line
                type="monotone"
                dataKey="trust"
                stroke="#122B1D"
                strokeWidth={4}
                dot={{ fill: "#122B1D", r: 7, strokeWidth: 2, stroke: "#FFFFFF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Incident Frequency */}
        {frequencyData.length > 0 && (
          <div className="clay-card p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: "#122B1D" }}>
              <Calendar className="w-5 h-5" />
              Incident Frequency
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={frequencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(124, 179, 66, 0.2)" />
                <XAxis dataKey="month" stroke="#122B1D" />
                <YAxis stroke="#122B1D" />
                <Tooltip
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "18px",
                    boxShadow: "8px 8px 16px rgba(124, 179, 66, 0.2)"
                  }}
                />
                <Bar dataKey="incidents" fill="#122B1D" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Severity Distribution */}
        {pieData.some(d => d.value > 0) && (
          <div className="clay-card p-6">
            <h3 className="text-xl font-semibold mb-6" style={{ color: "#122B1D" }}>
              Severity Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Top Emotions */}
      {topEmotions.length > 0 && (
        <div className="clay-card p-6 mb-6">
          <h3 className="text-xl font-semibold mb-6" style={{ color: "#122B1D" }}>
            Most Common Feelings
          </h3>
          <div className="space-y-4">
            {topEmotions.map(([emotion, count]) => {
              const percentage = (count / allEmotions.length) * 100;
              return (
                <div key={emotion}>
                  <div className="flex justify-between mb-2">
                    <span className="capitalize font-medium" style={{ color: "#122B1D" }}>{emotion}</span>
                    <span style={{ color: "#122B1D" }}>{count} times ({percentage.toFixed(0)}%)</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(124, 179, 66, 0.2)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                        background: "linear-gradient(90deg, #FF8A80, #FFB74D)"
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Timeline of Incidents */}
      {entries.length > 0 && (
        <div className="clay-card p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: "#122B1D" }}>
            <Clock className="w-5 h-5" />
            Timeline of Incidents
          </h3>
          <div className="space-y-3">
            {entries.slice(0, 10).map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedEntry(selectedEntry?.id === entry.id ? null : entry)}
                className="w-full clay-card p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{
                      background: entry.severity === 'severe' ? '#FF5252' :
                                 entry.severity === 'moderate' ? '#FFB74D' : '#A5D6A7'
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold" style={{ color: "#122B1D" }}>
                        {entry.title || "Incident"}
                      </h4>
                      <span className="text-sm" style={{ color: "#122B1D" }}>
                        {new Date(entry.created_date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm line-clamp-2" style={{ color: "#122B1D" }}>
                      {entry.what_happened}
                    </p>
                    {entry.has_happened_before && (
                      <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full"
                            style={{ background: "rgba(255, 82, 82, 0.15)", color: "#FF5252" }}>
                        Recurring Pattern
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
