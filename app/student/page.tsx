import Link from 'next/link'
import { FiBook, FiClipboardList, FiTrendingUp, FiAward } from 'react-icons/fi'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container-main h-20 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">🏨 لوحة الطالب</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">مرحباً بك، أحمد محمد</span>
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">أ</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-gray-600 text-sm mb-2">الدروس المكتملة</p>
            <p className="text-3xl font-bold">7/10</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-2">⭐</div>
            <p className="text-gray-600 text-sm mb-2">النقاط (XP)</p>
            <p className="text-3xl font-bold">2,450</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-600 text-sm mb-2">متوسط الدرجات</p>
            <p className="text-3xl font-bold">85%</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-2">🏆</div>
            <p className="text-gray-600 text-sm mb-2">المستوى</p>
            <p className="text-3xl font-bold">محترف</p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Lessons */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FiBook className="text-primary" />
                الدروس
              </h2>
              <Link href="/student/lessons" className="text-primary hover:underline text-sm">
                عرض الكل →
              </Link>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-light rounded-lg hover:bg-gray-200 transition cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">الوحدة {i}: أساسيات الحاسوب</span>
                    <span className="text-sm text-green-600 font-bold">✓ مكتمل</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exams */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FiClipboardList className="text-secondary" />
                الاختبارات
              </h2>
              <Link href="/student/exams" className="text-primary hover:underline text-sm">
                عرض الكل →
              </Link>
            </div>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="p-4 bg-light rounded-lg hover:bg-gray-200 transition cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">اختبار الوحدة {i}</span>
                    <span className="text-sm font-bold">92%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">آخر محاولة: أمس</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Link href="/student/lab" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="font-bold mb-2">المختبر العملي</h3>
            <p className="text-sm text-gray-600">تمارين عملية</p>
          </Link>
          <Link href="/student/simulator" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">🏨</div>
            <h3 className="font-bold mb-2">محاكاة الفندق</h3>
            <p className="text-sm text-gray-600">نظام PMS</p>
          </Link>
          <Link href="/student/restaurant" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="font-bold mb-2">نظام المطعم</h3>
            <p className="text-sm text-gray-600">نقطة البيع</p>
          </Link>
          <Link href="/student/badges" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">🏅</div>
            <h3 className="font-bold mb-2">الإنجازات</h3>
            <p className="text-sm text-gray-600">شارات وميدليات</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
