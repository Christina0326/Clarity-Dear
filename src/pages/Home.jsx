import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BookOpen, Edit, Calendar, TrendingUp, Sparkles, Heart, Flower2 } from "lucide-react";
import { CheckIn } from "@/entities/CheckIn";

export default function Home() {
  const [todayCheckIn, setTodayCheckIn] = useState(null);
  const [quote] = useState([
    "You are stronger than you know.",
    "Trust yourself. Your feelings matter.",
    "Every day is a new beginning.",
    "You deserve peace and happiness.",
    "Be gentle with yourself today.",
    "Your journey is valid.",
    "Small steps are still progress.",
    "You are worthy of love and respect."
  ][Math.floor(Math.random() * 8)]);

  const [affirmation] = useState([
    "I trust my intuition and inner wisdom",
    "I am worthy of healthy, loving relationships",
    "My feelings and needs are valid",
    "I choose peace and clarity today",
    "I am strong, capable, and resilient",
    "I deserve to be treated with respect",
    "I am creating a life I love",
    "I honor my truth and speak it with confidence"
  ][Math.floor(Math.random() * 8)]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const checkIns = await CheckIn.list();
    const today = new Date().toDateString();
    const todayCheck = checkIns.find(c => new Date(c.created_date).toDateString() === today);
    setTodayCheckIn(todayCheck);
  };

  return (
    <div className="space-y-6 wave-rise">
      {/* Welcome Header */}
      <div className="clay-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#122B1D" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,84,-5.7,83.2C-22.2,82.4,-39.1,77.8,-52.4,69.4C-65.7,61,-75.4,48.8,-81.3,35.1C-87.2,21.4,-89.3,6.2,-86.8,-7.9C-84.3,-22,-77.2,-35,-67.8,-46.6C-58.4,-58.2,-46.7,-68.4,-33.5,-76.2C-20.3,-84,-10.2,-89.4,2.4,-93.5C15,-97.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center tide-float"
                 style={{
                  background: "linear-gradient(145deg, #024D60, #2CACAD)",
                  boxShadow: "6px 6px 12px rgba(44, 172, 173, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.7)"
                 }}>
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#1C4E47" }}>
                Welcome Back
              </h1>
              <p style={{ color: "#024D60" }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="clay-card p-6 mt-6" style={{ background: "rgba(255, 255, 255, 0.6)" }}>
            <p className="text-center text-lg font-medium mb-2" style={{ color: "#1C4E47" }}>
              Today's Affirmation
            </p>
            <p className="text-center italic text-xl" style={{ color: "#024D60" }}>
              "{affirmation}"
            </p>
          </div>
        </div>
      </div>

      {/* Daily Check-In Prompt */}
      {!todayCheckIn && (
        <div className="clay-card p-6" style={{ background: "rgba(118, 226, 224, 0.4)" }}>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{
                   background: "rgba(217, 245, 240, 0.8)",
                   boxShadow: "inset 3px 3px 6px rgba(44, 172, 173, 0.2)"
                 }}>
              <Calendar className="w-7 h-7" style={{ color: "#1C4E47" }} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2" style={{ color: "#1C4E47" }}>
                Daily Check-In
              </h3>
              <p className="text-sm mb-4" style={{ color: "#024D60" }}>
                Take a moment to reflect on how you're feeling today.
              </p>
              <Link to={createPageUrl("CheckIn")} className="clay-button inline-block px-6 py-3 text-white font-medium">
                Start Check-In
              </Link>
            </div>
          </div>
        </div>
      )}

      {todayCheckIn && (
        <div className="clay-card p-6" style={{ background: "linear-gradient(145deg, #2CACAD, #76E2E0)" }}>
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-white" />
            <h3 className="font-semibold text-lg text-white">
              Check-In Complete
            </h3>
          </div>
          <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            You've checked in today. Remember to be gentle with yourself.
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link to={createPageUrl("Journal")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center tide-float"
                 style={{
                   background: "linear-gradient(145deg, #2CACAD, #76E2E0)",
                   boxShadow: "6px 6px 12px rgba(44, 172, 173, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.7)"
                 }}>
              <Edit className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#1C4E47" }}>
                Journal
              </h3>
              <p className="text-sm" style={{ color: "#024D60" }}>
                Write your thoughts
              </p>
            </div>
          </div>
        </Link>

        <Link to={createPageUrl("Grounding")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center tide-float"
                 style={{
                   background: "linear-gradient(145deg, #76E2E0, #D9F5F0)",
                   boxShadow: "6px 6px 12px rgba(118, 226, 224, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.7)"
                 }}>
              <Flower2 className="w-7 h-7" style={{ color: "#1C4E47" }} />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#1C4E47" }}>
                Grounding
              </h3>
              <p className="text-sm" style={{ color: "#024D60" }}>
                Calming exercises
              </p>
            </div>
          </div>
        </Link>

        <Link to={createPageUrl("RealityCheck")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center tide-float"
                 style={{
                   background: "linear-gradient(145deg, #1C4E47, #024D60)",
                   boxShadow: "6px 6px 12px rgba(28, 78, 71, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.7)"
                 }}>
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#1C4E47" }}>
                Daily Reflection
              </h3>
              <p className="text-sm" style={{ color: "#024D60" }}>
                Check in with yourself
              </p>
            </div>
          </div>
        </Link>

        <Link to={createPageUrl("Patterns")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center tide-float"
                 style={{
                   background: "linear-gradient(145deg, #024D60, #2CACAD)",
                   boxShadow: "6px 6px 12px rgba(2, 77, 96, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.7)"
                 }}>
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#1C4E47" }}>
                Insights
              </h3>
              <p className="text-sm" style={{ color: "#024D60" }}>
                View your progress
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Inspirational Quote */}
      <div className="clay-card p-8 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 tide-float"
             style={{
             background: "linear-gradient(145deg, #76E2E0, #D9F5F0)",
             boxShadow: "6px 6px 12px rgba(118, 226, 224, 0.35), -4px -4px 8px rgba(255, 255, 255, 0.6)"
             }}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1C4E47">
            <path d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z"/>
            <path d="M12 14C12 14 8 14 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 14 12 14 12 14Z"/>
          </svg>
        </div>
        <p className="text-lg italic mb-2" style={{ color: "#1C4E47" }}>
          "{quote}"
        </p>
        <p className="text-sm" style={{ color: "#024D60" }}>
          Take care of yourself today 💗
        </p>
      </div>
    </div>
  );
}
