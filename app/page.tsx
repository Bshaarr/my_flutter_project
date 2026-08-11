import Link from 'next/link'
import { FiBook, FiBarChart2, FiHome, FiAward, FiUsers } from 'react-icons/fi'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 text-3xl font-bold text-primary">
              <span>🏨</span>
              <span>Hotel IT Academy</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/student" className="text-gray-700 hover:text-primary transition">
                الطالب
              </Link>
              <Link href="/teacher" className="text-gray-700 hover:text-primary transition">
                المدرس
              </Link>
              <Link href="/login" className="btn-primary text-sm">
                دخول
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-purple-600 to-secondary text-white py-20">
        <div className="container-main text-center">
          <h1 className="text-5xl font-bold mb-6">🏨 Hotel IT Academy</h1>
          <p className="text-xl mb-8 text-gray-100">
            منصة أكاديمية المعلوماتية الفندقية - تعلم تقنيات الفندقة والحاسوب
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/student/register" className="btn-primary bg-white text-primary hover:bg-gray-100">
              سجل كطالب
            </Link>
            <Link href="/teacher/login" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              دخول المدرس
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-main">
          <h2 className="text-4xl font-bold text-center mb-16">المميزات الرئيسية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4">الدروس المتقدمة</h3>
              <p className="text-gray-600">
                10 وحدات تعليمية شاملة من أساسيات الحاسوب إلى أنظمة الفنادق
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-2xl font-bold mb-4">المختبر العملي</h3>
              <p className="text-gray-600">
                تمارين تفاعلية وحقيقية من بيئة الفندق
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold mb-4">محاكاة الفندق</h3>
              <p className="text-gray-600">
                نظام إدارة فندقي (PMS) افتراضي للتدريب العملي
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-4">نظام المطعم</h3>
              <p className="text-gray-600">
                محاكاة نقطة البيع (POS) للمطاعم الفندقية
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">نظام التصنيف</h3>
              <p className="text-gray-600">
                نقاط وشارات وتحديات لتحفيز التعلم
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">التحليلات والتقارير</h3>
              <p className="text-gray-600">
                تتبع التقدم والأداء والإحصائيات المفصلة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-white py-20">
        <div className="container-main">
          <h2 className="text-4xl font-bold text-center mb-16">المناهج الدراسية</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '🖥️ الوحدة 1: أساسيات الحاسوب',
              '🪟 الوحدة 2: Windows',
              '📄 الوحدة 3: Word',
              '📊 الوحدة 4: Excel',
              '🎨 الوحدة 5: PowerPoint',
              '🌐 الوحدة 6: Internet & Email',
              '🔗 الوحدة 7: Networks',
              '🔐 الوحدة 8: Cybersecurity',
              '💾 الوحدة 9: Databases',
              '🏨 الوحدة 10: Hotel Information Systems',
            ].map((unit, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-light rounded-lg hover:bg-gray-100 transition">
                <div className="text-3xl">{unit.split(':')[0]}</div>
                <span className="text-lg text-gray-700">{unit.split(':')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-main text-center">
          <h2 className="text-4xl font-bold mb-6">ابدأ رحلتك التعليمية اليوم</h2>
          <p className="text-xl mb-8">انضم إلى آلاف الطلاب الذين يتعلمون في أكاديمية المعلوماتية الفندقية</p>
          <Link href="/student/register" className="inline-block btn-primary bg-white text-primary hover:bg-gray-100">
            إنشاء حساب مجاني
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">عن الأكاديمية</h4>
              <p className="text-gray-400">منصة تعليمية متخصصة في تعليم تقنيات المعلوماتية في الفنادق</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">الروابط السريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/student">دخول الطالب</Link></li>
                <li><Link href="/teacher">دخول المدرس</Link></li>
                <li><Link href="/about">من نحن</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">المساعدة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">الأسئلة الشائعة</a></li>
                <li><a href="#">الدعم الفني</a></li>
                <li><a href="#">سياسة الخصوصية</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">التواصل</h4>
              <p className="text-gray-400">📧 info@hotelitacademy.com</p>
              <p className="text-gray-400">📱 +20 1234567890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hotel IT Academy. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
