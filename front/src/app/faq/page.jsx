"use client";
import React, { useState } from "react";
import { 
  ChevronDown, 
  Search, 
  MessageCircle, 
  HelpCircle, 
  Clock, 
  DollarSign, 
  Calendar, 
  Shield, 
  Wrench, 
  Phone, 
  Mail, 
  ArrowRight 
} from "lucide-react";

const faqCategories = [
  {
    id: "general",
    title: "General",
    icon: HelpCircle,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    questions: [
      {
        id: 1,
        question: "What services do you provide?",
        answer: "We do all types of building, renovation, and small repair work for homes and businesses."
      },
      {
        id: 2,
        question: "Do you take both home and business jobs?",
        answer: "Yes, we work on both. Whether it’s a house, shop, or office – we can help."
      },
      {
        id: 3,
        question: "Where do you work?",
        answer: "We mainly work in London and nearby areas."
      },
      {
        id: 4,
        question: "How much experience do you have?",
        answer: "Our team has several years of experience working on all kinds of building projects."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-50",
    questions: [
      {
        id: 5,
        question: "How do you set prices?",
        answer: "It depends on the job, the size, and the materials. We keep it fair and clear."
      },
      {
        id: 6,
        question: "Do you give free quotes?",
        answer: "Yes, we give free quotes before starting any work."
      },
      {
        id: 7,
        question: "How can I pay?",
        answer: "You can pay by bank transfer, card, or cash. For bigger jobs, we split payments by steps."
      }
    ]
  },
  {
    id: "timeline",
    title: "Timeline",
    icon: Calendar,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    questions: [
      {
        id: 8,
        question: "How long does a job take?",
        answer: "Small jobs take a few days, bigger jobs can take weeks. We’ll tell you before starting."
      },
      {
        id: 9,
        question: "Do you work every day?",
        answer: "We usually work Monday to Saturday, but we can also do Sundays if needed."
      },
      {
        id: 10,
        question: "What if there are delays?",
        answer: "We try to stay on time, but if there’s a delay we’ll let you know straight away."
      }
    ]
  },
  {
    id: "process",
    title: "Process",
    icon: Wrench,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    questions: [
      {
        id: 11,
        question: "How do you start a job?",
        answer: "We talk with you, agree on the work, give you a price, then start."
      },
      {
        id: 12,
        question: "Can I change my mind during the job?",
        answer: "Yes, small changes are fine. Bigger ones might change time and cost."
      },
      {
        id: 13,
        question: "How do you check quality?",
        answer: "We keep an eye on everything and only finish when you’re happy."
      }
    ]
  }
];


const FAQItem = ({ question, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">
          {question.question}
        </span>
        <div className="flex-shrink-0">
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`} 
          />
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-5 pt-2">
          <p className="text-gray-700 leading-relaxed">
            {question.answer}
          </p>
        </div>
      )}
    </div>
  );
};

const CategorySection = ({ category, openItems, onToggle, searchTerm }) => {
  const filteredQuestions = category.questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredQuestions.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-xl ${category.bgColor}`}>
          <category.icon className={`w-6 h-6 ${category.color}`} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
          <p className="text-gray-600">
            {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredQuestions.map((question) => (
          <FAQItem
            key={question.id}
            question={question}
            isOpen={openItems.includes(question.id)}
            onToggle={() => onToggle(question.id)}
          />
        ))}
      </div>
    </div>
  );
};

const ContactCTA = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl p-8 md:p-12 text-center text-black">
      <div>
        <MessageCircle className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Still Have Questions?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our friendly team is here to help. 
          Get in touch with us for personalized assistance with your project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
          <a 
            href="/projects"
            className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-black border-2 border-black/20 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            View Our Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-black/20">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">07300 825333</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="font-semibold">info@hermeco.co.uk</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">Mon-Fri 8AM-6PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredCategories = selectedCategory === "all" 
    ? faqCategories 
    : faqCategories.filter(cat => cat.id === selectedCategory);

  const totalQuestions = faqCategories.reduce((total, cat) => total + cat.questions.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 px-6 py-3 rounded-full shadow-sm mb-8">
            <HelpCircle className="w-6 h-6 text-yellow-700" />
            <span className="text-yellow-800 font-bold text-lg">
              Frequently Asked Questions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Got{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Find answers to the most commonly asked questions about our construction 
            and renovation services. From pricing to timelines, we've got you covered.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === "all"
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All ({totalQuestions})
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category.id
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.title} ({category.questions.length})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="mb-16">
          {filteredCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              openItems={openItems}
              onToggle={toggleItem}
              searchTerm={searchTerm}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.every(cat => 
          cat.questions.filter(q => 
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
          ).length === 0
        ) && searchTerm && (
          <div className="text-center py-20">
            <HelpCircle className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No questions found
            </h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your search terms or browse by category.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
};

export default FAQPage;