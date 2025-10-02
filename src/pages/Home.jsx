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
    <div className="space-y-6 lily-bloom">
      {/* Welcome Header */}
      <div className="clay-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#7CB342" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,84,-5.7,83.2C-22.2,82.4,-39.1,77.8,-52.4,69.4C-65.7,61,-75.4,48.8,-81.3,35.1C-87.2,21.4,-89.3,6.2,-86.8,-7.9C-84.3,-22,-77.2,-35,-67.8,-46.6C-58.4,-58.2,-46.7,-68.4,-33.5,-76.2C-20.3,-84,-10.2,-89.4,2.4,-93.5C15,-97.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center lily-float"
                 style={{
                   background: "linear-gradient(145deg, #FFD54F, #FFB74D)",
                   boxShadow: "6px 6px 12px rgba(255, 183, 77, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                 }}>
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#558B2F" }}>
                Welcome Back
              </h1>
              <p style={{ color: "#7CB342" }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="clay-card p-6 mt-6" style={{ background: "linear-gradient(145deg, #FFF8F0, #FFE5F0)" }}>
            <p className="text-center text-lg font-medium mb-2" style={{ color: "#558B2F" }}>
              Today's Affirmation
            </p>
            <p className="text-center italic text-xl" style={{ color: "#7CB342" }}>
              "{affirmation}"
            </p>
          </div>
        </div>
      </div>

      {/* Daily Check-In Prompt */}
      {!todayCheckIn && (
        <div className="clay-card p-6" style={{ background: "linear-gradient(145deg, #C8D5B9, #A5D6A7)" }}>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{
                   background: "rgba(255, 255, 255, 0.6)",
                   boxShadow: "inset 3px 3px 6px rgba(124, 179, 66, 0.2)"
                 }}>
              <Calendar className="w-7 h-7" style={{ color: "#558B2F" }} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2" style={{ color: "#FFFFFF" }}>
                Daily Check-In
              </h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
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
        <div className="clay-card p-6" style={{ background: "linear-gradient(145deg, #D4E4E8, #81D4FA)" }}>
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
            <div className="w-14 h-14 rounded-full flex items-center justify-center lily-float"
                 style={{
                   background: "linear-gradient(145deg, #FFB6C1, #FF8A80)",
                   boxShadow: "6px 6px 12px rgba(255, 138, 128, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                 }}>
              <Edit className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#558B2F" }}>
                Journal
              </h3>
              <p className="text-sm" style={{ color: "#7CB342" }}>
                Write your thoughts
              </p>
            </div>
          </div>
        </Link>

        <Link to={createPageUrl("Grounding")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center lily-float"
                 style={{
                   background: "linear-gradient(145deg, #A5D6A7, #7CB342)",
                   boxShadow: "6px 6px 12px rgba(124, 179, 66, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                 }}>
              <Flower2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#558B2F" }}>
                Grounding
              </h3>
              <p className="text-sm" style={{ color: "#7CB342" }}>
                Calming exercises
              </p>
            </div>
          </div>
        </Link>

        <Link to={createPageUrl("RealityCheck")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center lily-float"
                 style={{
                   background: "linear-gradient(145deg, #81D4FA, #4FC3F7)",
                   boxShadow: "6px 6px 12px rgba(79, 195, 247, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                 }}>
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#558B2F" }}>
                Daily Reflection
              </h3>
              <p className="text-sm" style={{ color: "#7CB342" }}>
                Check in with yourself
              </p>
            </div>
          </div>
        </Link>

        <Link to={createPageUrl("Patterns")} className="clay-card p-6 group hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center lily-float"
                 style={{
                   background: "linear-gradient(145deg, #FFD54F, #FFB74D)",
                   boxShadow: "6px 6px 12px rgba(255, 183, 77, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                 }}>
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: "#558B2F" }}>
                Insights
              </h3>
              <p className="text-sm" style={{ color: "#7CB342" }}>
                View your progress
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Inspirational Quote */}
      <div className="clay-card p-8 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 lily-float"
             style={{
               background: "linear-gradient(145deg, #D4E4E8, #81D4FA)",
               boxShadow: "6px 6px 12px rgba(129, 212, 250, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
             }}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z"/>
            <path d="M12 14C12 14 8 14 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 14 12 14 12 14Z"/>
          </svg>
        </div>
        <p className="text-lg italic mb-2" style={{ color: "#558B2F" }}>
          "{quote}"
        </p>
        <p className="text-sm" style={{ color: "#7CB342" }}>
          Take care of yourself today 💚
        </p>
      </div>
    </div>
  );
}
