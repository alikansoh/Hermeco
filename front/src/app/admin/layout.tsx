"use client";

import React, { useState, ReactNode } from "react";
import { Users, Calendar, Folder, Menu, X, LogOut, Home, File, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

interface AdminSidebarProps {
  children: ReactNode;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { name: "Projects", href: "/admin/projects", icon: Folder },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Bookings", href: "/admin/bookings", icon: Calendar },
    { name: "blog", href: "/admin/blog", icon: File },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      {/* Professional header stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 z-50"></div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative flex w-full max-w-xs flex-col bg-white shadow-2xl">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
              {/* Mobile Header */}
              <div className="flex items-center px-6 pb-6 border-b border-yellow-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Hermeco</h2>
                    <p className="text-sm text-yellow-600 font-medium">Admin Dashboard</p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="mt-6 px-4">
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-4 px-4 py-3 text-base font-medium rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 hover:text-yellow-700 transition-all duration-200 hover:shadow-sm border hover:border-yellow-200"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-yellow-100 transition-colors">
                        <item.icon className="h-5 w-5 text-gray-500 group-hover:text-yellow-600" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                  
                  <button
                    onClick={handleLogout}
                    className="w-full group flex items-center gap-4 px-4 py-3 text-base font-medium rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:shadow-sm border hover:border-red-200"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-red-100 transition-colors">
                      <LogOut className="h-5 w-5 text-gray-500 group-hover:text-red-600" />
                    </div>
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white/80 backdrop-blur-xl px-6 pb-4 border-r border-yellow-200/50 shadow-xl">
          {/* Desktop Header */}
          <div className="flex h-20 shrink-0 items-center border-b border-yellow-100 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900">Hermeco</h2>
                <p className="text-sm text-yellow-600 font-semibold">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex flex-1 flex-col justify-between">
            <div className="space-y-7">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">
                  Main Navigation
                </p>
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-xl p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 hover:text-yellow-700 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-100/50 border hover:border-yellow-200/50"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-yellow-100 group-hover:to-amber-100 transition-all duration-200 group-hover:shadow-md">
                        <item.icon className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-yellow-600" />
                      </div>
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div className="pt-4 border-t border-yellow-100">
              <button
                onClick={handleLogout}
                className="w-full group flex items-center gap-4 rounded-xl p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:shadow-lg border hover:border-red-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-red-100 transition-colors">
                  <LogOut className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-red-600" />
                </div>
                <span className="truncate">Sign Out</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-80">
        {/* Mobile Header */}
        <div className="sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b border-yellow-200/50 bg-white/90 backdrop-blur-xl px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 hover:text-yellow-600 lg:hidden transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="h-6 w-px bg-yellow-200" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
        </div>

        {/* Desktop Header - REMOVED to prevent overlap */}
        
        {/* Page Content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminSidebar;