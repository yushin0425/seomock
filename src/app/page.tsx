import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
        <Image
                src="/images/logo.png"
                alt="서목공영 로고"
                fill
                style={{ objectFit: "contain" }}
          priority
        />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">서목공영</h1>
          <p className="text-2xl mb-8">토목전문 건설사</p>
          <button className="bg-stone-100 hover:bg-white text-zinc-800 px-8 py-3 rounded-full transition duration-300 text-lg font-semibold shadow-lg">
            문의하기
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-50" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">회사 소개</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  [회사의 비전 및 미션 설명]
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>고객 중심의 혁신적인 솔루션</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>지속 가능한 기술 개발</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span>
                    <span>글로벌 시장 진출</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">회사 연혁</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-bold">2024</span>
                    <p>[주요 성과]</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-bold">2023</span>
                    <p>[주요 성과]</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-bold">2022</span>
                    <p>[주요 성과]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">사업 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">솔루션 개발</h3>
                <p className="text-gray-600 mb-4">
                  맞춤형 소프트웨어 솔루션 개발 및 컨설팅 서비스를 제공합니다.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">IT 컨설팅</h3>
                <p className="text-gray-600 mb-4">
                  기업의 디지털 전환을 위한 전문적인 컨설팅을 제공합니다.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-3xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-2">시스템 유지보수</h3>
                <p className="text-gray-600 mb-4">
                  안정적인 시스템 운영을 위한 전문 유지보수 서비스를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <h3 className="font-bold mb-2">개발 환경</h3>
              <p className="text-gray-600">Cloud Native<br/>MSA<br/>DevOps</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">주요 기술</h3>
              <p className="text-gray-600">AI/ML<br/>Big Data<br/>Blockchain</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-bold mb-2">보안</h3>
              <p className="text-gray-600">ISO 27001<br/>ISMS<br/>암호화</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="font-bold mb-2">인프라</h3>
              <p className="text-gray-600">AWS<br/>Azure<br/>GCP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">본사</h3>
                <p className="text-gray-600 mb-2">경기도 남양주시 덕송2로 70-9, 3층 304호 (별내동, 미래타워)</p>
                <p className="text-gray-600 mb-2">Tel: 010-6268-6937</p>
                <p className="text-gray-600">Email: seomock04@hanmail.net</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">SNS</h3>
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="text-2xl">📱</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="text-2xl">💼</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="text-2xl">📧</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
    </div>
      </section>
    </main>
  );
}
