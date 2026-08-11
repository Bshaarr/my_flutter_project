import Link from 'next/link'
import { FiBarChart3, FiUsers, FiFileText, FiTrendingUp } from 'react-icons/fi'

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container-main h-20 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">👨‍🏫 لوحة المدرس</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">د. محمود علي</span>
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center">م</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-main py-12">
        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card">
            <div className="text-4xl mb-2">👨‍🎓</div>
            <p className="text-gray-600 text-sm mb-2">عدد الطلاب</p>
            <p className="text-3xl font-bold">120</p>
            <p className="text-sm text-green-600 mt-2">↑ 8 طلاب هذا الأسبوع</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-gray-600 text-sm mb-2">نسبة الإكمال</p>
            <p className="text-3xl font-bold">73%</p>
            <p className="text-sm text-gray-500 mt-2">المنهج الكامل</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-600 text-sm mb-2">متوسط الدرجات</p>
            <p className="text-3xl font-bold">78%</p>
            <p className="text-sm text-gray-500 mt-2">لجميع الطلاب</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-2">⚠️</div>
            <p className="text-gray-600 text-sm mb-2">وحدة ضعيفة</p>
            <p className="text-xl font-bold text-red-600">Cybersecurity</p>
            <p className="text-sm text-gray-500 mt-2">تحتاج متابعة</p>
          </div>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Student Performance */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiTrendingUp className="text-primary" />
              أداء الطلاب
            </h2>
            <div className="space-y-4">
              {[
                { name: 'أحمد محمد', progress: 95, color: 'bg-green-500' },
                { name: 'سارة علي', progress: 88, color: 'bg-green-500' },
                { name: 'محمود سالم', progress: 72, color: 'bg-yellow-500' },
                { name: 'فاطمة خالد', progress: 65, color: 'bg-orange-500' },
              ].map((student) => (
                <div key={student.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">{student.name}</span>
                    <span className="text-sm font-bold">{student.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className={`${student.color} h-2 rounded-full`}
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Units Performance */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiBarChart3 className="text-secondary" />
              أداء الوحدات
            </h2>
            <div className="space-y-3">
              {[
                { unit: 'Word', performance: 92 },
                { unit: 'Excel', performance: 85 },
                { unit: 'Networks', performance: 78 },
                { unit: 'Cybersecurity', performance: 62 },
              ].map((item) => (
                <div key={item.unit} className="p-3 bg-light rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span>{item.unit}</span>
                    <span className="font-bold">{item.performance}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: `${item.performance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/teacher/students" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">👨‍🎓</div>
            <h3 className="text-xl font-bold mb-2">إدارة الطلاب</h3>
            <p className="text-gray-600">عرض وإدارة بيانات الطلاب</p>
          </Link>
          <Link href="/teacher/questions" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">بنك الأسئلة</h3>
            <p className="text-gray-600">إضافة وتعديل الأسئلة</p>
          </Link>
          <Link href="/teacher/reports" className="card text-center hover:shadow-2xl">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">التقارير</h3>
            <p className="text-gray-600">تقارير الأداء والإحصائيات</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
