'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Register:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🏨</div>
          <h1 className="text-3xl font-bold text-primary">Hotel IT Academy</h1>
          <p className="text-gray-600 mt-2">إنشاء حساب جديد</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              الاسم الكامل
            </label>
            <div className="relative">
              <FiUser className="absolute right-3 top-3 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="أحمد محمد"
                className="input-field pr-10"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <FiMail className="absolute right-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="input-field pr-10"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              رقم الهاتف
            </label>
            <div className="relative">
              <FiPhone className="absolute right-3 top-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+20 1000000000"
                className="input-field pr-10"
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-field pr-10"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              تأكيد كلمة المرور
            </label>
            <div className="relative">
              <FiLock className="absolute right-3 top-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-field pr-10"
                required
              />
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4 mt-1" required />
            <span>أوافق على الشروط والأحكام وسياسة الخصوصية</span>
          </label>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full">
            إنشاء الحساب
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          لديك حساب بالفعل؟{' '}
          <Link href="/login" className="text-primary font-bold hover:underline">
            دخول
          </Link>
        </p>
      </div>
    </div>
  )
}
