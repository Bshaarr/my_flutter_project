'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🏨</div>
          <h1 className="text-3xl font-bold text-primary">Hotel IT Academy</h1>
          <p className="text-gray-600 mt-2">تسجيل الدخول</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <FiMail className="absolute right-3 top-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="input-field pr-10"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              كلمة المرور
            </label>
            <div className="relative">
              <FiLock className="absolute right-3 top-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="w-4 h-4" />
              تذكرني
            </label>
            <Link href="/forgot-password" className="text-primary hover:underline">
              هل نسيت كلمة المرور؟
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full">
            دخول
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">أو</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-600">
          ليس لديك حساب؟{' '}
          <Link href="/student/register" className="text-primary font-bold hover:underline">
            إنشاء حساب
          </Link>
        </p>
      </div>
    </div>
  )
}
